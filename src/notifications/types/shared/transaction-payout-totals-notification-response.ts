/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type PayoutCurrencyCode } from '../../../enums/index.js';

export interface ITransactionPayoutTotalsNotificationResponse {
  subtotal: string;
  discount: string;
  tax: string;
  total: string;
  credit: string;
  balance: string;
  grand_total: string;
  credit_to_balance: string;
  fee: string;
  earnings: string;
  currency_code: PayoutCurrencyCode;
}
