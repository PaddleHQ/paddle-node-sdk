import { type SimulationSubscriptionCancellationConfig } from '../../../types/index.js';
import { type EffectiveFromType } from '../../../enums/index.js';

export class SubscriptionCancellationOptions {
  public readonly effectiveFrom?: EffectiveFromType | null;
  public readonly hasPastDueTransaction?: boolean | null;

  constructor(options: SimulationSubscriptionCancellationConfig['options']) {
    this.effectiveFrom = options?.effective_from ?? null;
    this.hasPastDueTransaction = options?.has_past_due_transaction ?? null;
  }
}
