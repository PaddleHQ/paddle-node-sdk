import { type Response } from 'node-fetch';
import { LogLevel } from '../api';

type LogInputProps = Array<string | undefined | null>;

export class Logger {
  static logLevel: LogLevel;

  private static shouldLog(level: LogLevel) {
    switch (Logger.logLevel) {
      case LogLevel.verbose:
        return level !== LogLevel.none;
      case LogLevel.warn:
        return level === LogLevel.warn || level === LogLevel.error;
      case LogLevel.error:
        return level === LogLevel.error;
      default:
        return false;
    }
  }

  static log(...args: LogInputProps) {
    if (Logger.shouldLog(LogLevel.verbose)) {
      console.log('[Paddle] [LOG]', ...args);
    }
  }

  static warn(...args: LogInputProps) {
    if (Logger.shouldLog(LogLevel.warn)) {
      console.warn('[Paddle] [WARN]', ...args);
    }
  }

  static error(...args: LogInputProps) {
    if (Logger.shouldLog(LogLevel.error)) {
      console.error('[Paddle] [ERROR]', ...args);
    }
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
