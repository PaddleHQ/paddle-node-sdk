import type { ICustomData, IMoney, IPriceQuantity, ITimePeriod, IUnitPriceOverride } from '../shared/index.js';
import type { TaxMode } from '../../enums/index.js';
import type { CreateProductRequestBody } from '../../resources/index.js';

interface INonCatalogBasePriceRequestBody {
  name?: string | null;
  description: string;
  unitPrice: IMoney;
  billingCycle?: ITimePeriod | null;
  trialPeriod?: ITimePeriod | null;
  taxMode?: TaxMode;
  unitPriceOverrides?: IUnitPriceOverride[];
  quantity?: IPriceQuantity;
  customData?: ICustomData | null;
}

interface INonCatalogBasePriceRequestBodyWithProductId extends INonCatalogBasePriceRequestBody {
  productId: string;
  product?: never;
}

interface INonCatalogBasePriceRequestBodyWithProduct extends INonCatalogBasePriceRequestBody {
  productId?: never;
  product: Omit<CreateProductRequestBody, 'type'>;
}

export type INonCatalogPriceRequestBody =
  | INonCatalogBasePriceRequestBodyWithProductId
  | INonCatalogBasePriceRequestBodyWithProduct;
