/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Totals, UnitTotals } from '../shared/index.js';
import { Product } from '../product/index.js';
import { type ITransactionLineItemPreviewResponse } from '../../types/index.js';
import { Proration } from '../transaction/proration.js';

export class TransactionLineItemPreview {
  public readonly priceId: string;
  public readonly quantity: number;
  public readonly taxRate: string;
  public readonly unitTotals: UnitTotals;
  public readonly totals: Totals;
  public readonly product: Product;
  public readonly proration: Proration | null;

  constructor(transactionLineItemPreview: ITransactionLineItemPreviewResponse) {
    this.priceId = transactionLineItemPreview.price_id;
    this.quantity = transactionLineItemPreview.quantity;
    this.taxRate = transactionLineItemPreview.tax_rate;
    this.unitTotals = new UnitTotals(transactionLineItemPreview.unit_totals);
    this.totals = new Totals(transactionLineItemPreview.totals);
    this.product = new Product(transactionLineItemPreview.product);
    this.proration = transactionLineItemPreview.proration ? new Proration(transactionLineItemPreview.proration) : null;
  }
}
