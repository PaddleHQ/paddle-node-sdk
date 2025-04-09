import { type SimulationSubscriptionPauseConfig } from '../../../types/index.js';
import { SubscriptionPauseEntities } from './subscription-pause-entities.js';
import { SubscriptionPauseOptions } from './subscription-pause-options.js';

export class SubscriptionPauseDetails {
  public readonly entities?: SubscriptionPauseEntities | null;
  public readonly options?: SubscriptionPauseOptions | null;

  constructor(config: SimulationSubscriptionPauseConfig) {
    this.entities = config.entities ? new SubscriptionPauseEntities(config.entities) : null;
    this.options = config.options ? new SubscriptionPauseOptions(config.options) : null;
  }
}
