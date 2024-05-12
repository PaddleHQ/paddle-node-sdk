import { type Client } from '../api/client.js';
import { type Response, type ErrorResponse } from '../types/response.js';
import { ApiError } from '../errors/generic.js';

export class BaseResource {
  constructor(protected readonly client: Client) {}

  protected handleError(error: ErrorResponse): void {
    if (error.error) {
      throw new ApiError(error.error);
    }
  }

  protected handleResponse<T>(response: Response<T> | ErrorResponse): T {
    const entityResponse = response as Response<T>;
    const error = response as ErrorResponse;

    this.handleError(error);

    return entityResponse.data;
  }
}
