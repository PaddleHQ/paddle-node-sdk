/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Event } from '../../../entities/events/event';
import { PayoutNotification } from '../../entities';
import { EventName } from '../../helpers';
import { type IEventsResponse } from '../../../types';
import { type IPayoutNotificationResponse } from '../../types';

export class PayoutPaidEvent extends Event {
  public override readonly eventType = EventName.PayoutPaid;
  public override readonly data: PayoutNotification;

  constructor(response: IEventsResponse<IPayoutNotificationResponse>) {
    super(response);
    this.data = new PayoutNotification(response.data);
  }
}
