/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type SavedPaymentMethodType, type SavedPaymentOrigin } from '../../../enums';

export interface IPaymentMethodNotificationResponse {
  id: string;
  customer_id: string;
  address_id: string;
  type: SavedPaymentMethodType;
  origin: SavedPaymentOrigin;
  saved_at: string;
  updated_at: string;
}
