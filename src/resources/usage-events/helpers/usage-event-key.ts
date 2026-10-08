import { RuntimeProvider } from '../../../internal/providers/runtime-provider.js';

export interface GenerateEventKeyOptions {
  prefix?: string;
}

// `event_key` must match ^[a-z0-9_-]{1,255}$
const EVENT_KEY_MAX_LENGTH = 255;
const EVENT_KEY_PATTERN = /^[a-z0-9_-]+$/;

// Lowercase Crockford base32, so ULIDs match the `event_key` pattern
const ULID_ENCODING = '0123456789abcdefghjkmnpqrstvwxyz';
const ULID_TIME_LENGTH = 10;
const ULID_RANDOM_LENGTH = 16;
const ULID_LENGTH = ULID_TIME_LENGTH + ULID_RANDOM_LENGTH;

export class UsageEventKey {
  private static getCryptoProvider() {
    const cryptoProvider = RuntimeProvider.getProvider()?.crypto;
    if (!cryptoProvider) {
      throw new Error('[Paddle] Unknown runtime. Cannot generate event key');
    }

    return cryptoProvider;
  }

  private static encodeTime(time: number): string {
    let encodedTime = '';
    for (let i = 0; i < ULID_TIME_LENGTH; i++) {
      encodedTime = ULID_ENCODING[time % 32] + encodedTime;
      time = Math.floor(time / 32);
    }

    return encodedTime;
  }

  private static encodeRandom(bytes: Uint8Array): string {
    // 256 is a multiple of 32, so `byte % 32` is uniformly distributed
    return Array.from(bytes, (byte) => ULID_ENCODING[byte % 32]).join('');
  }

  /**
   * Generates a random event key (a lowercase ULID), optionally with a prefix.
   * Generate the key once per usage event and reuse it, unchanged, when retrying.
   */
  public static generate(options?: GenerateEventKeyOptions): string {
    const prefix = options?.prefix;
    const maxPrefixLength = EVENT_KEY_MAX_LENGTH - ULID_LENGTH - 1;
    if (prefix !== undefined && (!EVENT_KEY_PATTERN.test(prefix) || prefix.length > maxPrefixLength)) {
      throw new Error(
        `[Paddle] Invalid event key prefix. Prefix must be 1-${maxPrefixLength} characters of a-z, 0-9, '_' or '-'`,
      );
    }

    const cryptoProvider = UsageEventKey.getCryptoProvider();
    const ulid =
      UsageEventKey.encodeTime(Date.now()) +
      UsageEventKey.encodeRandom(cryptoProvider.getRandomValues(new Uint8Array(ULID_RANDOM_LENGTH)));

    return prefix === undefined ? ulid : `${prefix}_${ulid}`;
  }

  /**
   * Generates an event key derived from identifiers in your system, like a request or job ID.
   * The same parts always return the same key, so the parts must be unique to each usage event.
   */
  public static async fromParts(...parts: string[]): Promise<string> {
    if (parts.length === 0) {
      throw new Error('[Paddle] At least one part is required to generate an event key');
    }

    // JSON encoding keeps ['a_b', 'c'] and ['a', 'b_c'] distinct
    return await UsageEventKey.getCryptoProvider().sha256(JSON.stringify(parts));
  }
}
