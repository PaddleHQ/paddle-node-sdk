/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ITransactionPayoutTotalsNotificationResponse } from '../../types';
import { type PayoutCurrencyCode } from '../../../enums';

export class TransactionPayoutTotalsNotification {
  public readonly subtotal: string;
  public readonly discount: string;
  public readonly tax: string;
  public readonly total: string;
  public readonly credit: string;
  public readonly creditToBalance: string;
  public readonly balance: string;
  public readonly grandTotal: string;
  public readonly fee: string;
  public readonly earnings: string;
  public readonly currencyCode: PayoutCurrencyCode;

  constructor(transactionPayoutTotals: ITransactionPayoutTotalsNotificationResponse) {
    this.subtotal = transactionPayoutTotals.subtotal;
    this.discount = transactionPayoutTotals.discount;
    this.tax = transactionPayoutTotals.tax;
    this.total = transactionPayoutTotals.total;
    this.credit = transactionPayoutTotals.credit;
    this.creditToBalance = transactionPayoutTotals.credit_to_balance;
    this.balance = transactionPayoutTotals.balance;
    this.grandTotal = transactionPayoutTotals.grand_total;
    this.fee = transactionPayoutTotals.fee;
    this.earnings = transactionPayoutTotals.earnings;
    this.currencyCode = transactionPayoutTotals.currency_code;
  }
}
