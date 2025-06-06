/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Event } from '../../../entities/events/event.js';
import { EventName } from '../../helpers/index.js';
import { SubscriptionCreatedNotification } from '../../entities/index.js';
import { type IEventsResponse } from '../../../types/index.js';
import { type ISubscriptionCreatedNotificationResponse } from '../../types/index.js';

export class SubscriptionCreatedEvent extends Event {
  public override readonly eventType = EventName.SubscriptionCreated;
  public override readonly data: SubscriptionCreatedNotification;

  constructor(response: IEventsResponse<ISubscriptionCreatedNotificationResponse>) {
    super(response);
    this.data = new SubscriptionCreatedNotification(response.data);
  }
}
