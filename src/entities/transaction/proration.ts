/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { TransactionsTimePeriod } from './transactions-time-period.js';
import { type IProrationResponse } from '../../types/index.js';

export class Proration {
  public readonly rate: string;
  public readonly billingPeriod: TransactionsTimePeriod;

  constructor(prorationResponse: IProrationResponse) {
    this.rate = prorationResponse.rate;
    this.billingPeriod = new TransactionsTimePeriod(prorationResponse.billing_period);
  }
}
