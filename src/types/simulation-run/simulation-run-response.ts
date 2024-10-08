/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import type { ISimulationRunEventResponse } from '..';
import type { SimulationRunStatus, SimulationEventType } from '../../enums';

export interface ISimulationRunResponse {
  id: string;
  status: SimulationRunStatus;
  created_at: string;
  updated_at: string;
  type: SimulationEventType;
  events?: ISimulationRunEventResponse[];
}
