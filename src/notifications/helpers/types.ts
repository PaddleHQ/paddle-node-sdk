import {
  type AddressCreatedEvent,
  type AddressImportedEvent,
  type AddressUpdatedEvent,
  type AdjustmentCreatedEvent,
  type AdjustmentUpdatedEvent,
  type ApiKeyCreatedEvent,
  type ApiKeyExpiredEvent,
  type ApiKeyExpiringEvent,
  type ApiKeyRevokedEvent,
  type ApiKeyUpdatedEvent,
  type ApiKeyExposureCreatedEvent,
  type BusinessCreatedEvent,
  type BusinessImportedEvent,
  type BusinessUpdatedEvent,
  type ClientTokenCreatedEvent,
  type ClientTokenRevokedEvent,
  type ClientTokenUpdatedEvent,
  type CustomerCreatedEvent,
  type CustomerImportedEvent,
  type CustomerUpdatedEvent,
  type DiscountCreatedEvent,
  type DiscountGroupCreatedEvent,
  type DiscountGroupUpdatedEvent,
  type DiscountImportedEvent,
  type DiscountUpdatedEvent,
  type PaymentMethodDeletedEvent,
  type PaymentMethodSavedEvent,
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
  type TransactionRevisedEvent,
  type TransactionUpdatedEvent,
} from '../events/index.js';

export type EventEntity =
  | AddressCreatedEvent
  | AddressUpdatedEvent
  | AddressImportedEvent
  | AdjustmentUpdatedEvent
  | AdjustmentCreatedEvent
  | ApiKeyCreatedEvent
  | ApiKeyUpdatedEvent
  | ApiKeyExpiringEvent
  | ApiKeyExpiredEvent
  | ApiKeyRevokedEvent
  | ApiKeyExposureCreatedEvent
  | BusinessCreatedEvent
  | BusinessUpdatedEvent
  | BusinessImportedEvent
  | ClientTokenCreatedEvent
  | ClientTokenUpdatedEvent
  | ClientTokenRevokedEvent
  | CustomerCreatedEvent
  | CustomerUpdatedEvent
  | CustomerImportedEvent
  | DiscountCreatedEvent
  | DiscountUpdatedEvent
  | DiscountImportedEvent
  | DiscountGroupCreatedEvent
  | DiscountGroupUpdatedEvent
  | PaymentMethodDeletedEvent
  | PaymentMethodSavedEvent
  | PayoutCreatedEvent
  | PayoutPaidEvent
  | PriceCreatedEvent
  | PriceUpdatedEvent
  | PriceImportedEvent
  | ProductCreatedEvent
  | ProductUpdatedEvent
  | ProductImportedEvent
  | SubscriptionActivatedEvent
  | SubscriptionCanceledEvent
  | SubscriptionCreatedEvent
  | SubscriptionImportedEvent
  | SubscriptionPastDueEvent
  | SubscriptionPausedEvent
  | SubscriptionResumedEvent
  | SubscriptionTrialingEvent
  | SubscriptionUpdatedEvent
  | TransactionBilledEvent
  | TransactionCanceledEvent
  | TransactionCompletedEvent
  | TransactionCreatedEvent
  | TransactionPaidEvent
  | TransactionPastDueEvent
  | TransactionPaymentFailedEvent
  | TransactionReadyEvent
  | TransactionUpdatedEvent
  | TransactionRevisedEvent
  | ReportUpdatedEvent
  | ReportCreatedEvent;

export enum EventName {
  AddressCreated = 'address.created',
  AddressUpdated = 'address.updated',
  AddressImported = 'address.imported',
  AdjustmentCreated = 'adjustment.created',
  AdjustmentUpdated = 'adjustment.updated',
  ApiKeyCreated = 'api_key.created',
  ApiKeyUpdated = 'api_key.updated',
  ApiKeyExpiring = 'api_key.expiring',
  ApiKeyExpired = 'api_key.expired',
  ApiKeyRevoked = 'api_key.revoked',
  ApiKeyExposureCreated = 'api_key_exposure.created',
  BusinessCreated = 'business.created',
  BusinessImported = 'business.imported',
  BusinessUpdated = 'business.updated',
  ClientTokenCreated = 'client_token.created',
  ClientTokenUpdated = 'client_token.updated',
  ClientTokenRevoked = 'client_token.revoked',
  CustomerCreated = 'customer.created',
  CustomerUpdated = 'customer.updated',
  CustomerImported = 'customer.imported',
  DiscountCreated = 'discount.created',
  DiscountUpdated = 'discount.updated',
  DiscountImported = 'discount.imported',
  DiscountGroupCreated = 'discount_group.created',
  DiscountGroupUpdated = 'discount_group.updated',
  PaymentMethodDeleted = 'payment_method.deleted',
  PaymentMethodSaved = 'payment_method.saved',
  PayoutCreated = 'payout.created',
  PayoutPaid = 'payout.paid',
  PriceCreated = 'price.created',
  PriceUpdated = 'price.updated',
  PriceImported = 'price.imported',
  ProductCreated = 'product.created',
  ProductUpdated = 'product.updated',
  ProductImported = 'product.imported',
  SubscriptionActivated = 'subscription.activated',
  SubscriptionCanceled = 'subscription.canceled',
  SubscriptionImported = 'subscription.imported',
  SubscriptionCreated = 'subscription.created',
  SubscriptionPastDue = 'subscription.past_due',
  SubscriptionPaused = 'subscription.paused',
  SubscriptionResumed = 'subscription.resumed',
  SubscriptionTrialing = 'subscription.trialing',
  SubscriptionUpdated = 'subscription.updated',
  TransactionBilled = 'transaction.billed',
  TransactionCanceled = 'transaction.canceled',
  TransactionCompleted = 'transaction.completed',
  TransactionPaid = 'transaction.paid',
  TransactionCreated = 'transaction.created',
  TransactionPastDue = 'transaction.past_due',
  TransactionPaymentFailed = 'transaction.payment_failed',
  TransactionReady = 'transaction.ready',
  TransactionUpdated = 'transaction.updated',
  TransactionRevised = 'transaction.revised',
  ReportCreated = 'report.created',
  ReportUpdated = 'report.updated',
}

export type IEventName =
  | 'address.created'
  | 'address.updated'
  | 'address.imported'
  | 'adjustment.created'
  | 'adjustment.updated'
  | 'api_key.created'
  | 'api_key.updated'
  | 'api_key.expiring'
  | 'api_key.expired'
  | 'api_key.revoked'
  | 'api_key_exposure.created'
  | 'business.created'
  | 'business.updated'
  | 'business.imported'
  | 'client_token.created'
  | 'client_token.updated'
  | 'client_token.revoked'
  | 'customer.created'
  | 'customer.imported'
  | 'customer.updated'
  | 'discount.created'
  | 'discount.updated'
  | 'discount.imported'
  | 'discount_group.created'
  | 'discount_group.updated'
  | 'payment_method.saved'
  | 'payment_method.deleted'
  | 'payout.created'
  | 'payout.paid'
  | 'price.updated'
  | 'price.created'
  | 'price.imported'
  | 'product.updated'
  | 'product.created'
  | 'product.imported'
  | 'subscription.activated'
  | 'subscription.canceled'
  | 'subscription.imported'
  | 'subscription.created'
  | 'subscription.past_due'
  | 'subscription.paused'
  | 'subscription.resumed'
  | 'subscription.trialing'
  | 'subscription.updated'
  | 'transaction.billed'
  | 'transaction.canceled'
  | 'transaction.completed'
  | 'transaction.paid'
  | 'transaction.created'
  | 'transaction.past_due'
  | 'transaction.payment_failed'
  | 'transaction.ready'
  | 'transaction.updated'
  | 'transaction.revised'
  | 'report.created'
  | 'report.updated';
