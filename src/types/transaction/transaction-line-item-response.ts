/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IProductResponse, type ITotals, type ITransactionProrationResponse, type IUnitTotals } from '../index';

export interface ITransactionLineItemResponse {
  id: string;
  price_id: string;
  quantity: number;
  proration?: ITransactionProrationResponse | null;
  tax_rate: string;
  unit_totals?: IUnitTotals | null;
  totals?: ITotals | null;
  product?: IProductResponse | null;
}
