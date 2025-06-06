/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import type {
  EffectiveFromType,
  CustomerSimulatedAsType,
  BusinessSimulatedAsType,
  DiscountSimulatedAsType,
} from '../../enums/index.js';

interface SubscriptionSimulationScenarioConfig {
  entities?: {
    subscription_id?: string | null;
  };
}

interface SimulationSubscriptionCreationItemsEntities {
  customer_id?: string | null;
  address_id?: string | null;
  business_id?: string | null;
  payment_method_id?: string | null;
  discount_id?: string | null;
  transaction_id?: null;
  items?: Array<{
    price_id: string;
    quantity: number;
  }>;
}

interface SimulationSubscriptionCreationTransactionEntities {
  customer_id?: string | null;
  address_id?: string | null;
  business_id?: string | null;
  payment_method_id?: string | null;
  discount_id?: string | null;
  transaction_id?: string | null;
  items?: null;
}

interface SimulationDunningFailedOptions {
  payment_outcome?: 'failed';
  dunning_exhausted_action?: 'subscription_paused' | 'subscription_canceled';
}

interface SimulationDunningSuccessOptions {
  payment_outcome?: 'success' | 'recovered_existing_payment_method' | 'recovered_updated_payment_method';
  dunning_exhausted_action?: null;
}

type SimulationDunningOptions = SimulationDunningFailedOptions | SimulationDunningSuccessOptions;

export interface SimulationSubscriptionCancellationConfig extends SubscriptionSimulationScenarioConfig {
  options?: {
    effective_from?: EffectiveFromType;
    has_past_due_transaction?: boolean;
  };
}

export interface SimulationSubscriptionCreationConfig {
  entities?: SimulationSubscriptionCreationItemsEntities | SimulationSubscriptionCreationTransactionEntities;
  options?: {
    customer_simulated_as?: CustomerSimulatedAsType;
    business_simulated_as?: BusinessSimulatedAsType;
    discount_simulated_as?: DiscountSimulatedAsType;
  };
}

export interface SimulationSubscriptionPauseConfig extends SubscriptionSimulationScenarioConfig {
  options?: {
    effective_from?: EffectiveFromType;
    has_past_due_transaction?: boolean;
  };
}

export interface SimulationSubscriptionRenewalConfig extends SubscriptionSimulationScenarioConfig {
  options?: SimulationDunningOptions;
}

export interface SimulationSubscriptionResumeConfig extends SubscriptionSimulationScenarioConfig {
  options?: SimulationDunningOptions;
}

export interface ISimulationScenarioConfigResponse {
  subscription_cancellation: SimulationSubscriptionCancellationConfig | null;
  subscription_creation: SimulationSubscriptionCreationConfig | null;
  subscription_pause: SimulationSubscriptionPauseConfig | null;
  subscription_renewal: SimulationSubscriptionRenewalConfig | null;
  subscription_resume: SimulationSubscriptionResumeConfig | null;
}
