export abstract class CryptoProvider {
  randomUUID(): string {
    throw new Error('randomUUID not implemented.');
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  // @ts-expect-error - unused params.
  getRandomValues(bytes: Uint8Array): Uint8Array {
    throw new Error('getRandomValues not implemented.');
  }

  // @ts-expect-error - unused params.
  async sha256(payload: string): Promise<string> {
    throw new Error('sha256 not implemented.');
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */

  /* eslint-disable @typescript-eslint/no-unused-vars */
  // @ts-expect-error - unused params.
  async computeHmac(payload: string, secret: string): Promise<string> {
    throw new Error('computeHmac not implemented.');
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */
}
