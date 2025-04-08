import type { Status } from '../../enums/index.js';
import { ISimulationScenarioConfigResponse } from '../index.js';
import type { DiscriminatedSimulationEventResponse } from '../shared/simulation-payload.js';

export type ISimulationResponse = DiscriminatedSimulationEventResponse<BaseSimulationResponse>;

interface BaseSimulationResponse {
  id: string;
  status: Status;
  notification_setting_id: string;
  name: string;
  last_run_at?: string | null;
  created_at: string;
  updated_at: string;
  config: ISimulationScenarioConfigResponse;
}
