import { type Client } from '../api/client.js';
import { type Response, type ErrorResponse, responseProperty } from '../types/response.js';
import { ApiError } from '../errors/generic.js';
import { TooManyRequestsApiError } from '../errors/too-many-requests.js';

export class BaseResource {
  constructor(protected readonly client: Client) {}

  protected handleError(error: ErrorResponse): void {
    if (!error.error) {
      return;
    }

    if (error.error.code == 'too_many_requests') {
      throw new TooManyRequestsApiError(
        error.error,
        parseInt(error[responseProperty]?.headers.get('Retry-After') ?? '0', 10),
      );
    }

    throw new ApiError(error.error);
  }

  protected handleResponse<T>(response: Response<T> | ErrorResponse): T {
    const entityResponse = response as Response<T>;
    const error = response as ErrorResponse;

    this.handleError(error);

    return entityResponse.data;
  }
}
