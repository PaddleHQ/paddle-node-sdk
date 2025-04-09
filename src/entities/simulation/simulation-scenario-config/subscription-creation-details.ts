import { type SimulationSubscriptionCreationConfig } from '../../../types/index.js';
import { SubscriptionCreationEntities } from './subscription-creation-entities.js';
import { SubscriptionCreationOptions } from './subscription-creation-options.js';

export class SubscriptionCreationDetails {
  public readonly entities?: SubscriptionCreationEntities | null;
  public readonly options?: SubscriptionCreationOptions | null;

  constructor(config: SimulationSubscriptionCreationConfig) {
    this.entities = config.entities ? new SubscriptionCreationEntities(config.entities) : null;
    this.options = config.options ? new SubscriptionCreationOptions(config.options) : null;
  }
}
