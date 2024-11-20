/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { IPaymentMethodResponse } from '../../../types/index.js';
import { Response, ResponsePaginated } from '../../../internal/index.js';

export const PaymentMethodMock: IPaymentMethodResponse = {
  id: 'paymtd_123',
  customer_id: 'ctm_123',
  address_id: 'add_123',
  type: 'card',
  card: {
    type: 'visa',
    last4: '1234',
    expiry_month: 1,
    expiry_year: 2025,

    cardholder_name: 'Sam Miller',
  },
  paypal: null,
  origin: 'saved_during_purchase',
  saved_at: '2024-05-03T11:50:23.422Z',
  updated_at: '2024-05-03T11:50:23.422Z',
};

export const PaymentMethodMockResponse: Response<IPaymentMethodResponse> = {
  data: PaymentMethodMock,
  meta: {
    request_id: '',
  },
};

export const ListPaymentMethodMockResponse: ResponsePaginated<IPaymentMethodResponse> = {
  data: [PaymentMethodMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/customers/ctm_123/payment-methods?after=1',
      per_page: 10,
    },
  },
};
