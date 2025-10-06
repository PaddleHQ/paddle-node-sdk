import { NodeRuntime } from '../../index.esm.node.js';
import { Client } from '../../internal/api/client.js';
import { Environment, ErrorResponse, Response } from '../../internal/index.js';
import { BaseResource } from '../../internal/base/base-resource.js';
import { ApiError } from '../../internal/errors/generic.js';

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
    const mockResponse = {
      status: 429,
      headers: new Map([['Retry-After', '42']]),
      json: jest.fn().mockResolvedValue({
        error: {
          type: 'request_error',
          code: 'too_many_requests',
          detail:
            'IP address exceeded the allowed rate limit. Retry after the number of seconds in the Retry-After header.',
          documentation_url: 'https://developer.paddle.com/errors/shared/too_many_requests',
        },
        meta: { request_id: 'req_1' },
      }),
    };

    mockFetch.mockResolvedValue(mockResponse);

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
    const mockResponse = {
      status: 409,
      headers: new Map(),
      json: jest.fn().mockResolvedValue({
        error: {
          type: 'request_error',
          code: 'conflict',
          detail: 'Request conflicts with another change.',
          documentation_url: 'https://developer.paddle.com/errors/shared/too_many_requests',
        },
        meta: { request_id: 'req_2' },
      }),
    };

    mockFetch.mockResolvedValue(mockResponse);

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

  test('successful responses pass through handleResponse', async () => {
    const mockResponse = {
      status: 200,
      headers: new Map([['Retry-After', '99']]),
      json: jest.fn().mockResolvedValue({
        data: { id: 'ok' },
        meta: { request_id: 'req_ok' },
      }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await resource.trigger('/ok');
    expect(result).toEqual({ id: 'ok' });
  });
});
