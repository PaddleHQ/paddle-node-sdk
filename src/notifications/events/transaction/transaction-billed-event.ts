/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Event } from '../../../entities/events/event';
import { TransactionNotification } from '../../entities';
import { EventName } from '../../helpers';
import { type IEventsResponse } from '../../../types';
import { type ITransactionNotificationResponse } from '../../types';

export class TransactionBilledEvent extends Event {
  public override readonly eventType = EventName.TransactionBilled;
  public override readonly data: TransactionNotification;

  constructor(response: IEventsResponse<ITransactionNotificationResponse>) {
    super(response);
    this.data = new TransactionNotification(response.data);
  }
}
