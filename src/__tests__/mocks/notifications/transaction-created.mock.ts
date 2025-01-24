/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ITransactionNotificationResponse } from '../../../notifications/index.js';
import { IEventsResponse } from '../../../types/index.js';

export const TransactionCreatedMock: IEventsResponse<ITransactionNotificationResponse> = {
  event_id: 'evt_01h8dzxgzb5af0yzd0mv5v11e2',
  event_type: 'transaction.created',
  occurred_at: '2023-08-22T06:46:35.755631Z',
  notification_id: 'ntf_01h8dzxh1vezfx6j8yesfv4ew7',
  data: {
    id: 'txn_01h8dzxgkvdwemdhbpcapj2tbj',
    items: [
      {
        price: {
          id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          status: 'active',
          quantity: { maximum: 999, minimum: 10 },
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          unit_price: { amount: '3000', currency_code: 'USD' },
          description: 'Monthly (per seat)',
          name: 'Monthly (per seat)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
          unit_price_overrides: [{ unit_price: { amount: '5000', currency_code: 'AUD' }, country_codes: ['AU'] }],
          type: 'standard',
          custom_data: null,
        },
        price_id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
        quantity: 10,
        proration: null,
      },
      {
        price: {
          id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          status: 'active',
          quantity: { maximum: 100, minimum: 1 },
          tax_mode: 'account_setting',
          product_id: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          unit_price: { amount: '10000', currency_code: 'USD' },
          description: 'Monthly (recurring addon)',
          name: 'Monthly (recurring addon)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
          unit_price_overrides: [{ unit_price: { amount: '20000', currency_code: 'AUD' }, country_codes: ['AU'] }],
          type: 'standard',
          custom_data: null,
        },
        price_id: 'pri_01h1vjfevh5etwq3rb416a23h2',
        quantity: 1,
        proration: null,
      },
      {
        price: {
          id: 'pri_01gsz98e27ak2tyhexptwc58yk',
          status: 'active',
          quantity: { maximum: 1, minimum: 1 },
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
          unit_price: { amount: '19900', currency_code: 'USD' },
          description: 'One-time charge',
          name: 'One-time charge',
          trial_period: null,
          billing_cycle: null,
          unit_price_overrides: [{ unit_price: { amount: '40000', currency_code: 'AUD' }, country_codes: ['AU'] }],
          type: 'standard',
          custom_data: null,
        },
        price_id: 'pri_01gsz98e27ak2tyhexptwc58yk',
        quantity: 1,
        proration: null,
      },
    ],
    origin: 'web',
    status: 'draft',
    details: {
      totals: {
        fee: null,
        tax: '11980',
        total: '71880',
        credit: '0',
        credit_to_balance: '0',
        balance: '71880',
        discount: '0',
        earnings: null,
        subtotal: '59900',
        grand_total: '71880',
        currency_code: 'USD',
      },
      line_items: [
        {
          id: 'txnitm_01h8dzxgmzys6xwzza1nnz3vx5',
          totals: { tax: '6000', total: '36000', discount: '0', subtotal: '30000' },
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
          price_id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          quantity: 10,
          tax_rate: '0.2',
          unit_totals: { tax: '600', total: '3600', discount: '0', subtotal: '3000' },
        },
        {
          id: 'txnitm_01h8dzxgmzys6xwzza1rh8dp2s',
          totals: { tax: '2000', total: '12000', discount: '0', subtotal: '10000' },
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
          price_id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          quantity: 1,
          tax_rate: '0.2',
          unit_totals: { tax: '2000', total: '12000', discount: '0', subtotal: '10000' },
        },
        {
          id: 'txnitm_01h8dzxgmzys6xwzza1stmrrnh',
          totals: { tax: '3980', total: '23880', discount: '0', subtotal: '19900' },
          product: {
            id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
            name: 'Custom domains',
            status: 'active',
            image_url: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/SW3OevDQ92dUHSkN5a2x_icon3.png',
            description:
              'Make ChatApp truly your own with custom domains! Custom domains reinforce your brand identity and make it easy for your team to access ChatApp.',
            tax_category: 'standard',
            type: 'standard',
            custom_data: null,
            created_at: '2023-08-22T07:59:39.771451Z',
          },
          price_id: 'pri_01gsz98e27ak2tyhexptwc58yk',
          quantity: 1,
          tax_rate: '0.2',
          unit_totals: { tax: '3980', total: '23880', discount: '0', subtotal: '19900' },
        },
      ],
      payout_totals: null,
      tax_rates_used: [{ totals: { tax: '11980', total: '71880', discount: '0', subtotal: '59900' }, tax_rate: '0.2' }],
    },
    checkout: {
      url: 'https://magnificent-entremet-7ae0c6.netlify.app/default/overlay?_ptxn=txn_01h8dzxgkvdwemdhbpcapj2tbj',
    },
    payments: [],
    billed_at: null,
    address_id: null,
    created_at: '2023-08-22T06:46:35.440187078Z',
    invoice_id: null,
    updated_at: '2023-08-22T06:46:35.440187078Z',
    business_id: null,
    custom_data: null,
    customer_id: null,
    discount_id: null,
    currency_code: 'USD',
    billing_period: null,
    invoice_number: null,
    billing_details: null,
    collection_mode: 'automatic',
    subscription_id: null,
  },
};

export const TransactionCreatedMockExpectation = {
  data: {
    addressId: null,
    billedAt: null,
    revisedAt: null,
    billingDetails: null,
    billingPeriod: null,
    businessId: null,
    checkout: {
      url: 'https://magnificent-entremet-7ae0c6.netlify.app/default/overlay?_ptxn=txn_01h8dzxgkvdwemdhbpcapj2tbj',
    },
    collectionMode: 'automatic',
    createdAt: '2023-08-22T06:46:35.440187078Z',
    currencyCode: 'USD',
    customData: null,
    customerId: null,
    details: {
      adjustedPayoutTotals: null,
      adjustedTotals: null,
      lineItems: [
        {
          id: 'txnitm_01h8dzxgmzys6xwzza1nnz3vx5',
          priceId: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          product: {
            createdAt: '2023-08-22T07:59:39.771451Z',
            customData: null,
            description:
              "Everything in basic, plus access to a suite of powerful tools and features designed to take your team's productivity to the next level.",
            id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
            imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/2nmP8MQSret0aWeDemRw_icon1.png',
            importMeta: null,
            name: 'ChatApp Pro',
            status: 'active',
            taxCategory: 'standard',
            type: 'standard',
            updatedAt: null,
          },
          proration: null,
          quantity: 10,
          taxRate: '0.2',
          totals: {
            discount: '0',
            subtotal: '30000',
            tax: '6000',
            total: '36000',
          },
          unitTotals: {
            discount: '0',
            subtotal: '3000',
            tax: '600',
            total: '3600',
          },
        },
        {
          id: 'txnitm_01h8dzxgmzys6xwzza1rh8dp2s',
          priceId: 'pri_01h1vjfevh5etwq3rb416a23h2',
          product: {
            createdAt: '2023-08-22T07:59:39.771451Z',
            customData: null,
            description:
              'Create voice rooms in your chats to work in real time alongside your colleagues. Includes unlimited voice rooms and recording backup for compliance.',
            id: 'pro_01h1vjes1y163xfj1rh1tkfb65',
            imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/GcZzBjXRfiraensppgtQ_icon2.png',
            importMeta: null,
            name: 'Voice rooms addon',
            status: 'active',
            taxCategory: 'standard',
            type: 'standard',
            updatedAt: null,
          },
          proration: null,
          quantity: 1,
          taxRate: '0.2',
          totals: {
            discount: '0',
            subtotal: '10000',
            tax: '2000',
            total: '12000',
          },
          unitTotals: {
            discount: '0',
            subtotal: '10000',
            tax: '2000',
            total: '12000',
          },
        },
        {
          id: 'txnitm_01h8dzxgmzys6xwzza1stmrrnh',
          priceId: 'pri_01gsz98e27ak2tyhexptwc58yk',
          product: {
            createdAt: '2023-08-22T07:59:39.771451Z',
            customData: null,
            description:
              'Make ChatApp truly your own with custom domains! Custom domains reinforce your brand identity and make it easy for your team to access ChatApp.',
            id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
            imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/SW3OevDQ92dUHSkN5a2x_icon3.png',
            importMeta: null,
            name: 'Custom domains',
            status: 'active',
            taxCategory: 'standard',
            type: 'standard',
            updatedAt: null,
          },
          proration: null,
          quantity: 1,
          taxRate: '0.2',
          totals: {
            discount: '0',
            subtotal: '19900',
            tax: '3980',
            total: '23880',
          },
          unitTotals: {
            discount: '0',
            subtotal: '19900',
            tax: '3980',
            total: '23880',
          },
        },
      ],
      payoutTotals: null,
      taxRatesUsed: [
        {
          taxRate: '0.2',
          totals: {
            discount: '0',
            subtotal: '59900',
            tax: '11980',
            total: '71880',
          },
        },
      ],
      totals: {
        balance: '71880',
        credit: '0',
        creditToBalance: '0',
        currencyCode: 'USD',
        discount: '0',
        earnings: null,
        fee: null,
        grandTotal: '71880',
        subtotal: '59900',
        tax: '11980',
        total: '71880',
      },
    },
    discountId: null,
    id: 'txn_01h8dzxgkvdwemdhbpcapj2tbj',
    invoiceId: null,
    invoiceNumber: null,
    items: [
      {
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'month',
          },
          createdAt: null,
          customData: null,
          description: 'Monthly (per seat)',
          id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          importMeta: null,
          name: 'Monthly (per seat)',
          productId: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          quantity: {
            maximum: 999,
            minimum: 10,
          },
          status: 'active',
          taxMode: 'account_setting',
          trialPeriod: null,
          type: 'standard',
          unitPrice: {
            amount: '3000',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [
            {
              countryCodes: ['AU'],
              unitPrice: {
                amount: '5000',
                currencyCode: 'AUD',
              },
            },
          ],
          updatedAt: null,
        },
        proration: null,
        quantity: 10,
      },
      {
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'month',
          },
          createdAt: null,
          customData: null,
          description: 'Monthly (recurring addon)',
          id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          importMeta: null,
          name: 'Monthly (recurring addon)',
          productId: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          quantity: {
            maximum: 100,
            minimum: 1,
          },
          status: 'active',
          taxMode: 'account_setting',
          trialPeriod: null,
          type: 'standard',
          unitPrice: {
            amount: '10000',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [
            {
              countryCodes: ['AU'],
              unitPrice: {
                amount: '20000',
                currencyCode: 'AUD',
              },
            },
          ],
          updatedAt: null,
        },
        proration: null,
        quantity: 1,
      },
      {
        price: {
          billingCycle: null,
          createdAt: null,
          customData: null,
          description: 'One-time charge',
          id: 'pri_01gsz98e27ak2tyhexptwc58yk',
          importMeta: null,
          name: 'One-time charge',
          productId: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
          quantity: {
            maximum: 1,
            minimum: 1,
          },
          status: 'active',
          taxMode: 'account_setting',
          trialPeriod: null,
          type: 'standard',
          unitPrice: {
            amount: '19900',
            currencyCode: 'USD',
          },
          unitPriceOverrides: [
            {
              countryCodes: ['AU'],
              unitPrice: {
                amount: '40000',
                currencyCode: 'AUD',
              },
            },
          ],
          updatedAt: null,
        },
        proration: null,
        quantity: 1,
      },
    ],
    origin: 'web',
    payments: [],
    status: 'draft',
    subscriptionId: null,
    updatedAt: '2023-08-22T06:46:35.440187078Z',
  },
  eventId: 'evt_01h8dzxgzb5af0yzd0mv5v11e2',
  eventType: 'transaction.created',
  notificationId: 'ntf_01h8dzxh1vezfx6j8yesfv4ew7',
  occurredAt: '2023-08-22T06:46:35.755631Z',
};
