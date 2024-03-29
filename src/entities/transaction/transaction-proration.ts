/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ITransactionProrationResponse } from '../../types';
import { TransactionsTimePeriod } from '../index';

export class TransactionProration {
  public readonly rate: string;
  public readonly billingPeriod: TransactionsTimePeriod | null;

  constructor(transactionProration: ITransactionProrationResponse) {
    this.rate = transactionProration.rate;
    this.billingPeriod = transactionProration.billing_period
      ? new TransactionsTimePeriod(transactionProration.billing_period)
      : null;
  }
}
