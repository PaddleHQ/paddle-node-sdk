/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IBillingDetailsNotificationResponse } from '../../types';
import { TimePeriodNotification } from '../index';

export class BillingDetailsNotification {
  public readonly enableCheckout: boolean | null;
  public readonly purchaseOrderNumber: string | null;
  public readonly additionalInformation: string | null;
  public readonly paymentTerms: TimePeriodNotification;

  constructor(billingDetails: IBillingDetailsNotificationResponse) {
    this.enableCheckout = billingDetails.enable_checkout ?? null;
    this.purchaseOrderNumber = billingDetails.purchase_order_number ? billingDetails.purchase_order_number : null;
    this.additionalInformation = billingDetails.additional_information ? billingDetails.additional_information : null;
    this.paymentTerms = new TimePeriodNotification(billingDetails.payment_terms);
  }
}
