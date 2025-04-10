import { type ISimulationScenarioConfigResponse } from '../../../types/index.js';
import { SubscriptionCancellationDetails } from './subscription-cancellation-details.js';
import { SubscriptionCreationDetails } from './subscription-creation-details.js';
import { SubscriptionPauseDetails } from './subscription-pause-details.js';
import { SubscriptionRenewalDetails } from './subscription-renewal-details.js';
import { SubscriptionResumeDetails } from './subscription-resume-details.js';

export class SimulationScenarioConfig {
  public readonly subscriptionCancellation: SubscriptionCancellationDetails | null;
  public readonly subscriptionCreation: SubscriptionCreationDetails | null;
  public readonly subscriptionPause: SubscriptionPauseDetails | null;
  public readonly subscriptionRenewal: SubscriptionRenewalDetails | null;
  public readonly subscriptionResume: SubscriptionResumeDetails | null;

  constructor(response: ISimulationScenarioConfigResponse) {
    this.subscriptionCancellation = response.subscription_cancellation
      ? new SubscriptionCancellationDetails(response.subscription_cancellation)
      : null;
    this.subscriptionCreation = response.subscription_creation
      ? new SubscriptionCreationDetails(response.subscription_creation)
      : null;
    this.subscriptionPause = response.subscription_pause
      ? new SubscriptionPauseDetails(response.subscription_pause)
      : null;
    this.subscriptionRenewal = response.subscription_renewal
      ? new SubscriptionRenewalDetails(response.subscription_renewal)
      : null;
    this.subscriptionResume = response.subscription_resume
      ? new SubscriptionResumeDetails(response.subscription_resume)
      : null;
  }
}
