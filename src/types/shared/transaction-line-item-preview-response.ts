/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IUnitTotals } from './unit-totals.js';
import { type ITotals } from './totals.js';
import { type IProductResponse } from '../product/index.js';
import { type IProrationResponse } from '../index.js';

export interface ITransactionLineItemPreviewResponse {
  price_id: string;
  quantity: number;
  tax_rate: string;
  unit_totals: IUnitTotals;
  totals: ITotals;
  product: IProductResponse;
  proration?: IProrationResponse | null;
}
