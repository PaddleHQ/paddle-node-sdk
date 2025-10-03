import { type Client } from '../api/client.js';
import { type ErrorResponse, type ResponsePaginated, rawResponse } from '../types/response.js';
import { ApiError } from '../errors/generic.js';

export abstract class Collection<T, C> implements AsyncIterable<C> {
  public hasMore: boolean = true;
  public estimatedTotal: number = 0;
  private nextLink: string;
  private data: C[] = [];

  constructor(
    private readonly client: Client,
    initialUri: string,
  ) {
    this.nextLink = initialUri;
  }

  async next(): Promise<C[]> {
    const response = await this.client.get<undefined, ResponsePaginated<T> | ErrorResponse>(this.nextLink);

    const handledResponse = this.handlePaginatedResponse<T>(response);

    this.hasMore = handledResponse.meta.pagination.has_more ?? false;
    this.nextLink = handledResponse.meta.pagination.next;
    this.estimatedTotal = handledResponse.meta.pagination.estimated_total ?? 0;
    this.data = handledResponse.data.map((data) => this.fromJson(data));

    return this.data.length > 0 ? this.data : [];
  }

  protected handlePaginatedResponse<T>(response: ResponsePaginated<T> | ErrorResponse): ResponsePaginated<T> {
    const entityResponse = response as ResponsePaginated<T>;
    const error = response as ErrorResponse;

    if (error.error) {
      const retryAfterHeader = error[rawResponse]?.headers.get('Retry-After');
      const retryAfter = retryAfterHeader ? parseInt(retryAfterHeader, 10) : undefined;
      throw new ApiError(error.error, retryAfter);
    }

    return entityResponse;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Abstract method to be implemented by the child class
  abstract fromJson(data: any): C;

  async *[Symbol.asyncIterator](): AsyncIterator<C> {
    while (this.hasMore) {
      await this.next();

      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index]) {
          yield this.data[index] as C;
        }
      }
    }
  }
}
