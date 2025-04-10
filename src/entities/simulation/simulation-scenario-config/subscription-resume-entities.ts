import { type SimulationSubscriptionResumeConfig } from '../../../types/index.js';

export class SubscriptionResumeEntities {
  public readonly subscriptionId?: string | null;

  constructor(entities: SimulationSubscriptionResumeConfig['entities']) {
    this.subscriptionId = entities?.subscription_id ?? null;
  }
}
