import { Client } from '../../internal/api/client';
import { Environment } from '../../internal';

export function getPaddleTestClient() {
  return new Client('TEST_API_KEY', { environment: Environment.sandbox });
}
