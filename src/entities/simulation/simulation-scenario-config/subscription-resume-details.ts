import { type SimulationSubscriptionResumeConfig } from '../../../types/index.js';
import { SubscriptionResumeEntities } from './subscription-resume-entities.js';
import { SubscriptionResumeOptions } from './subscription-resume-options.js';

export class SubscriptionResumeDetails {
  public readonly entities?: SubscriptionResumeEntities | null;
  public readonly options?: SubscriptionResumeOptions | null;

  constructor(config: SimulationSubscriptionResumeConfig) {
    this.entities = config.entities ? new SubscriptionResumeEntities(config.entities) : null;
    this.options = config.options ? new SubscriptionResumeOptions(config.options) : null;
  }
}
