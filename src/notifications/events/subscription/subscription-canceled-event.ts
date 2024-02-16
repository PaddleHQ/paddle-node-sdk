/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Event } from '../../../entities/events/event';
import { SubscriptionNotification } from '../../entities';
import { EventName } from '../../helpers';
import { type IEventsResponse } from '../../../types';
import { type ISubscriptionNotificationResponse } from '../../types';

export class SubscriptionCanceledEvent extends Event {
  public override readonly eventType = EventName.SubscriptionCanceled;
  public override readonly data: Omit<SubscriptionNotification, 'transactionId'>;

  constructor(response: IEventsResponse<ISubscriptionNotificationResponse>) {
    super(response);
    this.data = new SubscriptionNotification(response.data);
  }
}
