// This file does not contain any secret keys. All the hashes are generated using `VALID_SECRET` as key
import { NodeRuntime } from '../../internal/providers/runtime/node-runtime.js';
import { WebhooksValidator } from '../../notifications/index.js';

describe('Webhooks validator in Node runtime', () => {
  beforeAll(() => {
    NodeRuntime.initialize();
  });
  test.each([
    [
      'Valid signature',
      '{"data": ["1", "2"]}',
      'ts=1698796800;h1=a300428748dce5c70e4da19bffd60769591ea969c99dea3105d0ec9612cf43f9',
      'VALID_SECRET',
      true,
    ],
    [
      'Valid signature with multiple hashes',
      '{"data": "value"}',
      'ts=1698796800;h1=28981e941fae76e53db32f3d2a83cb69db41476595e84e1970a1b5d98f62b261;h1=28981e941fae76e53db32f3d2a83cb69db41476595e84e1970a1b5d98f62b261;h2=RANDOM_HASH',
      'VALID_SECRET',
      true,
    ],
    [
      'Invalid secret',
      '{"data": ["1", "2"]}',
      'ts=1698796800;h1=a300428748dce5c70e4da19bffd60769591ea969c99dea3105d0ec9612cf43f9',
      'INVALID_VALID_SECRET',
      false,
    ],
    [
      'InValid timestamp',
      '{"data": ["1", "2"]}',
      'ts=9876;h1=a300428748dce5c70e4da19bffd60769591ea969c99dea3105d0ec9612cf43f9',
      'VALID_SECRET',
      false,
    ],
    [
      'Invalid data - has more space',
      '{ "data": [ "1", "2" ]}',
      'ts=1698796800;h1=a300428748dce5c70e4da19bffd60769591ea969c99dea3105d0ec9612cf43f9',
      'VALID_SECRET',
      false,
    ],
    ['Invalid signature', '{"data": ["1", "2"]}', 'ts=1234;h1=invalid_signature', 'VALID_SECRET', false],
  ])('should validate %s', async (_, requestBody, signature, secretKey, expected) => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('11/01/2023'));

    expect(await new WebhooksValidator().isValidSignature(requestBody, secretKey, signature)).toBe(expected);

    jest.useRealTimers();
  });
  test.each([
    ['Missing TS and H1', 'invalid_header'],
    ['Missing TS', 'h1=invalid_header'],
    ['Missing H1', 'ts=1234;h2=invalid_header'],
  ])('validate header - %s', async (_, header: string) => {
    await expect(
      new WebhooksValidator().isValidSignature('{"data": ["1", "2"]}', 'VALID_SECRET', header),
    ).rejects.toThrowError('[Paddle] Invalid webhook signature');
  });

  test.each([
    ['Validates signature with correct TS within 5 seconds', '11/01/2023 00:00:01', true],
    ['Validates signature at max allowed time at 5 seconds', '11/01/2023 00:00:05', true],
    ['Will reject if current time is more than 5seconds', '11/01/2023 00:00:06', false],
    ['Will reject if current time is more than a few days', '11/05/2023 00:00:00', false],
  ])('%s', async (_: string, time: string, result: boolean) => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(time));

    expect(
      await new WebhooksValidator().isValidSignature(
        '{"data": ["1", "2"]}',
        'VALID_SECRET',
        'ts=1698796800;h1=a300428748dce5c70e4da19bffd60769591ea969c99dea3105d0ec9612cf43f9',
      ),
    ).toBe(result);

    jest.useRealTimers();
  });
});
