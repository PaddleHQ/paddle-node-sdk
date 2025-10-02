import { type ErrorDetail, type ErrorField } from '../types/response.js';

export class ApiError extends Error {
  public readonly type: string;
  public readonly code: string;
  public readonly detail: string;
  public readonly documentationUrl: string;
  public readonly errors: ErrorField[] | null;
  public readonly retryAfter?: number | undefined;

  constructor(errorDetail: ErrorDetail, retryAfter?: number | undefined) {
    super(errorDetail.detail);

    this.type = errorDetail.type;
    this.code = errorDetail.code;
    this.detail = errorDetail.detail;
    this.documentationUrl = errorDetail.documentation_url;
    this.errors = errorDetail.errors ? errorDetail.errors : null;
    this.retryAfter = retryAfter;
  }
}
