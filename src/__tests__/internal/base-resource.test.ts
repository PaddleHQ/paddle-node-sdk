import { NodeRuntime } from '../../index.esm.node.js';
import { Client } from '../../internal/api/client.js';
import { Environment, ErrorResponse, Response } from '../../internal/index.js';
import { BaseResource } from '../../internal/base/base-resource.js';
import { ApiError } from '../../internal/errors/generic.js';
import { apiResponse } from '../helpers/api-response.js';

class TestResource extends BaseResource {
  public async trigger(url: string) {
    const response = await this.client.get<undefined, Response<object> | ErrorResponse>(url);
    return this.handleResponse(response);
  }
}

const mockFetch = jest.fn();

describe('BaseResource', () => {
  let client: Client;
  let resource: TestResource;

  beforeAll(() => {
    // Mock fetch globally
    global.fetch = mockFetch;
  });

  beforeEach(() => {
    NodeRuntime.initialize();
    client = new Client('TEST_API_KEY', { environment: Environment.sandbox });
    resource = new TestResource(client);
    mockFetch.mockClear();
  });

  test('throws ApiError with retryAfter when Retry-After header present', async () => {
    const mockResponse = apiResponse(
      429,
      {
        error: {
          type: 'request_error',
          code: 'too_many_requests',
          detail:
            'IP address exceeded the allowed rate limit. Retry after the number of seconds in the Retry-After header.',
          documentation_url: 'https://developer.paddle.com/errors/shared/too_many_requests',
        },
        meta: { request_id: 'req_1' },
      },
      { 'Retry-After': '42' },
    );

    mockFetch.mockImplementation(async () => mockResponse.clone());

    await expect(resource.trigger('/test')).rejects.toBeInstanceOf(ApiError);

    try {
      await resource.trigger('/test');
    } catch (err) {
      const e = err as ApiError;
      expect(e.type).toBe('request_error');
      expect(e.code).toBe('too_many_requests');
      expect(e.detail).toBe(
        'IP address exceeded the allowed rate limit. Retry after the number of seconds in the Retry-After header.',
      );
      expect(e.retryAfter).toBe(42);
    }
  });

  test('throws ApiError with undefined retryAfter when header absent', async () => {
    const mockResponse = apiResponse(409, {
      error: {
        type: 'request_error',
        code: 'conflict',
        detail: 'Request conflicts with another change.',
        documentation_url: 'https://developer.paddle.com/errors/shared/too_many_requests',
      },
      meta: { request_id: 'req_2' },
    });

    mockFetch.mockImplementation(async () => mockResponse.clone());

    await expect(resource.trigger('/test')).rejects.toBeInstanceOf(ApiError);

    try {
      await resource.trigger('/test');
    } catch (err) {
      const e = err as ApiError;
      expect(e.type).toBe('request_error');
      expect(e.code).toBe('conflict');
      expect(e.detail).toBe('Request conflicts with another change.');
      expect(e.retryAfter).toBeNull();
    }
  });

  test('throws ApiError with status and retryAfter for an HTML 429 response', async () => {
    const mockResponse = new globalThis.Response('<html><body>You are being rate limited</body></html>', {
      status: 429,
      headers: { 'Content-Type': 'text/html', 'Retry-After': '30' },
    });

    mockFetch.mockResolvedValue(mockResponse);

    const error = await resource.trigger('/test').catch((err: unknown) => err);

    expect(error).toBeInstanceOf(ApiError);
    expect(error).toMatchObject({
      type: 'request_error',
      code: 'too_many_requests',
      status: 429,
      retryAfter: 30,
      detail:
        'Paddle API returned an unexpected response with HTTP status 429: <html><body>You are being rate limited</body></html>',
    });
  });

  test('throws ApiError with status for a JSON error response', async () => {
    mockFetch.mockResolvedValue(
      apiResponse(404, {
        error: { type: 'request_error', code: 'not_found', detail: 'Not found', documentation_url: '' },
        meta: { request_id: 'req_404' },
      }),
    );

    await expect(resource.trigger('/test')).rejects.toMatchObject({ code: 'not_found', status: 404 });
  });

  test('successful responses pass through handleResponse', async () => {
    const mockResponse = apiResponse(
      200,
      {
        data: { id: 'ok' },
        meta: { request_id: 'req_ok' },
      },
      { 'Retry-After': '99' },
    );

    mockFetch.mockImplementation(async () => mockResponse.clone());

    const result = await resource.trigger('/ok');
    expect(result).toEqual({ id: 'ok' });
  });
});
