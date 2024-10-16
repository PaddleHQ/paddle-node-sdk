import { Paddle, Environment } from '../src';

const apiKey = import.meta.env.PADDLE_API_KEY as string;

const paddle = new Paddle(apiKey, {
  environment: Environment.sandbox,
});

const pricesCollection = paddle.prices.list();
const prices = await pricesCollection.next();

console.log(prices);
