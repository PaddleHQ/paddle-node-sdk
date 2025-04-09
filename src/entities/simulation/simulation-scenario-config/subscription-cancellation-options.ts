import { type SimulationSubscriptionCancellationConfig } from '../../../types/index.js';
import { type EffectiveFromType } from '../../../enums/index.js';

export class SubscriptionCancellationOptions {
  public readonly effectiveFrom?: EffectiveFromType | undefined;
  public readonly hasPastDueTransaction?: boolean | undefined;

  constructor(options: SimulationSubscriptionCancellationConfig['options']) {
    this.effectiveFrom = options?.effective_from;
    this.hasPastDueTransaction = options?.has_past_due_transaction;
  }
}
