import { type SimulationSubscriptionPauseConfig } from '../../../types/index.js';

export class SubscriptionPauseEntities {
  public readonly subscriptionId?: string | null;

  constructor(entities: SimulationSubscriptionPauseConfig['entities']) {
    this.subscriptionId = entities?.subscription_id ?? null;
  }
}
