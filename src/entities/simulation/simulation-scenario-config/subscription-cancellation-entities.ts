import { type SimulationSubscriptionCancellationConfig } from '../../../types/index.js';

export class SubscriptionCancellationEntities {
  public readonly subscriptionId?: string | null;

  constructor(entities: SimulationSubscriptionCancellationConfig['entities']) {
    this.subscriptionId = entities?.subscription_id ?? null;
  }
}
