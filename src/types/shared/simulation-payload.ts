import type { IEventName } from '../../notifications/index.js';
import {
  type AddressCreatedEvent,
  type AddressImportedEvent,
  type AddressUpdatedEvent,
  type AdjustmentCreatedEvent,
  type AdjustmentUpdatedEvent,
  type BusinessCreatedEvent,
  type BusinessImportedEvent,
  type BusinessUpdatedEvent,
  type CustomerCreatedEvent,
  type CustomerImportedEvent,
  type CustomerUpdatedEvent,
  type DiscountCreatedEvent,
  type DiscountImportedEvent,
  type DiscountUpdatedEvent,
  type PayoutCreatedEvent,
  type PayoutPaidEvent,
  type PriceCreatedEvent,
  type PriceImportedEvent,
  type PriceUpdatedEvent,
  type ProductCreatedEvent,
  type ProductImportedEvent,
  type ProductUpdatedEvent,
  type ReportCreatedEvent,
  type ReportUpdatedEvent,
  type SubscriptionActivatedEvent,
  type SubscriptionCanceledEvent,
  type SubscriptionCreatedEvent,
  type SubscriptionImportedEvent,
  type SubscriptionPastDueEvent,
  type SubscriptionPausedEvent,
  type SubscriptionResumedEvent,
  type SubscriptionTrialingEvent,
  type SubscriptionUpdatedEvent,
  type TransactionBilledEvent,
  type TransactionCanceledEvent,
  type TransactionCompletedEvent,
  type TransactionCreatedEvent,
  type TransactionPaidEvent,
  type TransactionPastDueEvent,
  type TransactionPaymentFailedEvent,
  type TransactionReadyEvent,
  type TransactionUpdatedEvent,
  type TransactionRevisedEvent,
} from '../../notifications/events/index.js';
import type { SimulationScenarioType } from '../../enums/index.js';
import type {
  SimulationSubscriptionCancellationConfig,
  SimulationSubscriptionCreationConfig,
  SimulationSubscriptionPauseConfig,
  SimulationSubscriptionRenewalConfig,
  SimulationSubscriptionResumeConfig,
} from '../simulation/simulation-scenario-config.js';

interface SimulationEventPayloadMap {
  'address.created': AddressCreatedEvent;
  'address.updated': AddressUpdatedEvent;
  'address.imported': AddressImportedEvent;
  'adjustment.created': AdjustmentCreatedEvent;
  'adjustment.updated': AdjustmentUpdatedEvent;
  'business.created': BusinessCreatedEvent;
  'business.updated': BusinessUpdatedEvent;
  'business.imported': BusinessImportedEvent;
  'customer.created': CustomerCreatedEvent;
  'customer.updated': CustomerUpdatedEvent;
  'customer.imported': CustomerImportedEvent;
  'discount.created': DiscountCreatedEvent;
  'discount.updated': DiscountUpdatedEvent;
  'discount.imported': DiscountImportedEvent;
  'payout.created': PayoutCreatedEvent;
  'payout.paid': PayoutPaidEvent;
  'price.created': PriceCreatedEvent;
  'price.updated': PriceUpdatedEvent;
  'price.imported': PriceImportedEvent;
  'product.created': ProductCreatedEvent;
  'product.updated': ProductUpdatedEvent;
  'product.imported': ProductImportedEvent;
  'subscription.created': SubscriptionCreatedEvent;
  'subscription.past_due': SubscriptionPastDueEvent;
  'subscription.activated': SubscriptionActivatedEvent;
  'subscription.canceled': SubscriptionCanceledEvent;
  'subscription.imported': SubscriptionImportedEvent;
  'subscription.paused': SubscriptionPausedEvent;
  'subscription.resumed': SubscriptionResumedEvent;
  'subscription.trialing': SubscriptionTrialingEvent;
  'subscription.updated': SubscriptionUpdatedEvent;
  'transaction.billed': TransactionBilledEvent;
  'transaction.canceled': TransactionCanceledEvent;
  'transaction.completed': TransactionCompletedEvent;
  'transaction.created': TransactionCreatedEvent;
  'transaction.paid': TransactionPaidEvent;
  'transaction.past_due': TransactionPastDueEvent;
  'transaction.payment_failed': TransactionPaymentFailedEvent;
  'transaction.ready': TransactionReadyEvent;
  'transaction.updated': TransactionUpdatedEvent;
  'transaction.revised': TransactionRevisedEvent;
  'report.created': ReportCreatedEvent;
  'report.updated': ReportUpdatedEvent;
  subscription_creation: never;
  subscription_renewal: never;
  subscription_pause: never;
  subscription_resume: never;
  subscription_cancellation: never;
}

interface SimulationScenarioConfigMap {
  subscription_creation: SimulationSubscriptionCreationConfig;
  subscription_renewal: SimulationSubscriptionRenewalConfig;
  subscription_pause: SimulationSubscriptionPauseConfig;
  subscription_resume: SimulationSubscriptionResumeConfig;
  subscription_cancellation: SimulationSubscriptionCancellationConfig;
}

export type DiscriminatedSimulationEventResponse<Base> = {
  [K in keyof SimulationEventPayloadMap]: Base & {
    type: K;
    payload?: K extends IEventName ? Partial<SimulationEventPayloadMap[K]['data']> | null : null;
    config?: K extends SimulationScenarioType ? Record<K, SimulationScenarioConfigMap[K]> : null;
  };
}[keyof SimulationEventPayloadMap];
