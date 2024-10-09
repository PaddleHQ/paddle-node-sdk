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
} from '../../notifications/events';

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
  'report.created': ReportCreatedEvent;
  'report.updated': ReportUpdatedEvent;
}

export type DiscriminatedEventResponse<Base> = {
  [K in keyof SimulationEventPayloadMap]: Base & {
    type: K;
    payload?: Partial<SimulationEventPayloadMap[K]['data']> | null;
  };
}[keyof SimulationEventPayloadMap];
