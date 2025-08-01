/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { CreateDiscountRequestBody, UpdateDiscountRequestBody } from '../../../resources/index.js';
import { IDiscountResponse } from '../../../types/index.js';
import { Response, ResponsePaginated } from '../../../internal/index.js';

export const CreateDiscountMock: CreateDiscountRequestBody = {
  amount: '1000',
  description: 'conspergo nesciunt vilis cumque crastinus capillus tenax venio tepidus natus',
  type: 'flat',
};

export const UpdateDiscountMock: UpdateDiscountRequestBody = {
  status: 'active',
  description: 'cogito abbas ter provident argumentum compello nihil et absorbeo valde',
  enabledForCheckout: true,
  code: 'ABCDEF',
  type: 'flat',
  amount: '1000',
  currencyCode: 'USD',
  recur: true,
  maximumRecurringIntervals: 10,
  usageLimit: 10,
  restrictTo: [],
  expiresAt: '2024-10-12T07:20:50.52Z',
  customData: { customer_reference_id: 'abcd1234' },
};

export const CreateDiscountExpectation = {
  amount: '1000',
  description: 'conspergo nesciunt vilis cumque crastinus capillus tenax venio tepidus natus',
  type: 'flat',
};

export const UpdateDiscountExpectation = {
  status: 'active',
  description: 'cogito abbas ter provident argumentum compello nihil et absorbeo valde',
  enabled_for_checkout: true,
  code: 'ABCDEF',
  type: 'flat',
  amount: '1000',
  currency_code: 'USD',
  recur: true,
  maximum_recurring_intervals: 10,
  usage_limit: 10,
  restrict_to: [],
  expires_at: '2024-10-12T07:20:50.52Z',
  custom_data: { customer_reference_id: 'abcd1234' },
};

export const DiscountMock: IDiscountResponse = {
  id: 'dsc_01gv5kpg05xp104ek2fmgjwttf',
  status: 'active',
  description: 'sui consuasor deludo ver tendo qui deleo accendo censura vetus',
  enabled_for_checkout: true,
  code: 'ABCDEF',
  type: 'flat',
  amount: '1000',
  currency_code: 'USD',
  recur: true,
  maximum_recurring_intervals: 10,
  usage_limit: 10,
  restrict_to: [],
  expires_at: '2024-10-12T07:20:50.52Z',
  custom_data: { customer_reference_id: 'abcd1234' },
  times_used: 10,
  created_at: '2024-10-12T07:20:50.52Z',
  updated_at: '2024-10-13T07:20:50.52Z',
  import_meta: { external_id: '9b95b0b8-e10f-441a-862e-1936a6d818ab', imported_from: 'billing_platform' },
  discount_group: null,
  discount_group_id: null,
  mode: 'standard',
};

export const DiscountMockResponse: Response<IDiscountResponse> = {
  data: DiscountMock,
  meta: {
    request_id: '',
  },
};

export const ListDiscountMockResponse: ResponsePaginated<IDiscountResponse> = {
  data: [DiscountMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/discounts?after=1',
      per_page: 10,
    },
  },
};
