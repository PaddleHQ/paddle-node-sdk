/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type CurrencyCode } from '../../enums/index.js';
import { type ITotalAdjustmentsResponse } from '../../types/index.js';

export class TotalAdjustments {
  public readonly subtotal: string;
  public readonly tax: string;
  public readonly total: string;
  public readonly fee: string;
  public readonly earnings: string;
  public readonly currencyCode: CurrencyCode;

  constructor(totalAdjustments: ITotalAdjustmentsResponse) {
    this.subtotal = totalAdjustments.subtotal;
    this.tax = totalAdjustments.tax;
    this.total = totalAdjustments.total;
    this.fee = totalAdjustments.fee;
    this.earnings = totalAdjustments.earnings;
    this.currencyCode = totalAdjustments.currency_code;
  }
}
