/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type PaymentType } from '../../../enums/index.js';
import { type IPaymentCardNotificationResponse } from './payment-card-notification-response.js';
import { IPaymentMethodUnderlyingDetailsNotification } from './payment-method-underlying-details-notification.js';

export interface IPaymentMethodDetailsNotification {
  type: PaymentType;
  card: IPaymentCardNotificationResponse | null;
  underlying_details: IPaymentMethodUnderlyingDetailsNotification | null;
}
