import { Environment } from './environment.js';

export const API_ENVIRONMENT_TO_BASE_URL_MAP: Record<Environment, string> = {
  [Environment.production]: 'https://api.paddle.com',
  [Environment.sandbox]: 'https://sandbox-api.paddle.com',
} as const;
