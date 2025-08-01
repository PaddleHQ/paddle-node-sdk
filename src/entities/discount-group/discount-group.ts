/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IDiscountGroupResponse } from '../../types/index.js';
import { Status } from '../../enums/index.js';
import { ImportMeta } from '../index.js';

export class DiscountGroup {
  public readonly id: string;
  public readonly name: string;
  public readonly status: Status;
  public readonly createdAt: string;
  public readonly updatedAt: string;
  public readonly importMeta: ImportMeta | null;

  constructor(discountGroupResponse: IDiscountGroupResponse) {
    this.id = discountGroupResponse.id;
    this.name = discountGroupResponse.name;
    this.status = discountGroupResponse.status;
    this.createdAt = discountGroupResponse.created_at;
    this.updatedAt = discountGroupResponse.updated_at;
    this.importMeta = discountGroupResponse.import_meta ? new ImportMeta(discountGroupResponse.import_meta) : null;
  }
}
