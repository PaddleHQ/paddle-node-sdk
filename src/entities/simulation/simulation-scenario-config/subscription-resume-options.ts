import { type SimulationSubscriptionResumeConfig } from '../../../types/index.js';
import { type PaymentOutcomeType, type DunningExhaustedActionType } from '../../../enums/index.js';

export class SubscriptionResumeOptions {
  public readonly paymentOutcome?: PaymentOutcomeType | null;
  public readonly dunningExhaustedAction?: DunningExhaustedActionType | null;

  constructor(options: SimulationSubscriptionResumeConfig['options']) {
    this.paymentOutcome = options?.payment_outcome ?? null;
    this.dunningExhaustedAction = options?.dunning_exhausted_action ?? null;
  }
}
