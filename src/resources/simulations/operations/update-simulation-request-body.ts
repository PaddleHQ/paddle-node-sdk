/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import type { SimulationEventType, Status } from '../../../enums';
import type { EventMap, IEventName } from '../../../notifications';

export interface UpdateSimulationRequestBody<T extends SimulationEventType | undefined = undefined> {
  notificationSettingId?: string;
  name?: string;
  status?: Status;
  type?: T;
  payload?: (T extends IEventName ? EventMap[T] : null) | null;
}
