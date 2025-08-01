import { LogLevel } from '../../internal/index.js';
import { Logger } from '../../internal/base/logger.js';

describe('logger', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test.each([
    [LogLevel.verbose, LogLevel.verbose, true],
    [LogLevel.verbose, LogLevel.warn, true],
    [LogLevel.verbose, LogLevel.error, true],
    [LogLevel.verbose, LogLevel.none, false],
    [LogLevel.warn, LogLevel.verbose, false],
    [LogLevel.warn, LogLevel.warn, true],
    [LogLevel.warn, LogLevel.error, true],
    [LogLevel.warn, LogLevel.none, false],
    [LogLevel.error, LogLevel.verbose, false],
    [LogLevel.error, LogLevel.warn, false],
    [LogLevel.error, LogLevel.error, true],
    [LogLevel.error, LogLevel.none, false],
    [LogLevel.none, LogLevel.verbose, false],
    [LogLevel.none, LogLevel.warn, false],
    [LogLevel.none, LogLevel.error, false],
    [LogLevel.none, LogLevel.none, false],
  ])('shouldLog(%s) with logLevel %s should return %s', (logLevel, level, expected) => {
    Logger.logLevel = logLevel;
    // @ts-expect-error - testing private method
    expect(Logger.shouldLog(level)).toBe(expected);
  });
  test('verbose', () => {
    Logger.logLevel = LogLevel.verbose;
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    Logger.log('test');
    expect(consoleSpy).toHaveBeenCalledWith('[Paddle] [LOG]', 'test');
  });
  test('warn', () => {
    Logger.logLevel = LogLevel.warn;
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    Logger.warn('test');
    expect(consoleSpy).toHaveBeenCalledWith('[Paddle] [WARN]', 'test');
  });
  test('error', () => {
    Logger.logLevel = LogLevel.error;
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    Logger.error('test');
    expect(consoleSpy).toHaveBeenCalledWith('[Paddle] [ERROR]', 'test');
  });
  test('logRequest', () => {
    Logger.logLevel = LogLevel.verbose;
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    Logger.logRequest('GET', 'https://example.com', { 'X-Transaction-ID': '123' });
    expect(consoleSpy).toHaveBeenCalledWith(
      '[Paddle] [LOG]',
      '[Request]',
      'GET',
      'https://example.com',
      'Transaction ID:',
      '123',
    );
  });
  test('logResponse', () => {
    Logger.logLevel = LogLevel.verbose;
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const response = {
      status: 200,
      headers: new Map([['Request-Id', '456']]),
    };
    Logger.logResponse('GET', 'https://example.com', { 'X-Transaction-ID': '123' }, response as unknown as Response);
    expect(consoleSpy).toHaveBeenCalledWith(
      '[Paddle] [LOG]',
      '[Response]',
      'GET',
      'https://example.com',
      '200',
      'Transaction ID:',
      '123',
      'Request ID:',
      '456',
    );
  });
  test('verbose is not logged when log level is warn', () => {
    Logger.logLevel = LogLevel.warn;
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    Logger.log('test');
    expect(consoleSpy).not.toHaveBeenCalledWith('[Paddle] [LOG]', 'test');
  });
  test('warning is not logged when log level is error', () => {
    Logger.logLevel = LogLevel.error;
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    Logger.warn('test');
    expect(consoleSpy).not.toHaveBeenCalledWith('[Paddle] [WARN]', 'test');
  });
  test('error is not logged when log level is none', () => {
    Logger.logLevel = LogLevel.none;
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    Logger.error('test');
    expect(consoleSpy).not.toHaveBeenCalledWith('[Paddle] [ERROR]', 'test');
  });
});
