export abstract class CryptoProvider {
  randomUUID(): string {
    throw new Error('randomUUID not implemented.');
  }

  // @ts-expect-error - unused params.
  async computeHmac(payload: string, secret: string): Promise<string> {
    throw new Error('computeHmac not implemented.');
  }
}
