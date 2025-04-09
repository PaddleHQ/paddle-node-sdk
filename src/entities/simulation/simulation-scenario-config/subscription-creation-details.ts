import { type SimulationSubscriptionCreationConfig } from '../../../types/index.js';
import { SubscriptionCreationEntities } from './subscription-creation-entities.js';
import { SubscriptionCreationOptions } from './subscription-creation-options.js';

export class SubscriptionCreationDetails {
  public readonly entities?: SubscriptionCreationEntities;
  public readonly options?: SubscriptionCreationOptions;

  constructor(config: SimulationSubscriptionCreationConfig) {
    this.entities = config.entities ? new SubscriptionCreationEntities(config.entities) : undefined;
    this.options = config.options ? new SubscriptionCreationOptions(config.options) : undefined;
  }
}
