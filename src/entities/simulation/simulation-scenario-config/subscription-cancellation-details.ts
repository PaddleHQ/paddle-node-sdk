import { type SimulationSubscriptionCancellationConfig } from '../../../types/index.js';
import { SubscriptionCancellationEntities } from './subscription-cancellation-entities.js';
import { SubscriptionCancellationOptions } from './subscription-cancellation-options.js';

export class SubscriptionCancellationDetails {
  public readonly entities?: SubscriptionCancellationEntities;
  public readonly options?: SubscriptionCancellationOptions;

  constructor(config: SimulationSubscriptionCancellationConfig) {
    this.entities = config.entities ? new SubscriptionCancellationEntities(config.entities) : undefined;
    this.options = config.options ? new SubscriptionCancellationOptions(config.options) : undefined;
  }
}
