import type { Status } from '../../../enums';
import type { DiscriminatedEventResponse } from '../../../types';

interface BaseUpdateSimulationRequestBody {
  notificationSettingId?: string;
  name?: string;
  status?: Status;
}

type RawUpdateSimulationRequestBody = DiscriminatedEventResponse<BaseUpdateSimulationRequestBody>;

// Map all properties to be optional
export type UpdateSimulationRequestBody = {
  [Key in keyof RawUpdateSimulationRequestBody]?: RawUpdateSimulationRequestBody[Key];
};
