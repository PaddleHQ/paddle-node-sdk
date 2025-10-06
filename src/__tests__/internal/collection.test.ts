import { NodeRuntime } from '../../index.esm.node.js';
import { Client } from '../../internal/api/client.js';
import { Environment } from '../../internal/index.js';
import { Collection } from '../../internal/base/collection.js';
import { ApiError } from '../../internal/errors/generic.js';

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
    const mockResponse = {
      status: 429,
      headers: new Map([['Retry-After', '17']]),
      json: jest.fn().mockResolvedValue({
        error: {
          type: 'request_error',
          code: 'too_many_requests',
          detail:
            'IP address exceeded the allowed rate limit. Retry after the number of seconds in the Retry-After header.',
          documentation_url: 'https://developer.paddle.com/errors/shared/too_many_requests',
        },
        meta: { request_id: 'req_pag_err_1' },
      }),
    } as unknown as Response;

    mockFetch.mockResolvedValue(mockResponse);

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
    const mockResponse = {
      status: 429,
      headers: new Map(),
      json: jest.fn().mockResolvedValue({
        error: {
          type: 'request_error',
          code: 'conflict',
          detail: 'Request conflicts with another change.',
          documentation_url: 'https://developer.paddle.com/errors/shared/too_many_requests',
        },
        meta: { request_id: 'req_pag_err_2' },
      }),
    } as unknown as Response;

    mockFetch.mockResolvedValue(mockResponse);

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

  test('successful paginated response maps data and updates pagination', async () => {
    const mockResponse = {
      status: 200,
      headers: new Map(),
      json: jest.fn().mockResolvedValue({
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
      }),
    } as unknown as Response;

    mockFetch.mockResolvedValue(mockResponse);

    const col = new TestCollection(client, '/paginated');
    const result = await col.next();

    expect(result).toEqual([{ id: 'a' }, { id: 'b' }]);
    expect(col.hasMore).toBe(true);
    expect(col.estimatedTotal).toBe(4);
  });
});
