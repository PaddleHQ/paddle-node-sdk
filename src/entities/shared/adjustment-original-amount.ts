/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type AdjustmentCurrencyCode } from '../../enums/index.js';
import { type IAdjustmentOriginalAmountResponse } from '../../types/index.js';

export class AdjustmentOriginalAmount {
  public readonly amount: string;
  public readonly currencyCode: AdjustmentCurrencyCode;

  constructor(originalAmount: IAdjustmentOriginalAmountResponse) {
    this.amount = originalAmount.amount;
    this.currencyCode = originalAmount.currency_code;
  }
}
