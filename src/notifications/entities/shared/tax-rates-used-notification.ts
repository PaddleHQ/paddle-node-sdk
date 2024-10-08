/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { TotalsNotification } from './totals-notification.js';
import { type ITaxRatesUsedNotificationResponse } from '../../types/index.js';

export class TaxRatesUsedNotification {
  public readonly taxRate: string;
  public readonly totals: TotalsNotification | null;

  constructor(taxRatesUsed: ITaxRatesUsedNotificationResponse) {
    this.taxRate = taxRatesUsed.tax_rate;
    this.totals = taxRatesUsed.totals ? new TotalsNotification(taxRatesUsed.totals) : null;
  }
}
