import { type SimulationSubscriptionCancellationConfig } from '../../../types/index.js';
import { SubscriptionCancellationEntities } from './subscription-cancellation-entities.js';
import { SubscriptionCancellationOptions } from './subscription-cancellation-options.js';

export class SubscriptionCancellationDetails {
  public readonly entities?: SubscriptionCancellationEntities | null;
  public readonly options?: SubscriptionCancellationOptions | null;

  constructor(config: SimulationSubscriptionCancellationConfig) {
    this.entities = config.entities ? new SubscriptionCancellationEntities(config.entities) : null;
    this.options = config.options ? new SubscriptionCancellationOptions(config.options) : null;
  }
}
