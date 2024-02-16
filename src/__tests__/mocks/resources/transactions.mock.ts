/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ITransactionPreviewResponse, ITransactionResponse } from '../../../types';
import { Response, ResponsePaginated } from '../../../internal';
import {
  CreateTransactionRequestBody,
  TransactionPreviewRequestBody,
  UpdateTransactionRequestBody,
} from '../../../resources';

export const CreateTransactionMock: CreateTransactionRequestBody = {
  status: 'draft',
  customerId: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  addressId: 'add_01gm302t81w94gyjpjpqypkzkf',
  businessId: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  customData: { customer_reference_id: 'abcd1234' },
  currencyCode: 'USD',
  collectionMode: 'automatic',
  discountId: 'dsc_01gv5kpg05xp104ek2fmgjwttf',
  billingDetails: {
    enableCheckout: true,
    purchaseOrderNumber: 'NO_VALUE',
    additionalInformation: 'NO_VALUE',
    paymentTerms: { interval: 'day', frequency: 10 },
  },
  billingPeriod: { startsAt: '2024-10-12T07:20:50.52Z', endsAt: '2024-10-12T07:20:50.52Z' },
  items: [
    {
      quantity: 10,
      priceId: 'pri_01gsz8z1q1n00f12qt82y31smh',
    },
  ],
  checkout: { url: 'NO_VALUE' },
};

export const UpdateTransactionMock: UpdateTransactionRequestBody = {
  status: 'draft',
  customerId: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  addressId: 'add_01gm302t81w94gyjpjpqypkzkf',
  businessId: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  customData: { customer_reference_id: 'abcd1234' },
  currencyCode: 'USD',
  collectionMode: 'automatic',
  discountId: 'dsc_01gv5kpg05xp104ek2fmgjwttf',
  billingDetails: {
    enableCheckout: true,
    purchaseOrderNumber: 'NO_VALUE',
    additionalInformation: 'NO_VALUE',
    paymentTerms: { interval: 'day', frequency: 10 },
  },
  billingPeriod: { startsAt: '2024-10-12T07:20:50.52Z', endsAt: '2024-10-12T07:20:50.52Z' },
  items: [
    {
      quantity: 10,
      priceId: 'pri_01gsz8z1q1n00f12qt82y31smh',
    },
  ],
  checkout: { url: 'NO_VALUE' },
};

export const CreateTransactionExpectation = {
  status: 'draft',
  customer_id: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  address_id: 'add_01gm302t81w94gyjpjpqypkzkf',
  business_id: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  custom_data: { customer_reference_id: 'abcd1234' },
  currency_code: 'USD',
  collection_mode: 'automatic',
  discount_id: 'dsc_01gv5kpg05xp104ek2fmgjwttf',
  billing_details: {
    enable_checkout: true,
    purchase_order_number: 'NO_VALUE',
    additional_information: 'NO_VALUE',
    payment_terms: { interval: 'day', frequency: 10 },
  },
  billing_period: { starts_at: '2024-10-12T07:20:50.52Z', ends_at: '2024-10-12T07:20:50.52Z' },
  items: [
    {
      quantity: 10,
      price_id: 'pri_01gsz8z1q1n00f12qt82y31smh',
    },
  ],
  checkout: { url: 'NO_VALUE' },
};

export const UpdateTransactionExpectation = {
  status: 'draft',
  customer_id: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  address_id: 'add_01gm302t81w94gyjpjpqypkzkf',
  business_id: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  custom_data: { customer_reference_id: 'abcd1234' },
  currency_code: 'USD',
  collection_mode: 'automatic',
  discount_id: 'dsc_01gv5kpg05xp104ek2fmgjwttf',
  billing_details: {
    enable_checkout: true,
    purchase_order_number: 'NO_VALUE',
    additional_information: 'NO_VALUE',
    payment_terms: { interval: 'day', frequency: 10 },
  },
  billing_period: { starts_at: '2024-10-12T07:20:50.52Z', ends_at: '2024-10-12T07:20:50.52Z' },
  items: [
    {
      quantity: 10,
      price_id: 'pri_01gsz8z1q1n00f12qt82y31smh',
    },
  ],
  checkout: { url: 'NO_VALUE' },
};

export const PreviewTransactionMock: TransactionPreviewRequestBody = {
  currencyCode: 'USD',
  items: [
    {
      includeInTotals: true,
      priceId: 'pri_1234',
      quantity: 10,
    },
  ],
};

export const TransactionMock: ITransactionResponse = {
  id: 'txn_01h04vsbhqc62t8hmd4z3b578c',
  status: 'draft',
  customer_id: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  address_id: 'add_01gm302t81w94gyjpjpqypkzkf',
  business_id: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  custom_data: { customer_reference_id: 'abcd1234' },
  currency_code: 'USD',
  origin: 'api',
  subscription_id: 'sub_01h04vsc0qhwtsbsxh3422wjs4',
  invoice_id: 'inv_01ghbk4xjn4qdsmstcwzgcgg35',
  invoice_number: '123-45678',
  collection_mode: 'automatic',
  discount_id: 'dsc_01gv5kpg05xp104ek2fmgjwttf',
  billing_details: {
    enable_checkout: true,
    purchase_order_number: 'NO_VALUE',
    additional_information: 'NO_VALUE',
    payment_terms: { interval: 'day', frequency: 10 },
  },
  billing_period: { starts_at: '2024-10-12T07:20:50.52Z', ends_at: '2024-10-12T07:20:50.52Z' },
  items: [
    {
      price_id: 'pri_01gsz8z1q1n00f12qt82y31smh',
      quantity: 10,
    },
  ],
  details: {
    tax_rates_used: [
      {
        tax_rate: '0.2',
        totals: {
          subtotal: '15000',
          discount: '0',
          tax: '1500',
          total: '16500',
        },
      },
    ],
    totals: {
      subtotal: '15000',
      discount: '0',
      tax: '1500',
      total: '16500',
      balance: '',
      credit: '',
      credit_to_balance: '',
      currency_code: 'USD',
      grand_total: '',
    },
    adjusted_totals: {
      subtotal: '15000',
      tax: '1500',
      total: '16500',
      currency_code: 'USD',
      grand_total: '',
    },
    payout_totals: {
      subtotal: '15000',
      discount: '0',
      tax: '1500',
      total: '16500',
      balance: '',
      credit: '',
      credit_to_balance: '',
      currency_code: 'USD',
      grand_total: '',
      fee: '',
      earnings: '',
    },
    adjusted_payout_totals: {
      subtotal: '15000',
      tax: '1500',
      total: '16500',
      fee: '825',
      chargeback_fee: { amount: '1680', original: { amount: '1500', currency_code: 'USD' } },
      earnings: '15675',
      currency_code: 'AUD',
    },
    line_items: [
      {
        id: 'txnitm_01gm302t81w94gyjpjpqypkzkf',
        price_id: 'pri_01gsz8z1q1n00f12qt82y31smh',
        quantity: 10,
        tax_rate: '0.2',
        unit_totals: {
          subtotal: '15000',
          discount: '0',
          tax: '1500',
          total: '16500',
        },
        totals: {
          subtotal: '15000',
          discount: '0',
          tax: '1500',
          total: '16500',
        },
        product: {
          id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
          name: 'Ezekiel',
          description: 'spargo crux videlicet fugit tyrannus curatio coma stillicidium esse bardus',
          type: 'custom',
          tax_category: 'digital-goods',
          image_url: 'https://loremflickr.com/640/480?lock=7909378724200448',
          custom_data: { customer_reference_id: 'abcd1234' },
          status: 'active',
          created_at: '2024-10-12T07:20:50.52Z',
          import_meta: { external_id: '9b95b0b8-e10f-441a-862e-1936a6d818ab', imported_from: 'billing_platform' },
        },
      },
    ],
  },
  payments: [
    {
      payment_attempt_id: '497f776b-851d-4ebf-89ab-8ba0f75d2d6a',
      payment_method_id: 'paymtd_01gxwxw8xgmqqzs4vecthdb50f',
      stored_payment_method_id: '7636e781-3969-49f4-9c77-8226232e28a6',
      amount: '1050',
      status: 'authorized',
      error_code: 'already_canceled',
      method_details: {
        type: 'card',
        card: {
          cardholder_name: '',
          expiry_month: 0,
          expiry_year: 0,
          last4: '',
          type: 'american_express',
        },
      },
      created_at: '2024-10-12T07:20:50.52Z',
      captured_at: '2024-10-12T07:20:50.52Z',
    },
  ],
  checkout: { url: 'NO_VALUE' },
  created_at: '2024-10-12T07:20:50.52Z',
  updated_at: '2024-10-13T07:20:50.52Z',
  billed_at: '2024-10-12T07:20:50.52Z',
  adjustments: [
    {
      action: 'credit',
      created_at: '2024-10-12T07:20:50.52Z',
      credit_applied_to_balance: true,
      currency_code: 'USD',
      customer_id: 'ctm_1234',
      id: 'adj_1234',
      items: [
        {
          amount: '1000',
          id: 'adj_1234',
          item_id: '1234',
          proration: {
            billing_period: {
              starts_at: '2024-10-12T07:20:50.52Z',
              ends_at: '2024-11-12T07:20:50.52Z',
            },
            rate: '10',
          },
          totals: {
            subtotal: '100',
            total: '150',
            tax: '50',
          },
          type: 'full',
        },
      ],
      payout_totals: {
        total: '1000',
        tax: '1000',
        currency_code: 'USD',
        fee: '1000',
        earnings: '1000',
        subtotal: '1000',
      },
      reason: 'Refund',
      status: 'approved',
      subscription_id: 'sub_1234',
      totals: {
        total: '1000',
        tax: '1000',
        currency_code: 'USD',
        fee: '1000',
        earnings: '1000',
        subtotal: '1000',
      },
      updated_at: '2024-10-12T07:20:50.52Z',
      transaction_id: 'txn_1234',
    },
  ],
  adjustments_totals: {
    breakdown: {
      chargeback: '100',
      credit: '100',
      refund: '200',
    },
    currency_code: 'USD',
    earnings: '100',
    fee: '10',
    subtotal: '90',
    tax: '10',
    total: '110',
  },
};

export const TransactionPreviewMock: ITransactionPreviewResponse = {
  customer_id: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  address_id: 'add_01gm302t81w94gyjpjpqypkzkf',
  business_id: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  currency_code: 'USD',
  discount_id: 'dsc_01gv5kpg05xp104ek2fmgjwttf',
  items: [
    {
      quantity: 10,
      proration: {
        billing_period: {
          starts_at: '2024-10-12T07:20:50.52Z',
          ends_at: '2024-10-12T07:20:50.52Z',
        },
        rate: '10',
      },
    },
  ],
  details: {
    tax_rates_used: [
      {
        tax_rate: '0.2',
        totals: {
          subtotal: '15000',
          discount: '0',
          tax: '1500',
          total: '16500',
        },
      },
    ],
    totals: {
      subtotal: '15000',
      discount: '0',
      tax: '1500',
      total: '16500',
      balance: '',
      credit: '',
      credit_to_balance: '',
      currency_code: 'USD',
      grand_total: '',
    },
    line_items: [
      {
        price_id: 'pri_01gsz8z1q1n00f12qt82y31smh',
        quantity: 10,
        tax_rate: '0.2',
        unit_totals: {
          subtotal: '15000',
          discount: '0',
          tax: '1500',
          total: '16500',
        },
        totals: {
          subtotal: '15000',
          discount: '0',
          tax: '1500',
          total: '16500',
        },
        product: {
          id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
          name: 'Ezekiel',
          description: 'spargo crux videlicet fugit tyrannus curatio coma stillicidium esse bardus',
          type: 'custom',
          tax_category: 'digital-goods',
          image_url: 'https://loremflickr.com/640/480?lock=7909378724200448',
          custom_data: { customer_reference_id: 'abcd1234' },
          status: 'active',
          created_at: '2024-10-12T07:20:50.52Z',
          import_meta: { external_id: '9b95b0b8-e10f-441a-862e-1936a6d818ab', imported_from: 'billing_platform' },
        },
      },
    ],
  },
};

export const TransactionMockResponse: Response<ITransactionResponse> = {
  data: TransactionMock,
  meta: {
    request_id: '',
  },
};

export const ListTransactionMockResponse: ResponsePaginated<ITransactionResponse> = {
  data: [TransactionMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/transactions?after=1',
      per_page: 10,
    },
  },
};

export const TransactionPreviewMockResponse: Response<ITransactionPreviewResponse> = {
  data: TransactionPreviewMock,
  meta: {
    request_id: '',
  },
};
