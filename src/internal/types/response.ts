export const responseProperty = Symbol('response property');
export interface Pagination {
  per_page: number;
  next: string;
  has_more: boolean;
  estimated_total: number;
}

export interface Meta {
  request_id: string;
}

export interface MetaPaginated {
  request_id: string;
  pagination: Pagination;
}

export interface Response<T> {
  data: T;
  meta: Meta;
  [responseProperty]?: globalThis.Response;
}

export interface ResponsePaginated<T> {
  data: T[];
  meta: MetaPaginated;
}

export interface ErrorField {
  field: string;
  message: string;
}

export interface ErrorDetail {
  type: string;
  code: string;
  detail: string;
  documentation_url: string;
  errors?: ErrorField[] | undefined;
}

export interface ErrorResponse {
  error: ErrorDetail;
  meta: Meta;
  [responseProperty]?: globalThis.Response;
}
