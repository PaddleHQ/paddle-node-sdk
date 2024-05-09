/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Event } from '../../../entities/events/event.js';
import { EventName } from '../../helpers/index.js';
import { BusinessNotification } from '../../entities/index.js';
import { type IEventsResponse } from '../../../types/index.js';
import { type IBusinessNotificationResponse } from '../../types/index.js';

export class BusinessImportedEvent extends Event {
  public override readonly eventType = EventName.BusinessImported;
  public override readonly data: BusinessNotification;

  constructor(response: IEventsResponse<IBusinessNotificationResponse>) {
    super(response);
    this.data = new BusinessNotification(response.data);
  }
}
