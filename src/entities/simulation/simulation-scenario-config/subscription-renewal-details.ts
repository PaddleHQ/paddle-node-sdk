import { type SimulationSubscriptionRenewalConfig } from '../../../types/index.js';
import { SubscriptionRenewalEntities } from './subscription-renewal-entities.js';
import { SubscriptionRenewalOptions } from './subscription-renewal-options.js';

export class SubscriptionRenewalDetails {
  public readonly entities?: SubscriptionRenewalEntities;
  public readonly options?: SubscriptionRenewalOptions;

  constructor(config: SimulationSubscriptionRenewalConfig) {
    this.entities = config.entities ? new SubscriptionRenewalEntities(config.entities) : undefined;
    this.options = config.options ? new SubscriptionRenewalOptions(config.options) : undefined;
  }
}
