import { type Client } from '../api/client';
import { ApiError } from '../errors/generic';
import { type ErrorResponse, type Response } from '../types/response';

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
