import { RuntimeProvider } from '../runtime-provider.js';
import { NodeCrypto } from '../crypto/node-crypto.js';

export class NodeRuntime {
  static initialize() {
    RuntimeProvider.setProvider({
      crypto: new NodeCrypto(),
    });
  }
}
