import { WebhooksValidator } from './webhooks-validator.js';
import { type IEvents } from '../../types/index.js';
import { type EventEntity, EventName } from './types.js';
import {
  AddressCreatedEvent,
  AddressImportedEvent,
  AddressUpdatedEvent,
  AdjustmentCreatedEvent,
  AdjustmentUpdatedEvent,
  ApiKeyCreatedEvent,
  ApiKeyExpiredEvent,
  ApiKeyExpiringEvent,
  ApiKeyRevokedEvent,
  ApiKeyUpdatedEvent,
  ApiKeyExposureCreatedEvent,
  BusinessCreatedEvent,
  BusinessImportedEvent,
  BusinessUpdatedEvent,
  ClientTokenCreatedEvent,
  ClientTokenRevokedEvent,
  ClientTokenUpdatedEvent,
  CustomerCreatedEvent,
  CustomerImportedEvent,
  CustomerUpdatedEvent,
  DiscountCreatedEvent,
  DiscountGroupCreatedEvent,
  DiscountGroupUpdatedEvent,
  DiscountImportedEvent,
  DiscountUpdatedEvent,
  GenericEvent,
  PaymentMethodDeletedEvent,
  PaymentMethodSavedEvent,
  PayoutCreatedEvent,
  PayoutPaidEvent,
  PriceCreatedEvent,
  PriceImportedEvent,
  PriceUpdatedEvent,
  ProductCreatedEvent,
  ProductImportedEvent,
  ProductUpdatedEvent,
  ReportCreatedEvent,
  ReportUpdatedEvent,
  SubscriptionActivatedEvent,
  SubscriptionCanceledEvent,
  SubscriptionCreatedEvent,
  SubscriptionImportedEvent,
  SubscriptionPastDueEvent,
  SubscriptionPausedEvent,
  SubscriptionResumedEvent,
  SubscriptionTrialingEvent,
  SubscriptionUpdatedEvent,
  TransactionBilledEvent,
  TransactionCanceledEvent,
  TransactionCompletedEvent,
  TransactionCreatedEvent,
  TransactionPaidEvent,
  TransactionPastDueEvent,
  TransactionPaymentFailedEvent,
  TransactionReadyEvent,
  TransactionRevisedEvent,
  TransactionUpdatedEvent,
} from '../events/index.js';
import { Logger } from '../../internal/base/logger.js';

export class Webhooks {
  async unmarshal(requestBody: string, secretKey: string, signature: string) {
    const isSignatureValid = await new WebhooksValidator().isValidSignature(requestBody, secretKey, signature);

    if (isSignatureValid) {
      const parsedRequest = JSON.parse(requestBody);
      return Webhooks.fromJson(parsedRequest);
    } else {
      throw new Error('[Paddle] Webhook signature verification failed');
    }
  }

  async isSignatureValid(requestBody: string, secretKey: string, signature: string) {
    return await new WebhooksValidator().isValidSignature(requestBody, secretKey, signature);
  }

  static fromJson(data: IEvents): EventEntity {
    switch (data.event_type) {
      case EventName.AddressCreated:
        return new AddressCreatedEvent(data);
      case EventName.AddressUpdated:
        return new AddressUpdatedEvent(data);
      case EventName.AddressImported:
        return new AddressImportedEvent(data);
      case EventName.AdjustmentCreated:
        return new AdjustmentCreatedEvent(data);
      case EventName.AdjustmentUpdated:
        return new AdjustmentUpdatedEvent(data);
      case EventName.ApiKeyCreated:
        return new ApiKeyCreatedEvent(data);
      case EventName.ApiKeyExpired:
        return new ApiKeyExpiredEvent(data);
      case EventName.ApiKeyExpiring:
        return new ApiKeyExpiringEvent(data);
      case EventName.ApiKeyRevoked:
        return new ApiKeyRevokedEvent(data);
      case EventName.ApiKeyUpdated:
        return new ApiKeyUpdatedEvent(data);
      case EventName.ApiKeyExposureCreated:
        return new ApiKeyExposureCreatedEvent(data);
      case EventName.BusinessCreated:
        return new BusinessCreatedEvent(data);
      case EventName.BusinessUpdated:
        return new BusinessUpdatedEvent(data);
      case EventName.BusinessImported:
        return new BusinessImportedEvent(data);
      case EventName.ClientTokenCreated:
        return new ClientTokenCreatedEvent(data);
      case EventName.ClientTokenUpdated:
        return new ClientTokenUpdatedEvent(data);
      case EventName.ClientTokenRevoked:
        return new ClientTokenRevokedEvent(data);
      case EventName.CustomerCreated:
        return new CustomerCreatedEvent(data);
      case EventName.CustomerUpdated:
        return new CustomerUpdatedEvent(data);
      case EventName.CustomerImported:
        return new CustomerImportedEvent(data);
      case EventName.DiscountCreated:
        return new DiscountCreatedEvent(data);
      case EventName.DiscountImported:
        return new DiscountImportedEvent(data);
      case EventName.DiscountUpdated:
        return new DiscountUpdatedEvent(data);
      case EventName.DiscountGroupCreated:
        return new DiscountGroupCreatedEvent(data);
      case EventName.DiscountGroupUpdated:
        return new DiscountGroupUpdatedEvent(data);
      case EventName.PaymentMethodDeleted:
        return new PaymentMethodDeletedEvent(data);
      case EventName.PaymentMethodSaved:
        return new PaymentMethodSavedEvent(data);
      case EventName.PayoutCreated:
        return new PayoutCreatedEvent(data);
      case EventName.PayoutPaid:
        return new PayoutPaidEvent(data);
      case EventName.PriceCreated:
        return new PriceCreatedEvent(data);
      case EventName.PriceUpdated:
        return new PriceUpdatedEvent(data);
      case EventName.PriceImported:
        return new PriceImportedEvent(data);
      case EventName.ProductCreated:
        return new ProductCreatedEvent(data);
      case EventName.ProductUpdated:
        return new ProductUpdatedEvent(data);
      case EventName.ProductImported:
        return new ProductImportedEvent(data);
      case EventName.SubscriptionActivated:
        return new SubscriptionActivatedEvent(data);
      case EventName.SubscriptionCanceled:
        return new SubscriptionCanceledEvent(data);
      case EventName.SubscriptionCreated:
        return new SubscriptionCreatedEvent(data);
      case EventName.SubscriptionImported:
        return new SubscriptionImportedEvent(data);
      case EventName.SubscriptionPastDue:
        return new SubscriptionPastDueEvent(data);
      case EventName.SubscriptionPaused:
        return new SubscriptionPausedEvent(data);
      case EventName.SubscriptionResumed:
        return new SubscriptionResumedEvent(data);
      case EventName.SubscriptionTrialing:
        return new SubscriptionTrialingEvent(data);
      case EventName.SubscriptionUpdated:
        return new SubscriptionUpdatedEvent(data);
      case EventName.TransactionBilled:
        return new TransactionBilledEvent(data);
      case EventName.TransactionCanceled:
        return new TransactionCanceledEvent(data);
      case EventName.TransactionCompleted:
        return new TransactionCompletedEvent(data);
      case EventName.TransactionCreated:
        return new TransactionCreatedEvent(data);
      case EventName.TransactionPaid:
        return new TransactionPaidEvent(data);
      case EventName.TransactionPastDue:
        return new TransactionPastDueEvent(data);
      case EventName.TransactionPaymentFailed:
        return new TransactionPaymentFailedEvent(data);
      case EventName.TransactionReady:
        return new TransactionReadyEvent(data);
      case EventName.TransactionUpdated:
        return new TransactionUpdatedEvent(data);
      case EventName.TransactionRevised:
        return new TransactionRevisedEvent(data);
      case EventName.ReportCreated:
        return new ReportCreatedEvent(data);
      case EventName.ReportUpdated:
        return new ReportUpdatedEvent(data);
      default:
        // @ts-expect-error event_type did not match any handled events
        Logger.log(`Unhandled event: ${data.event_type}`);
        return new GenericEvent(data) as EventEntity;
    }
  }
}
