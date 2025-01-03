export abstract class CryptoProvider {
  randomUUID(): string {
    throw new Error('randomUUID not implemented.');
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  // @ts-expect-error - unused params.
  async computeHmac(payload: string, secret: string): Promise<string> {
    throw new Error('computeHmac not implemented.');
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */
}
