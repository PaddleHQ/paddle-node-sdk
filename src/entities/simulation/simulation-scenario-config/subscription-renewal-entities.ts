import { type SimulationSubscriptionRenewalConfig } from '../../../types/index.js';

export class SubscriptionRenewalEntities {
  public readonly subscriptionId?: string | null;

  constructor(entities: SimulationSubscriptionRenewalConfig['entities']) {
    this.subscriptionId = entities?.subscription_id ?? null;
  }
}
