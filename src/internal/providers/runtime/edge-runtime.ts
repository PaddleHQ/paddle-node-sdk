import { RuntimeProvider } from '../runtime-provider.js';
import { EdgeCrypto } from '../crypto/edge-crypto.js';

export class EdgeRuntime {
  static initialize() {
    RuntimeProvider.setProvider({
      crypto: new EdgeCrypto(),
    });
  }
}
