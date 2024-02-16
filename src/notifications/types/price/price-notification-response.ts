/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import {
  type ITimePeriodNotification,
  type IMoneyNotificationResponse,
  type IUnitPriceOverrideNotificationResponse,
  type IPriceQuantityNotification,
  type ISharedProductNotificationResponse,
  type IImportMetaNotificationResponse,
} from '../index';
import { type TaxMode, type Status, type CatalogType } from '../../../enums';
import { type ICustomData } from '../../../types';

export interface IPriceNotificationResponse {
  id: string;
  product_id: string;
  description: string;
  type?: CatalogType | null;
  name?: string | null;
  billing_cycle?: ITimePeriodNotification | null;
  trial_period?: ITimePeriodNotification | null;
  tax_mode: TaxMode;
  unit_price: IMoneyNotificationResponse;
  unit_price_overrides: IUnitPriceOverrideNotificationResponse[];
  quantity: IPriceQuantityNotification;
  status: Status;
  custom_data?: ICustomData | null;
  import_meta?: IImportMetaNotificationResponse | null;
  product?: ISharedProductNotificationResponse | null;
}
