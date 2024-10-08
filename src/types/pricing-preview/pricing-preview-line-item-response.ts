/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IPriceResponse } from '../price/index.js';
import { type ITotals, type IUnitTotals } from '../shared/index.js';
import { type IProductResponse } from '../product/index.js';
import { type IPricingPreviewDiscountsResponse } from './pricing-preview-discounts-response.js';

export interface IPricingPreviewLineItemResponse {
  price: IPriceResponse;
  quantity: number;
  tax_rate: string;
  unit_totals: IUnitTotals;
  formatted_unit_totals: IUnitTotals;
  totals: ITotals;
  formatted_totals: ITotals;
  product: IProductResponse;
  discounts: IPricingPreviewDiscountsResponse[];
}
