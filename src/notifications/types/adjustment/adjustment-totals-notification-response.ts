/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IAdjustmentTotalsBreakdownNotification } from './adjustment-totals-breakdown-notification.js';
import { type CurrencyCode } from '../../../enums/index.js';

export interface IAdjustmentItemTotalsNotificationResponse {
  subtotal: string;
  tax: string;
  total: string;
  fee: string;
  earnings: string;
  breakdown?: IAdjustmentTotalsBreakdownNotification | null;
  currency_code: CurrencyCode;
}
