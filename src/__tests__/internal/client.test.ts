import { NodeRuntime } from '../../index.esm.node.js';
import { Client } from '../../internal/api/client.js';
import { Environment } from '../../internal/index.js';
import { rawResponse } from '../../internal/types/response.js';

const mockFetch = jest.fn();

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
    const mockResponse = {
      status: 200,
      headers: new Map([['Retry-After', '60']]),
      json: jest.fn().mockResolvedValue({
        data: { id: 'test_id' },
        meta: { request_id: 'req_123' },
      }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.get('/test-endpoint');

    expect(result).toEqual({
      data: { id: 'test_id' },
      meta: { request_id: 'req_123' },
      [rawResponse]: mockResponse,
    });
  });

  test('should include raw response in POST request', async () => {
    const mockResponse = {
      status: 200,
      headers: new Map([['Retry-After', '60']]),
      json: jest.fn().mockResolvedValue({
        data: { id: 'test_id' },
        meta: { request_id: 'req_123' },
      }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.post('/test-endpoint', { test: 'data' });

    expect(result).toEqual({
      data: { id: 'test_id' },
      meta: { request_id: 'req_123' },
      [rawResponse]: mockResponse,
    });
  });

  test('should include raw response in PATCH request', async () => {
    const mockResponse = {
      status: 200,
      headers: new Map([['Retry-After', '60']]),
      json: jest.fn().mockResolvedValue({
        data: { id: 'test_id' },
        meta: { request_id: 'req_123' },
      }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.patch('/test-endpoint', { test: 'data' });

    expect(result).toEqual({
      data: { id: 'test_id' },
      meta: { request_id: 'req_123' },
      [rawResponse]: mockResponse,
    });
  });

  test('should include raw response in DELETE request', async () => {
    const mockResponse = {
      status: 204,
      headers: new Map([['Retry-After', '60']]),
      json: jest.fn().mockResolvedValue({
        data: { id: 'test_id' },
        meta: { request_id: 'req_123' },
      }),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const result = await client.delete('/test-endpoint');

    expect(result).toEqual({
      data: { id: 'test_id' },
      meta: { request_id: 'req_123' },
      [rawResponse]: mockResponse,
    });
  });
});
