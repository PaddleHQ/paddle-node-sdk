/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { IEventsResponse, IPayoutResponse } from '../../../types/index.js';

export const PayoutPaidMock: IEventsResponse<IPayoutResponse> = {
  event_id: 'evt_01h2b0tqg1xkgnkfmprsnrjn0s',
  event_type: 'payout.paid',
  occurred_at: '2023-06-07T13:30:38.138984Z',
  notification_id: 'ntf_01h2b0tqkhfqd094y9pys30xyw',
  data: { id: 'pay_01gsz4vmqbjk3x4vvtafffd540', status: 'paid', amount: '10000', currency_code: 'USD' },
};

export const PayoutPaidMockExpectation = {
  data: {
    amount: '10000',
    currencyCode: 'USD',
    id: 'pay_01gsz4vmqbjk3x4vvtafffd540',
    status: 'paid',
  },
  eventId: 'evt_01h2b0tqg1xkgnkfmprsnrjn0s',
  eventType: 'payout.paid',
  notificationId: 'ntf_01h2b0tqkhfqd094y9pys30xyw',
  occurredAt: '2023-06-07T13:30:38.138984Z',
};
