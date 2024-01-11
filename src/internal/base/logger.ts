import { type Response } from 'node-fetch';

type LogInputProps = Array<string | undefined | null>;

export class Logger {
  static log(...args: LogInputProps) {
    console.log('[Paddle] [LOG]', ...args);
  }

  static warn(...args: LogInputProps) {
    console.warn('[Paddle] [WARN]', ...args);
  }

  static error(...args: LogInputProps) {
    console.error('[Paddle] [ERROR]', ...args);
  }

  static logRequest(method: string, url: string | undefined, headers: Record<string, string>) {
    Logger.log('[Request]', method, url, 'Transaction ID:', headers['X-Transaction-ID']);
  }

  static logResponse(method: string, url: string | undefined, headers: Record<string, string>, promise: Response) {
    Logger.log(
      '[Response]',
      method,
      url,
      promise.status.toString(),
      'Transaction ID:',
      headers['X-Transaction-ID'],
      'Request ID:',
      promise.headers.get('Request-Id'),
    );
  }
}
