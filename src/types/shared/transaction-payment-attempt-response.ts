/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ErrorCode, type PaymentAttemptStatus } from '../../enums/index.js';
import { type IPaymentMethodDetails } from './payment-method-details.js';

export interface ITransactionPaymentAttemptResponse {
  payment_attempt_id: string;
  /**
   * @deprecated use payment_method_id instead
   */
  stored_payment_method_id: string;
  payment_method_id: string | null;
  amount: string;
  status: PaymentAttemptStatus;
  error_code?: ErrorCode | null;
  method_details?: IPaymentMethodDetails | null;
  created_at: string;
  captured_at?: string | null;
}
