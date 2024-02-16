/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IEventsResponse } from '../../../types';
import { ISubscriptionNotificationResponse } from '../../../notifications';

export const SubscriptionTrialingMock: IEventsResponse<ISubscriptionNotificationResponse> = {
  event_id: 'evt_01h84cka4p40e737vm1ajb2bc5',
  event_type: 'subscription.trialing',
  occurred_at: '2023-08-18T13:15:48.246292Z',
  notification_id: 'ntf_01h84cka91b65gy90qhe2tw2q6',
  data: {
    id: 'sub_01h84ck8sg4ebkpzqb9x2mtjjf',
    transaction_id: 'txn_01h8bxpvx398a7zbawb77y0kp5',
    items: [
      {
        price: {
          id: 'pri_01h84cdy3xatsp16afda2gekzy',
          tax_mode: 'account_setting',
          product_id: 'pro_01h84cd36f900f3wmpdfamgv8w',
          unit_price: { amount: '0', currency_code: 'USD' },
          description: 'Annual plan',
          trial_period: { interval: 'day', frequency: 10 },
          billing_cycle: { interval: 'year', frequency: 1 },
        },
        status: 'trialing',
        quantity: 1,
        recurring: true,
        created_at: '2023-08-18T13:15:46.864164Z',
        updated_at: '2023-08-18T13:15:46.864164Z',
        trial_dates: { ends_at: '2023-08-28T13:15:46.864158Z', starts_at: '2023-08-18T13:15:46.864158Z' },
        next_billed_at: '2023-08-28T13:15:46.864158Z',
        previously_billed_at: null,
      },
    ],
    status: 'trialing',
    paused_at: null,
    address_id: 'add_01h84cjfy5411jpjes4hmafqry',
    created_at: '2023-08-18T13:15:46.864163Z',
    started_at: '2023-08-18T13:15:46.864158Z',
    updated_at: '2023-08-18T13:15:46.864163Z',
    business_id: null,
    canceled_at: null,
    custom_data: null,
    discount: null,
    customer_id: 'ctm_01h84cjfwmdph1k8kgsyjt3k7g',
    billing_cycle: { interval: 'year', frequency: 1 },
    currency_code: 'USD',
    next_billed_at: '2023-08-28T13:15:46.864158Z',
    billing_details: null,
    collection_mode: 'automatic',
    first_billed_at: null,
    scheduled_change: null,
    current_billing_period: { ends_at: '2023-08-28T13:15:46.864158Z', starts_at: '2023-08-18T13:15:46.864158Z' },
  },
};

export const SubscriptionTrialingMockExpectation = {
  data: {
    addressId: 'add_01h84cjfy5411jpjes4hmafqry',
    billingCycle: {
      frequency: 1,
      interval: 'year',
    },
    billingDetails: null,
    businessId: null,
    canceledAt: null,
    collectionMode: 'automatic',
    createdAt: '2023-08-18T13:15:46.864163Z',
    currencyCode: 'USD',
    currentBillingPeriod: {
      endsAt: '2023-08-28T13:15:46.864158Z',
      startsAt: '2023-08-18T13:15:46.864158Z',
    },
    customData: null,
    importMeta: null,
    customerId: 'ctm_01h84cjfwmdph1k8kgsyjt3k7g',
    discount: null,
    firstBilledAt: null,
    id: 'sub_01h84ck8sg4ebkpzqb9x2mtjjf',
    items: [
      {
        createdAt: '2023-08-18T13:15:46.864164Z',
        nextBilledAt: '2023-08-28T13:15:46.864158Z',
        previouslyBilledAt: null,
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'year',
          },
          customData: null,
          description: 'Annual plan',
          importMeta: null,
          name: null,
          id: 'pri_01h84cdy3xatsp16afda2gekzy',
          productId: 'pro_01h84cd36f900f3wmpdfamgv8w',
          quantity: null,
          status: null,
          taxMode: 'account_setting',
          trialPeriod: {
            frequency: 10,
            interval: 'day',
          },
          type: null,
          unitPrice: {
            amount: '0',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [],
        },
        quantity: 1,
        recurring: true,
        status: 'trialing',
        trialDates: {
          endsAt: '2023-08-28T13:15:46.864158Z',
          startsAt: '2023-08-18T13:15:46.864158Z',
        },
        updatedAt: '2023-08-18T13:15:46.864164Z',
      },
    ],
    nextBilledAt: '2023-08-28T13:15:46.864158Z',
    pausedAt: null,
    scheduledChange: null,
    startedAt: '2023-08-18T13:15:46.864158Z',
    status: 'trialing',
    updatedAt: '2023-08-18T13:15:46.864163Z',
    transactionId: 'txn_01h8bxpvx398a7zbawb77y0kp5',
  },
  eventId: 'evt_01h84cka4p40e737vm1ajb2bc5',
  eventType: 'subscription.trialing',
  notificationId: 'ntf_01h84cka91b65gy90qhe2tw2q6',
  occurredAt: '2023-08-18T13:15:48.246292Z',
};
