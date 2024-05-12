/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import {
  type ICustomData,
  type IImportMetaResponse,
  type IMoneyResponse,
  type IPriceQuantity,
  type IProductResponse,
  type ITimePeriod,
  type IUnitPriceOverrideResponse,
} from '../index.js';
import { type CatalogType, type Status, type TaxMode } from '../../enums/index.js';

export interface IPriceResponse {
  id: string;
  product_id: string;
  description: string;
  type: CatalogType;
  name?: string | null;
  billing_cycle?: ITimePeriod | null;
  trial_period?: ITimePeriod | null;
  tax_mode: TaxMode;
  unit_price: IMoneyResponse;
  unit_price_overrides: IUnitPriceOverrideResponse[] | null;
  quantity: IPriceQuantity;
  status: Status;
  created_at: string;
  updated_at: string;
  custom_data?: ICustomData | null;
  import_meta?: IImportMetaResponse | null;
  product?: IProductResponse | null;
}
