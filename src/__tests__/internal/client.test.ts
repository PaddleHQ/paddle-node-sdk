import { NodeRuntime } from '../../index.esm.node.js';
import { Client } from '../../internal/api/client.js';
import { Environment } from '../../internal/index.js';
import { rawResponse } from '../../internal/types/response.js';
import { apiResponse } from '../helpers/api-response.js';

const mockFetch = jest.fn();

const cloudflareRateLimitPage =
  '<!DOCTYPE html>\n<html>\n  <head><title>Error 1015</title></head>\n  <body>You are being rate limited</body>\n</html>';

describe('Client', () => {
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

  test('should include raw response in GET request', async () => {
    const mockResponse = apiResponse(
      200,
      { data: { id: 'test_id' }, meta: { request_id: 'req_123' } },
      { 'Retry-After': '60' },
    );

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.get('/test-endpoint');

    expect(result).toEqual({
      data: { id: 'test_id' },
      meta: { request_id: 'req_123' },
      [rawResponse]: mockResponse,
    });
  });

  test('should include raw response in POST request', async () => {
    const mockResponse = apiResponse(
      200,
      { data: { id: 'test_id' }, meta: { request_id: 'req_123' } },
      { 'Retry-After': '60' },
    );

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.post('/test-endpoint', { test: 'data' });

    expect(result).toEqual({
      data: { id: 'test_id' },
      meta: { request_id: 'req_123' },
      [rawResponse]: mockResponse,
    });
  });

  test('should include raw response in PATCH request', async () => {
    const mockResponse = apiResponse(
      200,
      { data: { id: 'test_id' }, meta: { request_id: 'req_123' } },
      { 'Retry-After': '60' },
    );

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.patch('/test-endpoint', { test: 'data' });

    expect(result).toEqual({
      data: { id: 'test_id' },
      meta: { request_id: 'req_123' },
      [rawResponse]: mockResponse,
    });
  });

  test('should include raw response in DELETE error response', async () => {
    const errorBody = {
      error: { type: 'request_error', code: 'not_found', detail: 'Not found', documentation_url: '' },
      meta: { request_id: 'req_123' },
    };
    const mockResponse = apiResponse(404, errorBody);

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.delete('/test-endpoint');

    expect(result).toEqual({ ...errorBody, [rawResponse]: mockResponse });
  });

  test('should return an empty body for a successful response without content', async () => {
    const mockResponse = new Response(null, { status: 202 });

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.post('/test-endpoint', { test: 'data' });

    expect(result).toEqual({ [rawResponse]: mockResponse });
  });

  test.each([
    ['GET', (c: Client) => c.get('/test-endpoint')],
    ['POST', (c: Client) => c.post('/test-endpoint', { test: 'data' })],
    ['PATCH', (c: Client) => c.patch('/test-endpoint', { test: 'data' })],
    ['DELETE', (c: Client) => c.delete('/test-endpoint')],
  ])('should turn an HTML 429 %s response into a too_many_requests error', async (_method, send) => {
    const mockResponse = new Response(cloudflareRateLimitPage, {
      status: 429,
      headers: { 'Content-Type': 'text/html', 'Retry-After': '60' },
    });

    mockFetch.mockResolvedValue(mockResponse);

    const result = await send(client);

    expect(result).toEqual({
      error: {
        type: 'request_error',
        code: 'too_many_requests',
        detail:
          'Paddle API returned an unexpected response with HTTP status 429: <!DOCTYPE html> <html> <head><title>Error 1015</title></head> <body>You are being rate limited</body> </html>',
        documentation_url: 'https://developer.paddle.com/errors/shared/too_many_requests',
      },
      meta: { request_id: '' },
      [rawResponse]: mockResponse,
    });
  });

  test('should turn a non-JSON server error into an unexpected_response error', async () => {
    const mockResponse = new Response('Bad Gateway', { status: 502, headers: { 'Request-Id': 'req_502' } });

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.get('/test-endpoint');

    expect(result).toEqual({
      error: {
        type: 'api_error',
        code: 'unexpected_response',
        detail: 'Paddle API returned an unexpected response with HTTP status 502: Bad Gateway',
        documentation_url: '',
      },
      meta: { request_id: 'req_502' },
      [rawResponse]: mockResponse,
    });
  });

  test('should turn a non-Paddle JSON error into an unexpected_response error', async () => {
    const mockResponse = apiResponse(503, { success: false });

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.get('/test-endpoint');

    expect(result).toMatchObject({
      error: {
        code: 'unexpected_response',
        detail: 'Paddle API returned an unexpected response with HTTP status 503: {"success":false}',
      },
    });
  });

  test('should truncate long non-JSON bodies in the error detail', async () => {
    mockFetch.mockResolvedValue(new Response('x'.repeat(2000), { status: 500 }));

    const result = (await client.get('/test-endpoint')) as { error: { detail: string } };

    expect(result.error.detail).toBe(
      `Paddle API returned an unexpected response with HTTP status 500: ${'x'.repeat(500)}`,
    );
  });
});
