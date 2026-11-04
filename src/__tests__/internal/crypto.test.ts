import { NodeCrypto } from '../../internal/providers/crypto/node-crypto.js';
import { EdgeCrypto } from '../../internal/providers/crypto/edge-crypto.js';

describe('CryptoProvider', () => {
  test.each([new NodeCrypto(), new EdgeCrypto()])('should compute a sha256 hex digest', async (cryptoProvider) => {
    // SHA-256 of "abc"
    expect(await cryptoProvider.sha256('abc')).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  });

  test.each([new NodeCrypto(), new EdgeCrypto()])('should fill bytes with random values', (cryptoProvider) => {
    const bytes = cryptoProvider.getRandomValues(new Uint8Array(16));

    expect(bytes.length).toBe(16);
    expect(bytes.some((byte) => byte !== 0)).toBe(true);
  });
});
