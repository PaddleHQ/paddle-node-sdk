import type { Status } from '../../enums';
import type { DiscriminatedSimulationEventResponse } from '../shared/simulation-payload';

export type ISimulationResponse = DiscriminatedSimulationEventResponse<BaseSimulationResponse>;

interface BaseSimulationResponse {
  id: string;
  status: Status;
  notification_setting_id: string;
  name: string;
  last_run_at?: string | null;
  created_at: string;
  updated_at: string;
}
