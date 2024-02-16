/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Event } from '../../../entities/events/event';
import { ProductNotification } from '../../entities';
import { EventName } from '../../helpers';
import { type IEventsResponse } from '../../../types';
import { type IProductNotificationResponse } from '../../types';

export class ProductImportedEvent extends Event {
  public override readonly eventType = EventName.ProductImported;
  public override readonly data: ProductNotification;

  constructor(response: IEventsResponse<IProductNotificationResponse>) {
    super(response);
    this.data = new ProductNotification(response.data);
  }
}
