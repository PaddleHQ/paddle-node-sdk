import type { DiscriminatedEventResponse } from '../../../types';

interface BaseCreateSimulationRequestBody {
  notificationSettingId: string;
  name: string;
}

export type CreateSimulationRequestBody = DiscriminatedEventResponse<BaseCreateSimulationRequestBody>;
