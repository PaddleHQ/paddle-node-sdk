/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IChargebackFee } from './chargeback-fee.js';
import { type PayoutCurrencyCode } from '../../enums/index.js';

export interface ITransactionPayoutTotalsAdjustedResponse {
  subtotal: string;
  tax: string;
  total: string;
  fee: string;
  chargeback_fee?: IChargebackFee | null;
  earnings: string;
  currency_code: PayoutCurrencyCode;
  exchange_rate: string;
}
