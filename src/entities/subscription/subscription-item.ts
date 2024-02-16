/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ISubscriptionItemResponse } from '../../types';
import { Price, SubscriptionTimePeriod } from '../index';
import { type SubscriptionItemStatus } from '../../enums';

export class SubscriptionItem {
  public readonly status: SubscriptionItemStatus;
  public readonly quantity: number;
  public readonly recurring: boolean;
  public readonly createdAt: string;
  public readonly updatedAt: string;
  public readonly previouslyBilledAt: string | null;
  public readonly nextBilledAt: string | null;
  public readonly trialDates: SubscriptionTimePeriod | null;
  public readonly price: Price | null;

  constructor(subscriptionItem: ISubscriptionItemResponse) {
    this.status = subscriptionItem.status;
    this.quantity = subscriptionItem.quantity;
    this.recurring = subscriptionItem.recurring;
    this.createdAt = subscriptionItem.created_at;
    this.updatedAt = subscriptionItem.updated_at;
    this.previouslyBilledAt = subscriptionItem.previously_billed_at ? subscriptionItem.previously_billed_at : null;
    this.nextBilledAt = subscriptionItem.next_billed_at ? subscriptionItem.next_billed_at : null;
    this.trialDates = subscriptionItem.trial_dates ? new SubscriptionTimePeriod(subscriptionItem.trial_dates) : null;
    this.price = subscriptionItem.price ? new Price(subscriptionItem.price) : null;
  }
}
