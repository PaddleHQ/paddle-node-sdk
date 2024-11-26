import { type CryptoProvider } from './crypto-provider.js';

declare const crypto: any;

const byteHexMapping = new Array(256);
for (let i = 0; i < byteHexMapping.length; i++) {
  byteHexMapping[i] = i.toString(16).padStart(2, '0');
}

export class EdgeCrypto implements CryptoProvider {
  randomUUID(): string {
    return crypto.randomUUID();
  }

  async computeHmac(payload: string, secret: string): Promise<string> {
    const encoder = new TextEncoder();

    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      {
        name: 'HMAC',
        hash: { name: 'SHA-256' },
      },
      false,
      ['sign'],
    );

    const signatureBuffer = await crypto.subtle.sign('hmac', key, encoder.encode(payload));

    // crypto.subtle returns the signature in base64 format. This must be
    // encoded in hex to match the CryptoProvider contract. We map each byte in
    // the buffer to its corresponding hex octet and then combine into a string.
    const signatureBytes = new Uint8Array(signatureBuffer);
    const signatureHexCodes = new Array(signatureBytes.length);

    for (let i = 0; i < signatureBytes.length; i++) {
      if (signatureBytes[i] !== undefined && signatureBytes[i] !== null) {
        signatureHexCodes[i] = byteHexMapping[signatureBytes[i]!];
      }
    }

    return signatureHexCodes.join('');
  }
}
