/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Event } from '../../../entities/events/event.js';
import { EventName } from '../../helpers/index.js';
import { TransactionNotification } from '../../entities/index.js';
import { type IEventsResponse } from '../../../types/index.js';
import { type ITransactionNotificationResponse } from '../../types/index.js';

export class TransactionCreatedEvent extends Event {
  public override readonly eventType = EventName.TransactionCreated;
  public override readonly data: TransactionNotification;

  constructor(response: IEventsResponse<ITransactionNotificationResponse>) {
    super(response);
    this.data = new TransactionNotification(response.data);
  }
}
