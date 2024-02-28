/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IPriceNotificationResponse } from '../../types';
import {
  ImportMetaNotification,
  MoneyNotification,
  PriceQuantityNotification,
  TimePeriodNotification,
  UnitPriceOverrideNotification,
} from '../index';
import { type CatalogType, type Status, type TaxMode } from '../../../enums';
import { type ICustomData } from '../../../types';

export class PriceNotification {
  public readonly id: string;
  public readonly productId: string;
  public readonly description: string;
  public readonly name: string | null;
  public readonly type: CatalogType | null;
  public readonly billingCycle: TimePeriodNotification | null;
  public readonly trialPeriod: TimePeriodNotification | null;
  public readonly taxMode: TaxMode;
  public readonly unitPrice: MoneyNotification;
  public readonly unitPriceOverrides: UnitPriceOverrideNotification[];
  public readonly quantity: PriceQuantityNotification;
  public readonly status: Status;
  public readonly createdAt: string | null;
  public readonly updatedAt: string | null;
  public readonly customData: ICustomData | null;
  public readonly importMeta: ImportMetaNotification | null;

  constructor(price: IPriceNotificationResponse) {
    this.id = price.id;
    this.productId = price.product_id;
    this.description = price.description;
    this.type = price.type ? price.type : null;
    this.name = price.name ? price.name : null;
    this.billingCycle = price.billing_cycle ? new TimePeriodNotification(price.billing_cycle) : null;
    this.trialPeriod = price.trial_period ? new TimePeriodNotification(price.trial_period) : null;
    this.taxMode = price.tax_mode;
    this.unitPrice = new MoneyNotification(price.unit_price);
    this.unitPriceOverrides = price.unit_price_overrides.map(
      (unit_price_override) => new UnitPriceOverrideNotification(unit_price_override),
    );
    this.quantity = new PriceQuantityNotification(price.quantity);
    this.status = price.status;
    this.createdAt = price.created_at ?? null;
    this.updatedAt = price.updated_at ?? null;
    this.customData = price.custom_data ? price.custom_data : null;
    this.importMeta = price.import_meta ? new ImportMetaNotification(price.import_meta) : null;
  }
}
