import type { Status } from '../../enums';
import type { DiscriminatedEventResponse } from '../shared/simulation-payload';

export type ISimulationResponse = DiscriminatedEventResponse<BaseSimulationResponse>;

interface BaseSimulationResponse {
  id: string;
  status: Status;
  notification_setting_id: string;
  name: string;
  last_run_at?: string | null;
  created_at: string;
  updated_at: string;
}
