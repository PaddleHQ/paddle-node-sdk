/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ITimePeriodNotification } from '../index';

export interface IBillingDetailsNotificationResponse {
  enable_checkout?: boolean | null;
  purchase_order_number?: string | null;
  additional_information?: string | null;
  payment_terms: ITimePeriodNotification;
}