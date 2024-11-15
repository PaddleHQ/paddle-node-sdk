/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IPaymentMethodNotificationResponse } from '../../types';
import { type SavedPaymentMethodType, type SavedPaymentOrigin } from '../../../enums';

export class PaymentMethodNotification {
  public readonly id: string;
  public readonly customerId: string;
  public readonly addressId: string;
  public readonly deletionReason: string;
  public readonly type: SavedPaymentMethodType;
  public readonly origin: SavedPaymentOrigin;
  public readonly savedAt: string;
  public readonly updatedAt: string;

  constructor(paymentMethod: IPaymentMethodNotificationResponse) {
    this.id = paymentMethod.id;
    this.customerId = paymentMethod.customer_id;
    this.addressId = paymentMethod.address_id;
    this.deletionReason = paymentMethod.deletion_reason;
    this.type = paymentMethod.type;
    this.origin = paymentMethod.origin;
    this.savedAt = paymentMethod.saved_at;
    this.updatedAt = paymentMethod.updated_at;
  }
}
