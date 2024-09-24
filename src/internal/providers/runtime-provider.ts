import { type CryptoProvider } from './crypto/crypto-provider.js';

export interface IRuntimeProvider {
  crypto: CryptoProvider;
}

export class RuntimeProvider {
  static provider: IRuntimeProvider | undefined;
  static setProvider(provider: IRuntimeProvider) {
    this.provider = provider;
  }

  static getProvider(): IRuntimeProvider | undefined {
    return this.provider;
  }
}
