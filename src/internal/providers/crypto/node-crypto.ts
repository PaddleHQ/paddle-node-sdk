import { createHmac, randomUUID } from 'node:crypto';
import { type CryptoProvider } from './crypto-provider.js';

export class NodeCrypto implements CryptoProvider {
  randomUUID(): string {
    return randomUUID();
  }

  async computeHmac(payload: string, secret: string): Promise<string> {
    const hmac = createHmac('sha256', secret);
    hmac.update(payload);

    return await new Promise((resolve) => {
      resolve(hmac.digest('hex'));
    });
  }
}
