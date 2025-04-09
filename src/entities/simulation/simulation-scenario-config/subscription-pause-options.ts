import { type SimulationSubscriptionPauseConfig } from '../../../types/index.js';
import { type EffectiveFromType } from '../../../enums/index.js';

export class SubscriptionPauseOptions {
  public readonly effectiveFrom?: EffectiveFromType | undefined;
  public readonly hasPastDueTransaction?: boolean | undefined;

  constructor(options: SimulationSubscriptionPauseConfig['options']) {
    this.effectiveFrom = options?.effective_from;
    this.hasPastDueTransaction = options?.has_past_due_transaction;
  }
}
