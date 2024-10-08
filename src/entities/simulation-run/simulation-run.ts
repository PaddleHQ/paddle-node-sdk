/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { SimulationRunEvent } from '..';
import type { SimulationRunStatus, SimulationEventType } from '../../enums';
import type { ISimulationRunResponse } from '../../types';

export class SimulationRun {
  public readonly id: string;
  public readonly status: SimulationRunStatus;
  public readonly createdAt: string;
  public readonly updatedAt: string;
  public readonly type: SimulationEventType;
  public readonly events: SimulationRunEvent[] | null;

  constructor(simulationRunResponse: ISimulationRunResponse) {
    this.id = simulationRunResponse.id;
    this.status = simulationRunResponse.status;
    this.createdAt = simulationRunResponse.created_at;
    this.updatedAt = simulationRunResponse.updated_at;
    this.type = simulationRunResponse.type;
    this.events = simulationRunResponse.events?.map((event) => new SimulationRunEvent(event)) ?? [];
  }
}
