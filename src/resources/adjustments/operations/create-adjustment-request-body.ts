/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type AdjustmentAction, type AdjustmentType } from '../../../enums/index.js';

export interface CreateAdjustmentLineItem {
  amount: string | null;
  itemId: string;
  type: AdjustmentType;
}

export interface CreateAdjustmentRequestBody {
  action: AdjustmentAction;
  items: CreateAdjustmentLineItem[];
  reason: string;
  transactionId: string;
}
