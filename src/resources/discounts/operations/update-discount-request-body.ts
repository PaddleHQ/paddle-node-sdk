/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type CurrencyCode, type DiscountType, type Status } from '../../../enums/index.js';
import { type ICustomData } from '../../../types/index.js';

export interface UpdateDiscountRequestBody {
  status?: Status;
  description?: string;
  enabledForCheckout?: boolean;
  code?: string | null;
  type?: DiscountType;
  amount?: string;
  currencyCode?: CurrencyCode | null;
  recur?: boolean;
  maximumRecurringIntervals?: number | null;
  usageLimit?: number | null;
  restrictTo?: string[] | null;
  expiresAt?: string | null;
  customData?: ICustomData | null;
}
