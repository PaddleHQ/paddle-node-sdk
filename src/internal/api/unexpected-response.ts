import { type ErrorResponse } from '../types/response.js';

const MAX_BODY_SNIPPET_LENGTH = 500;

export function parseJsonObject(body: string): object | null {
  try {
    const parsed: unknown = JSON.parse(body);
    return parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

// 429 keeps Paddle's documented code so callers that branch on `too_many_requests` still retry.
export function unexpectedResponseError(rawResponse: globalThis.Response, body: string): ErrorResponse {
  const isRateLimited = rawResponse.status === 429;
  const snippet = body.replace(/\s+/g, ' ').trim().slice(0, MAX_BODY_SNIPPET_LENGTH);
  const detail = `Paddle API returned an unexpected response with HTTP status ${rawResponse.status}${snippet ? `: ${snippet}` : ''}`;

  return {
    error: {
      type: isRateLimited ? 'request_error' : 'api_error',
      code: isRateLimited ? 'too_many_requests' : 'unexpected_response',
      detail,
      documentation_url: isRateLimited ? 'https://developer.paddle.com/errors/shared/too_many_requests' : '',
    },
    meta: { request_id: rawResponse.headers.get('Request-Id') ?? '' },
  };
}
