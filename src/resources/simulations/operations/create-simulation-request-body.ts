/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import type { SimulationEventType } from '../../../enums';
import type { EventMap, IEventName } from '../../../notifications';

export interface CreateSimulationRequestBody<T extends SimulationEventType> {
  notificationSettingId: string;
  type: T;
  name: string;
  payload?: (T extends IEventName ? EventMap[T] : null) | null;
}
