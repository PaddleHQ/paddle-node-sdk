/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type AdjustmentAction, type AdjustmentStatus, type CurrencyCode } from '../../../enums/index.js';
import { type IAdjustmentItemNotificationResponse } from './adjustment-item-notification-response.js';
import {
  type IPayoutTotalsAdjustmentNotificationResponse,
  type ITotalAdjustmentsNotificationResponse,
} from '../shared/index.js';

export interface IAdjustmentNotificationResponse {
  id: string;
  action: AdjustmentAction;
  transaction_id: string;
  subscription_id?: string | null;
  customer_id: string;
  reason: string;
  credit_applied_to_balance: boolean;
  currency_code: CurrencyCode;
  status: AdjustmentStatus;
  items: IAdjustmentItemNotificationResponse[];
  totals: ITotalAdjustmentsNotificationResponse;
  payout_totals?: IPayoutTotalsAdjustmentNotificationResponse | null;
  created_at: string;
  updated_at: string;
}
