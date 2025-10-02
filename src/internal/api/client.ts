import { type PaddleOptions } from '../types/config.js';
import { Environment } from './environment.js';
import { API_ENVIRONMENT_TO_BASE_URL_MAP } from './constants.js';
import { type QueryParameters } from '../base/index.js';
import { Logger } from '../base/logger.js';
import { LogLevel } from './log-level.js';
import { RuntimeProvider } from '../providers/runtime-provider.js';
import { SDK_VERSION } from '../../version.js';
import { convertToSnakeCase } from './case-helpers.js';
import { responseKey, type ErrorResponse } from '../types/response.js';

export class Client {
  private readonly baseUrl: string;

  constructor(
    private readonly apiKey: string,
    private readonly options: PaddleOptions,
  ) {
    this.baseUrl = this.getBaseUrl(this.options.environment);
    Logger.logLevel = this.options.logLevel ?? LogLevel.error;
  }

  private getBaseUrl(environment?: Environment): string {
    const urlBasedOnEnv = API_ENVIRONMENT_TO_BASE_URL_MAP[environment ?? Environment.production];
    return urlBasedOnEnv || (environment as string);
  }

  private getHeaders() {
    let uuid;
    const cryptoProvider = RuntimeProvider.getProvider()?.crypto;
    if (cryptoProvider) {
      uuid = cryptoProvider.randomUUID();
    } else {
      Logger.error('Unknown runtime. Cannot generate uuid');
    }

    return {
      Authorization: `bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
      'user-agent': `PaddleSDK/node ${SDK_VERSION}`,
      'X-Transaction-ID': uuid ?? '',
      ...this.options.customHeaders,
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

    return { ...(await rawResponse.json()), [responseKey]: rawResponse } as R;
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

    return { ...(await rawResponse.json()), [responseKey]: rawResponse } as R;
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

    return { ...(await rawResponse.json()), [responseKey]: rawResponse } as R;
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

    if (rawResponse.ok) {
      // Return undefined for successful delete operations
      return rawResponse as unknown as undefined;
    } else {
      // Return the error response for unsuccessful delete operations
      return { ...(await rawResponse.json()), [responseKey]: rawResponse } as Promise<ErrorResponse>;
    }
  }
}
