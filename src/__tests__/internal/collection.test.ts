import { NodeRuntime } from '../../index.esm.node.js';
import { Client } from '../../internal/api/client.js';
import { Environment } from '../../internal/index.js';
import { Collection } from '../../internal/base/collection.js';
import { ApiError } from '../../internal/errors/generic.js';
import { apiResponse } from '../helpers/api-response.js';

class TestCollection extends Collection<Record<string, unknown>, Record<string, unknown>> {
  fromJson(data: Record<string, unknown>): Record<string, unknown> {
    return data;
  }
}

const mockFetch = jest.fn();

describe('Collection', () => {
  let client: Client;

  beforeAll(() => {
    // Mock fetch globally
    global.fetch = mockFetch;
  });

  beforeEach(() => {
    NodeRuntime.initialize();
    client = new Client('TEST_API_KEY', { environment: Environment.sandbox });
    mockFetch.mockClear();
  });

  test('throws ApiError with retryAfter when Retry-After header present (paginated)', async () => {
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
        meta: { request_id: 'req_pag_err_1' },
      },
      { 'Retry-After': '17' },
    );

    mockFetch.mockImplementation(async () => mockResponse.clone());

    const col = new TestCollection(client, '/paginated');

    await expect(col.next()).rejects.toBeInstanceOf(ApiError);

    try {
      await col.next();
    } catch (err) {
      const e = err as ApiError;
      expect(e.type).toBe('request_error');
      expect(e.code).toBe('too_many_requests');
      expect(e.retryAfter).toBe(17);
    }
  });

  test('throws ApiError with undefined retryAfter when header absent (paginated)', async () => {
    const mockResponse = apiResponse(429, {
      error: {
        type: 'request_error',
        code: 'conflict',
        detail: 'Request conflicts with another change.',
        documentation_url: 'https://developer.paddle.com/errors/shared/too_many_requests',
      },
      meta: { request_id: 'req_pag_err_2' },
    });

    mockFetch.mockImplementation(async () => mockResponse.clone());

    const col = new TestCollection(client, '/paginated');

    await expect(col.next()).rejects.toBeInstanceOf(ApiError);

    try {
      await col.next();
    } catch (err) {
      const e = err as ApiError;
      expect(e.type).toBe('request_error');
      expect(e.code).toBe('conflict');
      expect(e.retryAfter).toBeNull();
    }
  });

  test('throws ApiError with status and retryAfter for an HTML 429 response (paginated)', async () => {
    mockFetch.mockResolvedValue(
      new Response('<html><body>You are being rate limited</body></html>', {
        status: 429,
        headers: { 'Content-Type': 'text/html', 'Retry-After': '12' },
      }),
    );

    const col = new TestCollection(client, '/paginated');
    const error = await col.next().catch((err: unknown) => err);

    expect(error).toBeInstanceOf(ApiError);
    expect(error).toMatchObject({ code: 'too_many_requests', status: 429, retryAfter: 12 });
  });

  test('successful paginated response maps data and updates pagination', async () => {
    const mockResponse = apiResponse(200, {
      data: [{ id: 'a' }, { id: 'b' }],
      meta: {
        request_id: 'req_pag_ok',
        pagination: {
          per_page: 2,
          next: '/paginated?page=2',
          has_more: true,
          estimated_total: 4,
        },
      },
    });

    mockFetch.mockImplementation(async () => mockResponse.clone());

    const col = new TestCollection(client, '/paginated');
    const result = await col.next();

    expect(result).toEqual([{ id: 'a' }, { id: 'b' }]);
    expect(col.hasMore).toBe(true);
    expect(col.estimatedTotal).toBe(4);
  });
});
