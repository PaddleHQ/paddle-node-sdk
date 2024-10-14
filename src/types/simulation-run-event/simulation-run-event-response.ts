/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import type { ISimulationEventRequest, ISimulationEventResponse } from '../shared/index.js';
import type { SimulationRunEventStatus, SimulationScenarioType } from '../../enums/index.js';
import type { IEventName } from '../../notifications/index.js';

export interface ISimulationRunEventResponse {
  id: string;
  status: SimulationRunEventStatus;
  event_type: IEventName | SimulationScenarioType;
  payload: any;
  request?: ISimulationEventRequest | null;
  response?: ISimulationEventResponse | null;
  created_at: string;
  updated_at: string;
}