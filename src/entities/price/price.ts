/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ICustomData, type IPriceResponse } from '../../types';
import { ImportMeta, Money, PriceQuantity, Product, TimePeriod, UnitPriceOverride } from '../index';
import { type CatalogType, type Status, type TaxMode } from '../../enums';

export class Price {
  public readonly id: string;
  public readonly productId: string;
  public readonly description: string;
  public readonly name: string | null;
  public readonly type: CatalogType;
  public readonly billingCycle: TimePeriod | null;
  public readonly trialPeriod: TimePeriod | null;
  public readonly taxMode: TaxMode;
  public readonly unitPrice: Money;
  public readonly unitPriceOverrides: UnitPriceOverride[];
  public readonly quantity: PriceQuantity;
  public readonly status: Status;
  public readonly customData: ICustomData | null;
  public readonly importMeta: ImportMeta | null;
  public readonly product: Product | null;

  constructor(price: IPriceResponse) {
    this.id = price.id;
    this.productId = price.product_id;
    this.description = price.description;
    this.type = price.type;
    this.name = price.name ? price.name : null;
    this.billingCycle = price.billing_cycle ? new TimePeriod(price.billing_cycle) : null;
    this.trialPeriod = price.trial_period ? new TimePeriod(price.trial_period) : null;
    this.taxMode = price.tax_mode;
    this.unitPrice = new Money(price.unit_price);
    this.unitPriceOverrides = price.unit_price_overrides.map(
      (unit_price_override) => new UnitPriceOverride(unit_price_override),
    );
    this.quantity = new PriceQuantity(price.quantity);
    this.status = price.status;
    this.customData = price.custom_data ? price.custom_data : null;
    this.importMeta = price.import_meta ? new ImportMeta(price.import_meta) : null;
    this.product = price.product ? new Product(price.product) : null;
  }
}
