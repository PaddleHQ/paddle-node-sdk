/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type CatalogType, type Status, type TaxCategory } from '../../../enums/index.js';
import { type CustomData } from '../../../entities/index.js';
import { ImportMetaNotification } from '../shared/index.js';
import { type ISharedProductNotificationResponse } from '../../types/index.js';

export class ProductNotification {
  public readonly id: string;
  public readonly name: string;
  public readonly type: CatalogType | null;
  public readonly description: string | null;
  public readonly taxCategory: TaxCategory;
  public readonly imageUrl: string | null;
  public readonly customData: CustomData | null;
  public readonly status: Status;
  public readonly createdAt: string;
  public readonly updatedAt: string | null;
  public readonly importMeta: ImportMetaNotification | null;

  constructor(product: ISharedProductNotificationResponse) {
    this.id = product.id;
    this.name = product.name;
    this.type = product.type ?? null;
    this.description = product.description ? product.description : null;
    this.taxCategory = product.tax_category;
    this.imageUrl = product.image_url ? product.image_url : null;
    this.customData = product.custom_data ? product.custom_data : null;
    this.status = product.status;
    this.createdAt = product.created_at;
    this.updatedAt = product.updated_at ?? null;
    this.importMeta = product.import_meta ? new ImportMetaNotification(product.import_meta) : null;
  }
}
