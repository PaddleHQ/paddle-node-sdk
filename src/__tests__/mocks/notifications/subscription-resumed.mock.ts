/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IEventsResponse } from '../../../types';
import { ISubscriptionNotificationResponse } from '../../../notifications';

export const SubscriptionResumedMock: IEventsResponse<ISubscriptionNotificationResponse> = {
  event_id: 'evt_01h7je74dkvjc4b2pt8sgsfm7f',
  event_type: 'subscription.resumed',
  occurred_at: '2023-08-11T13:57:46.547419Z',
  notification_id: 'ntf_01h7je74gef2bx0d5e9qkzyvrb',
  data: {
    id: 'sub_01h7ht5z5wdg9pz18jx1fagp8k',
    transaction_id: 'txn_01h8bxpvx398a7zbawb77y0kp5',
    items: [
      {
        price: {
          id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          unit_price: { amount: '3240', currency_code: 'USD' },
          description: 'Monthly (per seat)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
        },
        product: {
          id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          name: 'ChatApp Pro',
          status: 'active',
          image_url: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/2nmP8MQSret0aWeDemRw_icon1.png',
          description:
            "Everything in basic, plus access to a suite of powerful tools and features designed to take your team's productivity to the next level.",
          tax_category: 'standard',
          type: 'standard',
          custom_data: null,
          created_at: '2023-08-22T07:59:39.771451Z',
        },
        status: 'active',
        quantity: 10,
        recurring: true,
        created_at: '2023-08-11T08:07:36.892823Z',
        updated_at: '2023-11-11T08:33:04.45451Z',
        trial_dates: null,
        next_billed_at: '2023-12-11T08:33:04.443903Z',
        previously_billed_at: '2023-11-11T08:33:04.443903Z',
      },
      {
        price: {
          id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          tax_mode: 'account_setting',
          product_id: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          unit_price: { amount: '10800', currency_code: 'USD' },
          description: 'Monthly (recurring addon)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
        },
        product: {
          id: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          name: 'Voice rooms addon',
          status: 'active',
          image_url: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/GcZzBjXRfiraensppgtQ_icon2.png',
          description:
            'Create voice rooms in your chats to work in real time alongside your colleagues. Includes unlimited voice rooms and recording backup for compliance.',
          tax_category: 'standard',
          type: 'standard',
          custom_data: null,
          created_at: '2023-08-22T07:59:39.771451Z',
        },
        status: 'active',
        quantity: 1,
        recurring: true,
        created_at: '2023-08-11T08:07:36.892827Z',
        updated_at: '2023-11-11T08:33:04.45572Z',
        trial_dates: null,
        next_billed_at: '2023-12-11T08:33:04.443903Z',
        previously_billed_at: '2023-11-11T08:33:04.443903Z',
      },
    ],
    status: 'active',
    paused_at: null,
    address_id: 'add_01h7hswbfjqez51ezfhk7s6400',
    created_at: '2023-08-11T08:07:36.892822Z',
    started_at: '2023-08-11T08:07:35.449123Z',
    updated_at: '2023-11-11T08:33:04.453253Z',
    business_id: 'biz_01h7ht30avfmwa4kvkfeg4ef8e',
    canceled_at: null,
    custom_data: null,
    discount: null,
    customer_id: 'ctm_01h7hswb86rtps5ggbq7ybydcw',
    billing_cycle: { interval: 'month', frequency: 1 },
    currency_code: 'USD',
    next_billed_at: '2023-12-11T08:33:04.443903Z',
    billing_details: null,
    collection_mode: 'automatic',
    first_billed_at: '2023-08-11T08:07:35.449123Z',
    scheduled_change: null,
    current_billing_period: { ends_at: '2023-12-11T08:33:04.443903Z', starts_at: '2023-11-11T08:33:04.443903Z' },
  },
};

export const SubscriptionResumedMockExpectation = {
  data: {
    addressId: 'add_01h7hswbfjqez51ezfhk7s6400',
    billingCycle: {
      frequency: 1,
      interval: 'month',
    },
    billingDetails: null,
    businessId: 'biz_01h7ht30avfmwa4kvkfeg4ef8e',
    canceledAt: null,
    collectionMode: 'automatic',
    createdAt: '2023-08-11T08:07:36.892822Z',
    currencyCode: 'USD',
    currentBillingPeriod: {
      endsAt: '2023-12-11T08:33:04.443903Z',
      startsAt: '2023-11-11T08:33:04.443903Z',
    },
    customData: null,
    importMeta: null,
    customerId: 'ctm_01h7hswb86rtps5ggbq7ybydcw',
    discount: null,
    firstBilledAt: '2023-08-11T08:07:35.449123Z',
    id: 'sub_01h7ht5z5wdg9pz18jx1fagp8k',
    items: [
      {
        createdAt: '2023-08-11T08:07:36.892823Z',
        nextBilledAt: '2023-12-11T08:33:04.443903Z',
        previouslyBilledAt: '2023-11-11T08:33:04.443903Z',
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'month',
          },
          customData: null,
          description: 'Monthly (per seat)',
          id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          importMeta: null,
          name: null,
          productId: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          quantity: null,
          status: null,
          taxMode: 'account_setting',
          trialPeriod: null,
          type: null,
          unitPrice: {
            amount: '3240',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [],
        },
        product: {
          id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          name: 'ChatApp Pro',
          status: 'active',
          imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/2nmP8MQSret0aWeDemRw_icon1.png',
          description:
            "Everything in basic, plus access to a suite of powerful tools and features designed to take your team's productivity to the next level.",
          taxCategory: 'standard',
          type: 'standard',
          customData: null,
          importMeta: null,
          createdAt: '2023-08-22T07:59:39.771451Z',
          updatedAt: null,
        },
        quantity: 10,
        recurring: true,
        status: 'active',
        trialDates: null,
        updatedAt: '2023-11-11T08:33:04.45451Z',
      },
      {
        createdAt: '2023-08-11T08:07:36.892827Z',
        nextBilledAt: '2023-12-11T08:33:04.443903Z',
        previouslyBilledAt: '2023-11-11T08:33:04.443903Z',
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'month',
          },
          customData: null,
          description: 'Monthly (recurring addon)',
          importMeta: null,
          name: null,
          id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          productId: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          quantity: null,
          status: null,
          taxMode: 'account_setting',
          trialPeriod: null,
          type: null,
          unitPrice: {
            amount: '10800',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [],
        },
        product: {
          id: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          name: 'Voice rooms addon',
          status: 'active',
          imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/GcZzBjXRfiraensppgtQ_icon2.png',
          description:
            'Create voice rooms in your chats to work in real time alongside your colleagues. Includes unlimited voice rooms and recording backup for compliance.',
          taxCategory: 'standard',
          type: 'standard',
          customData: null,
          importMeta: null,
          createdAt: '2023-08-22T07:59:39.771451Z',
          updatedAt: null,
        },
        quantity: 1,
        recurring: true,
        status: 'active',
        trialDates: null,
        updatedAt: '2023-11-11T08:33:04.45572Z',
      },
    ],
    nextBilledAt: '2023-12-11T08:33:04.443903Z',
    pausedAt: null,
    scheduledChange: null,
    startedAt: '2023-08-11T08:07:35.449123Z',
    status: 'active',
    transactionId: 'txn_01h8bxpvx398a7zbawb77y0kp5',
    updatedAt: '2023-11-11T08:33:04.453253Z',
  },
  eventId: 'evt_01h7je74dkvjc4b2pt8sgsfm7f',
  eventType: 'subscription.resumed',
  notificationId: 'ntf_01h7je74gef2bx0d5e9qkzyvrb',
  occurredAt: '2023-08-11T13:57:46.547419Z',
};
