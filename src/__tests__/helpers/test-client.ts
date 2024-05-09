import { Client } from '../../internal/api/client.js';
import { Environment } from '../../internal/index.js';

export function getPaddleTestClient() {
  return new Client('TEST_API_KEY', { environment: Environment.sandbox });
}
