import { type SimulationSubscriptionRenewalConfig } from '../../../types/index.js';
import { SubscriptionRenewalEntities } from './subscription-renewal-entities.js';
import { SubscriptionRenewalOptions } from './subscription-renewal-options.js';

export class SubscriptionRenewalDetails {
  public readonly entities?: SubscriptionRenewalEntities | undefined;
  public readonly options?: SubscriptionRenewalOptions | undefined;

  constructor(config: SimulationSubscriptionRenewalConfig) {
    this.entities = config.entities ? new SubscriptionRenewalEntities(config.entities) : undefined;
    this.options = config.options ? new SubscriptionRenewalOptions(config.options) : undefined;
  }
}
