export abstract class CryptoProvider {
  randomUUID(): string {
    throw new Error('randomUUID not implemented.');
  }

  async computeHmac(_payload: string, _secret: string): Promise<string> {
    throw new Error('computeHmac not implemented.');
  }
}
