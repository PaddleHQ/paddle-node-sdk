/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import {
  type ITaxRatesUsedResponse,
  type ITransactionTotalsResponse,
  type ITransactionLineItemPreviewResponse,
} from '../index';

export interface ITransactionDetailsPreviewResponse {
  tax_rates_used: ITaxRatesUsedResponse[];
  totals: ITransactionTotalsResponse;
  line_items: ITransactionLineItemPreviewResponse[];
}
