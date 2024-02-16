/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ISubscriptionItemNotificationResponse } from '../../types';
import { SubscriptionPriceNotification, SubscriptionTimePeriodNotification } from '../index';
import { type SubscriptionItemStatus } from '../../../enums';

export class SubscriptionItemNotification {
  public readonly status: SubscriptionItemStatus;
  public readonly quantity: number;
  public readonly recurring: boolean;
  public readonly createdAt: string;
  public readonly updatedAt: string;
  public readonly previouslyBilledAt: string | null;
  public readonly nextBilledAt: string | null;
  public readonly trialDates: SubscriptionTimePeriodNotification | null;
  public readonly price: SubscriptionPriceNotification | null;

  constructor(subscriptionItem: ISubscriptionItemNotificationResponse) {
    this.status = subscriptionItem.status;
    this.quantity = subscriptionItem.quantity;
    this.recurring = subscriptionItem.recurring;
    this.createdAt = subscriptionItem.created_at;
    this.updatedAt = subscriptionItem.updated_at;
    this.previouslyBilledAt = subscriptionItem.previously_billed_at ? subscriptionItem.previously_billed_at : null;
    this.nextBilledAt = subscriptionItem.next_billed_at ? subscriptionItem.next_billed_at : null;
    this.trialDates = subscriptionItem.trial_dates
      ? new SubscriptionTimePeriodNotification(subscriptionItem.trial_dates)
      : null;
    this.price = subscriptionItem.price ? new SubscriptionPriceNotification(subscriptionItem.price) : null;
  }
}