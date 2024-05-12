/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { IPriceNotificationResponse } from '../../../notifications/index.js';
import { IEventsResponse } from '../../../types/index.js';

export const PriceUpdatedMock: IEventsResponse<IPriceNotificationResponse> = {
  event_id: 'evt_01h83wg1aqxmf897qqb47tre5s',
  event_type: 'price.updated',
  occurred_at: '2023-08-18T08:34:23.703674Z',
  notification_id: 'ntf_01h83wg1d7rhxjk2m811bk9ky8',
  data: {
    id: 'pri_01h7zdqstxe6djaefkqbkjy4k2',
    status: 'active',
    type: 'standard',
    quantity: { maximum: 999, minimum: 1 },
    tax_mode: 'account_setting',
    product_id: 'pro_01h7zcgmdc6tmwtjehp3sh7azf',
    unit_price: { amount: '5000', currency_code: 'USD' },
    custom_data: null,
    description: 'Annual (per seat)',
    name: 'Annual (per seat)',
    trial_period: { interval: 'day', frequency: 30 },
    billing_cycle: { interval: 'year', frequency: 1 },
    unit_price_overrides: [],
    import_meta: null,
  },
};

export const PriceUpdatedMockExpectation = {
  data: {
    billingCycle: {
      frequency: 1,
      interval: 'year',
    },
    customData: null,
    description: 'Annual (per seat)',
    id: 'pri_01h7zdqstxe6djaefkqbkjy4k2',
    importMeta: null,
    name: 'Annual (per seat)',
    productId: 'pro_01h7zcgmdc6tmwtjehp3sh7azf',
    quantity: {
      maximum: 999,
      minimum: 1,
    },
    status: 'active',
    createdAt: null,
    updatedAt: null,
    taxMode: 'account_setting',
    trialPeriod: {
      frequency: 30,
      interval: 'day',
    },
    type: 'standard',
    unitPrice: {
      amount: '5000',
      currencyCode: 'USD',
    },
    unitPriceOverrides: [],
  },
  eventId: 'evt_01h83wg1aqxmf897qqb47tre5s',
  eventType: 'price.updated',
  notificationId: 'ntf_01h83wg1d7rhxjk2m811bk9ky8',
  occurredAt: '2023-08-18T08:34:23.703674Z',
};
