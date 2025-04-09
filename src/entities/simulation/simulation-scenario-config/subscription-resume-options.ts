import { type SimulationSubscriptionResumeConfig } from '../../../types/index.js';
import { type PaymentOutcomeType, type DunningExhaustedActionType } from '../../../enums/index.js';

export class SubscriptionResumeOptions {
  public readonly paymentOutcome?: PaymentOutcomeType | undefined;
  public readonly dunningExhaustedAction?: DunningExhaustedActionType | undefined;

  constructor(options: SimulationSubscriptionResumeConfig['options']) {
    this.paymentOutcome = options?.payment_outcome;
    this.dunningExhaustedAction = options?.dunning_exhausted_action ?? undefined;
  }
}
