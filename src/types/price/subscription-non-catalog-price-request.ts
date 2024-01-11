import type { TaxMode } from '../../enums';
import type { ICustomData, IMoney, IPriceQuantity, IUnitPriceOverride } from '../shared';
import { type CreateProductRequestBody } from '../../resources';

interface INonCatalogBasePriceRequest {
  name?: string | null;
  description: string;
  unitPrice: IMoney;
  taxMode?: TaxMode;
  unitPriceOverrides?: IUnitPriceOverride[];
  quantity?: IPriceQuantity;
  customData?: ICustomData | null;
}

interface INonCatalogPriceRequestWithProductId extends INonCatalogBasePriceRequest {
  productId: string;
  product?: never;
}

interface INonCatalogPriceRequestWithProduct extends INonCatalogBasePriceRequest {
  productId?: never;
  product: Omit<CreateProductRequestBody, 'type'>;
}

export type ISubscriptionNonCatalogPriceRequest =
  | INonCatalogPriceRequestWithProductId
  | INonCatalogPriceRequestWithProduct;
