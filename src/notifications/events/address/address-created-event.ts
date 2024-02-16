/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IEventsResponse } from '../../../types';
import { EventName } from '../../helpers';
import { Event } from '../../../entities/events/event';
import { AddressNotification } from '../../entities';
import { type IAddressNotificationResponse } from '../../types';

export class AddressCreatedEvent extends Event {
  public override readonly eventType = EventName.AddressCreated;
  public override readonly data: AddressNotification;

  constructor(response: IEventsResponse<IAddressNotificationResponse>) {
    super(response);
    this.data = new AddressNotification(response.data);
  }
}
