import { type SimulationSubscriptionResumeConfig } from '../../../types/index.js';
import { SubscriptionResumeEntities } from './subscription-resume-entities.js';
import { SubscriptionResumeOptions } from './subscription-resume-options.js';

export class SubscriptionResumeDetails {
  public readonly entities?: SubscriptionResumeEntities | undefined;
  public readonly options?: SubscriptionResumeOptions | undefined;

  constructor(config: SimulationSubscriptionResumeConfig) {
    this.entities = config.entities ? new SubscriptionResumeEntities(config.entities) : undefined;
    this.options = config.options ? new SubscriptionResumeOptions(config.options) : undefined;
  }
}
