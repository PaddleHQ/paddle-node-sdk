// Invoice paid is a legacy/unsupported event which is implicitly handled through GenericEvent

import { IEventsResponse } from '../../../types/index.js';

export const InvoicePaidMock: IEventsResponse<object> = {
  event_id: 'evt_01jdw4vq5a26w8mpfc59mez047',
  event_type: 'invoice.paid',
  occurred_at: '2024-11-29T14:23:08.971054Z',
  notification_id: 'ntf_01h90nmerv7vrn93f97j5v72p7',
  data: {
    id: 'inv_01jdw4vk9fr1n6smpbhykm6ha9',
    items: [
      {
        price: {
          product_id: 'pro_01gv5dvjjx0nmydxa2pb9trdcq',
          unit_price: {
            amount: '1000',
            currency_code: 'GBP',
          },
        },
        quantity: 1,
      },
    ],
    due_at: '2024-11-30T14:23:07.865592Z',
    status: 'paid',
    details: {
      totals: {
        tax: '167',
        total: '1000',
        subtotal: '833',
      },
      line_items: [
        {
          totals: {
            tax: '0',
            total: '1000',
            subtotal: '1000',
          },
          product: {
            id: 'pro_01gv5dvjjx0nmydxa2pb9trdcq',
            name: 'AT Test Product',
            status: 'active',
            image_url: null,
            description: 'Exmaple',
            tax_category: 'standard',
          },
          quantity: 1,
          tax_rate: '0',
          unit_totals: {
            tax: '0',
            total: '1000',
            subtotal: '1000',
          },
        },
      ],
    },
    paid_at: '2024-11-29T14:23:05.561011761Z',
    checkout: null,
    issued_at: '2024-11-29T14:23:07.865592Z',
    address_id: 'add_01jaav7fx9ew7w6293cxjdkrp7',
    created_at: '2024-11-29T14:23:05.007735Z',
    updated_at: '2024-11-29T14:23:05.007735Z',
    business_id: 'biz_01jaav8zw7anv2egarn5vz7xhr',
    custom_data: [],
    customer_id: 'ctm_01gv5gb258na82skxd7ng7ha3r',
    currency_code: 'GBP',
    billing_period: {
      type: 'billing',
      ends_at: '2024-11-30',
      starts_at: '2024-11-29',
    },
    invoice_number: '296-844420',
    transaction_id: 'txn_01jdw4vgdq62e0b6x8dqsm4ycn',
    billing_details: {
      payment_terms: {
        interval: 'day',
        frequency: 1,
      },
      enable_checkout: true,
      purchase_order_number: null,
      additional_information: null,
    },
  },
};

export const InvoicePaidMockExpectation = {
  data: {
    addressId: 'add_01jaav7fx9ew7w6293cxjdkrp7',
    billingDetails: {
      additionalInformation: null,
      enableCheckout: true,
      paymentTerms: {
        frequency: 1,
        interval: 'day',
      },
      purchaseOrderNumber: null,
    },
    billingPeriod: {
      endsAt: '2024-11-30',
      startsAt: '2024-11-29',
      type: 'billing',
    },
    businessId: 'biz_01jaav8zw7anv2egarn5vz7xhr',
    checkout: null,
    createdAt: '2024-11-29T14:23:05.007735Z',
    currencyCode: 'GBP',
    customData: [],
    customerId: 'ctm_01gv5gb258na82skxd7ng7ha3r',
    details: {
      lineItems: [
        {
          product: {
            description: 'Exmaple',
            id: 'pro_01gv5dvjjx0nmydxa2pb9trdcq',
            imageUrl: null,
            name: 'AT Test Product',
            status: 'active',
            taxCategory: 'standard',
          },
          quantity: 1,
          taxRate: '0',
          totals: {
            subtotal: '1000',
            tax: '0',
            total: '1000',
          },
          unitTotals: {
            subtotal: '1000',
            tax: '0',
            total: '1000',
          },
        },
      ],
      totals: {
        subtotal: '833',
        tax: '167',
        total: '1000',
      },
    },
    dueAt: '2024-11-30T14:23:07.865592Z',
    id: 'inv_01jdw4vk9fr1n6smpbhykm6ha9',
    invoiceNumber: '296-844420',
    issuedAt: '2024-11-29T14:23:07.865592Z',
    items: [
      {
        price: {
          productId: 'pro_01gv5dvjjx0nmydxa2pb9trdcq',
          unitPrice: {
            amount: '1000',
            currencyCode: 'GBP',
          },
        },
        quantity: 1,
      },
    ],
    paidAt: '2024-11-29T14:23:05.561011761Z',
    status: 'paid',
    transactionId: 'txn_01jdw4vgdq62e0b6x8dqsm4ycn',
    updatedAt: '2024-11-29T14:23:05.007735Z',
  },
  eventId: 'evt_01jdw4vq5a26w8mpfc59mez047',
  eventType: 'invoice.paid',
  notificationId: 'ntf_01h90nmerv7vrn93f97j5v72p7',
  occurredAt: '2024-11-29T14:23:08.971054Z',
};
