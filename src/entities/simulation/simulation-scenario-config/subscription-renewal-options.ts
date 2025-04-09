import { type SimulationSubscriptionRenewalConfig } from '../../../types/index.js';
import { type PaymentOutcomeType, type DunningExhaustedActionType } from '../../../enums/index.js';

export class SubscriptionRenewalOptions {
  public readonly paymentOutcome?: PaymentOutcomeType;
  public readonly dunningExhaustedAction?: DunningExhaustedActionType;

  constructor(options: SimulationSubscriptionRenewalConfig['options']) {
    this.paymentOutcome = options?.payment_outcome;
    this.dunningExhaustedAction = options?.dunning_exhausted_action ?? undefined;
  }
}
