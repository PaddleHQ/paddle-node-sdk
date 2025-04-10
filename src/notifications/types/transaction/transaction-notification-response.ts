/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import {
  type CollectionMode,
  type CurrencyCode,
  type TransactionOrigin,
  type TransactionStatus,
} from '../../../enums/index.js';
import { type ICustomData } from '../../../types/index.js';
import {
  type IBillingDetailsNotificationResponse,
  type ITransactionCheckoutNotification,
  type ITransactionPaymentAttemptNotificationResponse,
} from '../shared/index.js';
import { type ITransactionsTimePeriodNotificationResponse } from './transactions-time-period-notification-response.js';
import { type ITransactionItemNotificationResponse } from './transaction-item-notification-response.js';
import { type ITransactionDetailsNotificationResponse } from './transaction-details-notification-response.js';

export interface ITransactionNotificationResponse {
  id: string;
  status: TransactionStatus;
  customer_id?: string | null;
  address_id?: string | null;
  business_id?: string | null;
  custom_data?: ICustomData | null;
  currency_code: CurrencyCode;
  origin: TransactionOrigin;
  subscription_id?: string | null;
  invoice_id?: string | null;
  invoice_number?: string | null;
  collection_mode: CollectionMode;
  discount_id?: string | null;
  billing_details?: IBillingDetailsNotificationResponse | null;
  billing_period?: ITransactionsTimePeriodNotificationResponse | null;
  items: ITransactionItemNotificationResponse[];
  details?: ITransactionDetailsNotificationResponse | null;
  payments: ITransactionPaymentAttemptNotificationResponse[];
  checkout?: ITransactionCheckoutNotification | null;
  created_at: string;
  updated_at: string;
  billed_at?: string | null;
  revised_at?: string | null;
}
