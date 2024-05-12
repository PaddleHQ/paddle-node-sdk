import { Environment, Paddle } from '../../index.cjs.node.js';

describe('Paddle', () => {
  test('Paddle class can be constructed', () => {
    expect(new Paddle('...')).toBeInstanceOf(Paddle);
  });
  test('Paddle class can be constructed with options', () => {
    expect(new Paddle('...', { environment: Environment.sandbox })).toBeInstanceOf(Paddle);
  });
});
