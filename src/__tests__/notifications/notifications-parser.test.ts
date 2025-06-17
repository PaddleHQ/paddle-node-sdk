import { AddressCreatedMock, AddressCreatedMockExpectation } from '../mocks/notifications/address-created.mock.js';
import { AddressUpdatedMock, AddressUpdatedMockExpectation } from '../mocks/notifications/address-updated.mock.js';
import { AddressImportedMock, AddressImportedMockExpectation } from '../mocks/notifications/address-imported.mock.js';
import {
  AdjustmentCreatedMock,
  AdjustmentCreatedMockExpectation,
} from '../mocks/notifications/adjustment-created.mock.js';
import {
  AdjustmentUpdatedMock,
  AdjustmentUpdatedMockExpectation,
} from '../mocks/notifications/adjustment-updated.mock.js';
import { BusinessCreatedMock, BusinessCreatedMockExpectation } from '../mocks/notifications/business-created.mock.js';
import { BusinessUpdatedMock, BusinessUpdatedMockExpectation } from '../mocks/notifications/business-updated.mock.js';
import {
  BusinessImportedMock,
  BusinessImportedMockExpectation,
} from '../mocks/notifications/business-imported.mock.js';
import { CustomerCreatedMock, CustomerCreatedMockExpectation } from '../mocks/notifications/customer-created.mock.js';
import { CustomerUpdatedMock, CustomerUpdatedMockExpectation } from '../mocks/notifications/customer-updated.mock.js';
import {
  CustomerImportedMock,
  CustomerImportedMockExpectation,
} from '../mocks/notifications/customer-imported.mock.js';
import { DiscountCreatedMock, DiscountCreatedMockExpectation } from '../mocks/notifications/discount-created.mock.js';
import {
  DiscountImportedMock,
  DiscountImportedMockExpectation,
} from '../mocks/notifications/discount-imported.mock.js';
import { DiscountUpdatedMock, DiscountUpdatedMockExpectation } from '../mocks/notifications/discount-updated.mock.js';
import {
  PaymentMethodDeletedMock,
  PaymentMethodDeletedMockExpectation,
} from '../mocks/notifications/payment-method-deleted.mock';
import {
  PaymentMethodSavedMock,
  PaymentMethodSavedMockExpectation,
} from '../mocks/notifications/payment-method-saved.mock';
import { PayoutCreatedMock, PayoutCreatedMockExpectation } from '../mocks/notifications/payout-created.mock.js';
import { PayoutPaidMock, PayoutPaidMockExpectation } from '../mocks/notifications/payout-paid.mock.js';
import { PriceCreatedMock, PriceCreatedMockExpectation } from '../mocks/notifications/price-created.mock.js';
import { PriceUpdatedMock, PriceUpdatedMockExpectation } from '../mocks/notifications/price-updated.mock.js';
import { PriceImportedMock, PriceImportedMockExpectation } from '../mocks/notifications/price-imported.mock.js';
import { ProductCreatedMock, ProductCreatedMockExpectation } from '../mocks/notifications/product-created.mock.js';
import { ProductImportedMock, ProductImportedMockExpectation } from '../mocks/notifications/product-imported.mock.js';
import { ProductUpdatedMock, ProductUpdatedMockExpectation } from '../mocks/notifications/product-updated.mock.js';
import { ReportCreatedMock, ReportCreatedMockExpectation } from '../mocks/notifications/report-created.mock.js';
import { ReportUpdatedMock, ReportUpdatedMockExpectation } from '../mocks/notifications/report-updated.mock.js';
import {
  SubscriptionActivatedMock,
  SubscriptionActivatedMockExpectation,
} from '../mocks/notifications/subscription-activated.mock.js';
import {
  SubscriptionCanceledMock,
  SubscriptionCanceledMockExpectation,
} from '../mocks/notifications/subscription-canceled.mock.js';
import {
  SubscriptionCreatedMock,
  SubscriptionCreatedMockExpectation,
} from '../mocks/notifications/subscription-created.mock.js';
import {
  SubscriptionImportedMock,
  SubscriptionImportedMockExpectation,
} from '../mocks/notifications/subscription-imported.mock.js';
import {
  SubscriptionPastDueMock,
  SubscriptionPastDueMockExpectation,
} from '../mocks/notifications/subscription-past-due.mock.js';
import {
  SubscriptionPausedMock,
  SubscriptionPausedMockExpectation,
} from '../mocks/notifications/subscription-paused.mock.js';
import {
  SubscriptionResumedMock,
  SubscriptionResumedMockExpectation,
} from '../mocks/notifications/subscription-resumed.mock.js';
import {
  SubscriptionTrialingMock,
  SubscriptionTrialingMockExpectation,
} from '../mocks/notifications/subscription-trialing.mock.js';
import {
  SubscriptionUpdatedMock,
  SubscriptionUpdatedMockExpectation,
} from '../mocks/notifications/subscription-updated.mock.js';
import {
  TransactionBilledMock,
  TransactionBilledMockExpectation,
} from '../mocks/notifications/transaction-billed.mock.js';
import {
  TransactionCanceledMock,
  TransactionCanceledMockExpectation,
} from '../mocks/notifications/transaction-canceled.mock.js';
import {
  TransactionCompletedMock,
  TransactionCompletedMockExpectation,
} from '../mocks/notifications/transaction-completed.mock.js';
import {
  TransactionCreatedMock,
  TransactionCreatedMockExpectation,
} from '../mocks/notifications/transaction-created.mock.js';
import { TransactionPaidMock, TransactionPaidMockExpectation } from '../mocks/notifications/transaction-paid.mock.js';
import {
  TransactionPastDueMock,
  TransactionPastDueMockExpectation,
} from '../mocks/notifications/transaction-past-due.mock.js';
import {
  TransactionPaymentFailedMock,
  TransactionPaymentFailedMockExpectation,
} from '../mocks/notifications/transaction-payment-failed.mock.js';
import {
  TransactionReadyMock,
  TransactionReadyMockExpectation,
} from '../mocks/notifications/transaction-ready.mock.js';
import {
  TransactionUpdatedMock,
  TransactionUpdatedMockExpectation,
} from '../mocks/notifications/transaction-updated.mock.js';
import { InvoicePaidMock, InvoicePaidMockExpectation } from '../mocks/notifications/invoice-paid.mock.js';
import { IEvents, IEventsResponse } from '../../types/index.js';
import { Webhooks } from '../../notifications/index.js';
import {
  TransactionRevisedMock,
  TransactionRevisedMockExpectation,
} from '../mocks/notifications/transaction-revised.mock.js';
import {
  DiscountGroupCreatedMock,
  DiscountGroupCreatedMockExpectation,
} from '../mocks/notifications/discount-group-created.mock.js';

describe('Notifications Parser', () => {
  test.each([
    [AddressCreatedMock.event_type, AddressCreatedMock, AddressCreatedMockExpectation],
    [AddressUpdatedMock.event_type, AddressUpdatedMock, AddressUpdatedMockExpectation],
    [AddressImportedMock.event_type, AddressImportedMock, AddressImportedMockExpectation],
    [AdjustmentCreatedMock.event_type, AdjustmentCreatedMock, AdjustmentCreatedMockExpectation],
    [AdjustmentUpdatedMock.event_type, AdjustmentUpdatedMock, AdjustmentUpdatedMockExpectation],
    [BusinessCreatedMock.event_type, BusinessCreatedMock, BusinessCreatedMockExpectation],
    [BusinessUpdatedMock.event_type, BusinessUpdatedMock, BusinessUpdatedMockExpectation],
    [BusinessImportedMock.event_type, BusinessImportedMock, BusinessImportedMockExpectation],
    [CustomerCreatedMock.event_type, CustomerCreatedMock, CustomerCreatedMockExpectation],
    [CustomerUpdatedMock.event_type, CustomerUpdatedMock, CustomerUpdatedMockExpectation],
    [CustomerImportedMock.event_type, CustomerImportedMock, CustomerImportedMockExpectation],
    [DiscountCreatedMock.event_type, DiscountCreatedMock, DiscountCreatedMockExpectation],
    [DiscountImportedMock.event_type, DiscountImportedMock, DiscountImportedMockExpectation],
    [DiscountUpdatedMock.event_type, DiscountUpdatedMock, DiscountUpdatedMockExpectation],
    [DiscountGroupCreatedMock.event_type, DiscountGroupCreatedMock, DiscountGroupCreatedMockExpectation],
    [PaymentMethodDeletedMock.event_type, PaymentMethodDeletedMock, PaymentMethodDeletedMockExpectation],
    [PaymentMethodSavedMock.event_type, PaymentMethodSavedMock, PaymentMethodSavedMockExpectation],
    [PayoutCreatedMock.event_type, PayoutCreatedMock, PayoutCreatedMockExpectation],
    [PayoutPaidMock.event_type, PayoutPaidMock, PayoutPaidMockExpectation],
    [PriceCreatedMock.event_type, PriceCreatedMock, PriceCreatedMockExpectation],
    [PriceUpdatedMock.event_type, PriceUpdatedMock, PriceUpdatedMockExpectation],
    [PriceImportedMock.event_type, PriceImportedMock, PriceImportedMockExpectation],
    [ProductCreatedMock.event_type, ProductCreatedMock, ProductCreatedMockExpectation],
    [ProductImportedMock.event_type, ProductImportedMock, ProductImportedMockExpectation],
    [ProductUpdatedMock.event_type, ProductUpdatedMock, ProductUpdatedMockExpectation],
    [ReportCreatedMock.event_type, ReportCreatedMock, ReportCreatedMockExpectation],
    [ReportUpdatedMock.event_type, ReportUpdatedMock, ReportUpdatedMockExpectation],
    [SubscriptionActivatedMock.event_type, SubscriptionActivatedMock, SubscriptionActivatedMockExpectation],
    [SubscriptionCanceledMock.event_type, SubscriptionCanceledMock, SubscriptionCanceledMockExpectation],
    [SubscriptionCreatedMock.event_type, SubscriptionCreatedMock, SubscriptionCreatedMockExpectation],
    [SubscriptionImportedMock.event_type, SubscriptionImportedMock, SubscriptionImportedMockExpectation],
    [SubscriptionPastDueMock.event_type, SubscriptionPastDueMock, SubscriptionPastDueMockExpectation],
    [SubscriptionPausedMock.event_type, SubscriptionPausedMock, SubscriptionPausedMockExpectation],
    [SubscriptionResumedMock.event_type, SubscriptionResumedMock, SubscriptionResumedMockExpectation],
    [SubscriptionTrialingMock.event_type, SubscriptionTrialingMock, SubscriptionTrialingMockExpectation],
    [SubscriptionUpdatedMock.event_type, SubscriptionUpdatedMock, SubscriptionUpdatedMockExpectation],
    [TransactionBilledMock.event_type, TransactionBilledMock, TransactionBilledMockExpectation],
    [TransactionCanceledMock.event_type, TransactionCanceledMock, TransactionCanceledMockExpectation],
    [TransactionCompletedMock.event_type, TransactionCompletedMock, TransactionCompletedMockExpectation],
    [TransactionCreatedMock.event_type, TransactionCreatedMock, TransactionCreatedMockExpectation],
    [TransactionPaidMock.event_type, TransactionPaidMock, TransactionPaidMockExpectation],
    [TransactionPastDueMock.event_type, TransactionPastDueMock, TransactionPastDueMockExpectation],
    [TransactionPaymentFailedMock.event_type, TransactionPaymentFailedMock, TransactionPaymentFailedMockExpectation],
    [TransactionReadyMock.event_type, TransactionReadyMock, TransactionReadyMockExpectation],
    [TransactionUpdatedMock.event_type, TransactionUpdatedMock, TransactionUpdatedMockExpectation],
    [TransactionRevisedMock.event_type, TransactionRevisedMock, TransactionRevisedMockExpectation],
    // Generic Event
    [InvoicePaidMock.event_type, InvoicePaidMock, InvoicePaidMockExpectation],
  ])('validate %s ', (_eventType: string, eventMock: IEventsResponse, expectedValue: unknown = {}) => {
    expect(Webhooks.fromJson(eventMock as IEvents)).toEqual(expectedValue);
  });
});
