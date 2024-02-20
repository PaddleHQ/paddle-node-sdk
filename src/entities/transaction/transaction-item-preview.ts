/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Price, Proration } from '../index';
import { type ITransactionItemPreviewResponse } from '../../types';

export class TransactionItemPreview {
  public readonly price: Price | null;
  public readonly quantity: number;
  public readonly includeInTotals: boolean | null;
  public readonly proration: Proration | null;

  constructor(transactionItem: ITransactionItemPreviewResponse) {
    this.price = transactionItem.price ? new Price(transactionItem.price) : null;
    this.quantity = transactionItem.quantity;
    this.includeInTotals = transactionItem.include_in_totals ?? null;
    this.proration = transactionItem.proration ? new Proration(transactionItem.proration) : null;
  }
}
