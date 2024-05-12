/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IEvents, type IEventsResponse } from '../../types/index.js';
import { Collection } from '../../internal/base/index.js';
import { type EventEntity, Webhooks } from '../../notifications/index.js';

export class EventCollection extends Collection<IEventsResponse, EventEntity | null> {
  override fromJson(data: IEvents): EventEntity | null {
    return Webhooks.fromJson(data);
  }
}
