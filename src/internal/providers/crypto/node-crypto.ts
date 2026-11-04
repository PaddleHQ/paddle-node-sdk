import { createHash, createHmac, getRandomValues, randomUUID } from 'node:crypto';
import { type CryptoProvider } from './crypto-provider.js';

export class NodeCrypto implements CryptoProvider {
  randomUUID(): string {
    return randomUUID();
  }

  getRandomValues(bytes: Uint8Array): Uint8Array {
    return getRandomValues(bytes);
  }

  async sha256(payload: string): Promise<string> {
    return createHash('sha256').update(payload).digest('hex');
  }

  async computeHmac(payload: string, secret: string): Promise<string> {
    const hmac = createHmac('sha256', secret);
    hmac.update(payload);

    return await new Promise((resolve) => {
      resolve(hmac.digest('hex'));
    });
  }
}
