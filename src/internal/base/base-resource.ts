import { type Client } from '../api/client.js';
import { type Response, type ErrorResponse, responseProperty } from '../types/response.js';
import { ApiError } from '../errors/generic.js';

export class BaseResource {
  constructor(protected readonly client: Client) {}

  protected handleError(error: ErrorResponse): void {
    if (!error.error) {
      return;
    }

    const retryAfterHeader = error[responseProperty]?.headers.get('Retry-After');

    throw new ApiError(error.error, retryAfterHeader ? parseInt(retryAfterHeader, 10) : undefined);
  }

  protected handleResponse<T>(response: Response<T> | ErrorResponse): T {
    const entityResponse = response as Response<T>;
    const error = response as ErrorResponse;

    this.handleError(error);

    return entityResponse.data;
  }
}
