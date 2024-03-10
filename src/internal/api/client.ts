import { API_ENVIRONMENT_TO_BASE_URL_MAP } from './constants';
import { type QueryParameters } from '../base';
import fetch from 'node-fetch';
import { SDK_VERSION } from '../../version';
import { type PaddleOptions } from '../types/config';
import { Environment } from './environment';
import { Logger } from '../base/logger';
import { convertToSnakeCase } from './case-helpers';
import { type ErrorResponse } from '../types/response';
import type { randomUUID as randomUUIDFn } from 'node:crypto';
let randomUUID: typeof randomUUIDFn;
(async () => {
  const crypto = await import('node:crypto');
  randomUUID = crypto.randomUUID;
})();

export class Client {
  private readonly baseUrl: string;

  constructor(
    private readonly apiKey: string,
    private readonly options: PaddleOptions,
  ) {
    this.baseUrl = this.getBaseUrl(this.options.environment);
  }

  private getBaseUrl(environment?: Environment): string {
    const urlBasedOnEnv = API_ENVIRONMENT_TO_BASE_URL_MAP[environment ?? Environment.production];
    return urlBasedOnEnv || (environment as string);
  }

  private getHeaders() {
    const uuid = randomUUID();

    return {
      Authorization: `bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
      'user-agent': `PaddleSDK/node ${SDK_VERSION}`,
      'X-Transaction-ID': uuid,
    };
  }

  public async get<Q, R>(url: string, queryParams?: QueryParameters<Q>): Promise<R> {
    let finalUrl = url.includes(this.baseUrl) ? url : `${this.baseUrl}${url}`;

    if (!finalUrl.includes('?') && queryParams) {
      finalUrl += queryParams.toQueryString();
    }

    const logUrl = finalUrl.split('?')[0];
    const headers = this.getHeaders();

    Logger.logRequest('GET', logUrl, headers);

    const rawResponse = await fetch(finalUrl, {
      headers,
    });

    Logger.logResponse('GET', logUrl, headers, rawResponse);

    return rawResponse.json() as R;
  }

  public async post<B, R>(url: string, requestBody: B): Promise<R> {
    const logUrl = url.split('?')[0];
    const headers = this.getHeaders();

    Logger.logRequest('POST', logUrl, headers);

    const rawResponse = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(convertToSnakeCase(requestBody)),
      headers,
    });
    Logger.logResponse('POST', logUrl, headers, rawResponse);

    return rawResponse.json() as R;
  }

  public async patch<B, R>(url: string, requestBody: B): Promise<R> {
    const logUrl = url.split('?')[0];
    const headers = this.getHeaders();

    Logger.logRequest('PATCH', logUrl, headers);

    const rawResponse = await fetch(`${this.baseUrl}${url}`, {
      method: 'PATCH',
      body: JSON.stringify(convertToSnakeCase(requestBody)),
      headers,
    });

    Logger.logResponse('PATCH', logUrl, headers, rawResponse);
    return rawResponse.json() as R;
  }

  public async delete(url: string): Promise<ErrorResponse | undefined> {
    const logUrl = url.split('?')[0];
    const headers = this.getHeaders();

    Logger.logRequest('DELETE', logUrl, headers);

    const rawResponse = await fetch(`${this.baseUrl}${url}`, {
      method: 'DELETE',
      headers,
    });

    Logger.logResponse('DELETE', logUrl, headers, rawResponse);

    return rawResponse as unknown as ErrorResponse | undefined;
  }
}
