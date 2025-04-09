import { type SimulationSubscriptionRenewalConfig } from '../../../types/index.js';
import { SubscriptionRenewalEntities } from './subscription-renewal-entities.js';
import { SubscriptionRenewalOptions } from './subscription-renewal-options.js';

export class SubscriptionRenewalDetails {
  public readonly entities?: SubscriptionRenewalEntities | null;
  public readonly options?: SubscriptionRenewalOptions | null;

  constructor(config: SimulationSubscriptionRenewalConfig) {
    this.entities = config.entities ? new SubscriptionRenewalEntities(config.entities) : null;
    this.options = config.options ? new SubscriptionRenewalOptions(config.options) : null;
  }
}
