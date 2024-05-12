/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ISubscriptionNotificationResponse } from '../../../notifications/index.js';
import { IEventsResponse } from '../../../types/index.js';

export const SubscriptionImportedMock: IEventsResponse<ISubscriptionNotificationResponse> = {
  event_id: 'evt_01gxwxwnghn8xa7amfwqb0992q',
  event_type: 'subscription.imported',
  occurred_at: '2023-04-13T09:07:06.642209Z',
  notification_id: 'ntf_01gxwxwnjq16bhp2pz9p78cbk1',
  data: {
    id: 'sub_01gxwxwn84xqf0690d7qn5r2g7',
    transaction_id: 'txn_01h8bxpvx398a7zbawb77y0kp5',
    items: [
      {
        price: {
          id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          unit_price: { amount: '3600', currency_code: 'GBP' },
          description: 'Monthly (per seat)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
        },
        status: 'active',
        quantity: 10,
        recurring: true,
        created_at: '2023-04-13T09:07:06.628578Z',
        updated_at: '2023-04-13T09:07:06.628578Z',
        next_billed_at: '2023-05-13T09:07:04.730931Z',
        previously_billed_at: '2023-04-13T09:07:04.730931Z',
      },
      {
        price: {
          id: 'pri_01gsz95g2zrkagg294kpstx54r',
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz92krfzy3hcx5h5rtgnfwz',
          unit_price: { amount: '30000', currency_code: 'GBP' },
          description: 'Monthly (recurring addon)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
        },
        status: 'active',
        quantity: 1,
        recurring: true,
        created_at: '2023-04-13T09:07:06.628581Z',
        updated_at: '2023-04-13T09:07:06.628581Z',
        next_billed_at: '2023-05-13T09:07:04.730931Z',
        previously_billed_at: '2023-04-13T09:07:04.730931Z',
      },
      {
        price: {
          id: 'pri_01gsz98e27ak2tyhexptwc58yk',
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
          unit_price: { amount: '23880', currency_code: 'GBP' },
          description: 'One-time charge',
          trial_period: null,
          billing_cycle: null,
        },
        status: 'active',
        quantity: 1,
        recurring: false,
        created_at: '2023-04-13T09:07:06.628582Z',
        updated_at: '2023-04-13T09:07:06.628582Z',
        next_billed_at: null,
        previously_billed_at: '2023-04-13T09:07:04.730931Z',
      },
    ],
    status: 'active',
    paused_at: null,
    address_id: 'add_01gxwxqjh878r4mj3b1ex6xkxt',
    created_at: '2023-04-13T09:07:06.628577Z',
    started_at: '2023-04-13T09:07:04.730931Z',
    updated_at: '2023-04-13T09:07:06.628577Z',
    business_id: 'biz_01gxwxqjjwmdyd03q13aht3x1h',
    canceled_at: null,
    custom_data: null,
    customer_id: 'ctm_01gxwxe6vzgz6hcsbwjs6zrszr',
    billing_cycle: { interval: 'month', frequency: 1 },
    currency_code: 'GBP',
    next_billed_at: '2023-05-13T09:07:04.730931Z',
    billing_details: null,
    collection_mode: 'automatic',
    first_billed_at: '2023-04-13T09:07:04.730931Z',
    scheduled_change: null,
    current_billing_period: { ends_at: '2023-05-13T09:07:04.730931Z', starts_at: '2023-04-13T09:07:04.730931Z' },
  },
};

export const SubscriptionImportedMockExpectation = {
  data: {
    addressId: 'add_01gxwxqjh878r4mj3b1ex6xkxt',
    billingCycle: {
      frequency: 1,
      interval: 'month',
    },
    billingDetails: null,
    businessId: 'biz_01gxwxqjjwmdyd03q13aht3x1h',
    canceledAt: null,
    collectionMode: 'automatic',
    createdAt: '2023-04-13T09:07:06.628577Z',
    currencyCode: 'GBP',
    currentBillingPeriod: {
      endsAt: '2023-05-13T09:07:04.730931Z',
      startsAt: '2023-04-13T09:07:04.730931Z',
    },
    customData: null,
    importMeta: null,
    customerId: 'ctm_01gxwxe6vzgz6hcsbwjs6zrszr',
    discount: null,
    firstBilledAt: '2023-04-13T09:07:04.730931Z',
    id: 'sub_01gxwxwn84xqf0690d7qn5r2g7',
    items: [
      {
        createdAt: '2023-04-13T09:07:06.628578Z',
        nextBilledAt: '2023-05-13T09:07:04.730931Z',
        previouslyBilledAt: '2023-04-13T09:07:04.730931Z',
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
            amount: '3600',
            currencyCode: 'GBP',
          },
          unitPriceOverrides: [],
        },
        quantity: 10,
        recurring: true,
        status: 'active',
        trialDates: null,
        updatedAt: '2023-04-13T09:07:06.628578Z',
      },
      {
        createdAt: '2023-04-13T09:07:06.628581Z',
        nextBilledAt: '2023-05-13T09:07:04.730931Z',
        previouslyBilledAt: '2023-04-13T09:07:04.730931Z',
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'month',
          },
          customData: null,
          description: 'Monthly (recurring addon)',
          importMeta: null,
          name: null,
          id: 'pri_01gsz95g2zrkagg294kpstx54r',
          productId: 'pro_01gsz92krfzy3hcx5h5rtgnfwz',
          quantity: null,
          status: null,
          taxMode: 'account_setting',
          trialPeriod: null,
          type: null,
          unitPrice: {
            amount: '30000',
            currencyCode: 'GBP',
          },
          unitPriceOverrides: [],
        },
        quantity: 1,
        recurring: true,
        status: 'active',
        trialDates: null,
        updatedAt: '2023-04-13T09:07:06.628581Z',
      },
      {
        createdAt: '2023-04-13T09:07:06.628582Z',
        nextBilledAt: null,
        previouslyBilledAt: '2023-04-13T09:07:04.730931Z',
        price: {
          billingCycle: null,
          customData: null,
          description: 'One-time charge',
          importMeta: null,
          name: null,
          id: 'pri_01gsz98e27ak2tyhexptwc58yk',
          productId: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
          quantity: null,
          status: null,
          taxMode: 'account_setting',
          trialPeriod: null,
          type: null,
          unitPrice: {
            amount: '23880',
            currencyCode: 'GBP',
          },
          unitPriceOverrides: [],
        },
        quantity: 1,
        recurring: false,
        status: 'active',
        trialDates: null,
        updatedAt: '2023-04-13T09:07:06.628582Z',
      },
    ],
    nextBilledAt: '2023-05-13T09:07:04.730931Z',
    pausedAt: null,
    scheduledChange: null,
    startedAt: '2023-04-13T09:07:04.730931Z',
    status: 'active',
    transactionId: 'txn_01h8bxpvx398a7zbawb77y0kp5',
    updatedAt: '2023-04-13T09:07:06.628577Z',
  },
  eventId: 'evt_01gxwxwnghn8xa7amfwqb0992q',
  eventType: 'subscription.imported',
  notificationId: 'ntf_01gxwxwnjq16bhp2pz9p78cbk1',
  occurredAt: '2023-04-13T09:07:06.642209Z',
};
