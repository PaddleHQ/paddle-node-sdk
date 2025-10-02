import { type ErrorDetail } from '../types/response.js';
import { ApiError } from './generic.js';

export class TooManyRequestsApiError extends ApiError {
  public readonly retryAfter: number;

  constructor(errorDetail: ErrorDetail, retryAfter: number) {
    super(errorDetail);

    this.retryAfter = retryAfter;
  }
}
