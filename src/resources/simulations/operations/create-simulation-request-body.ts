import type { SimulationScenarioType } from '../../../enums';
import type { IEventName } from '../../../notifications';
import type { DiscriminatedSimulationEventResponse } from '../../../types';

interface BaseCreateSimulationRequestBody {
  notificationSettingId: string;
  name: string;
  type: IEventName | SimulationScenarioType;
}

export type CreateSimulationRequestBody = DiscriminatedSimulationEventResponse<BaseCreateSimulationRequestBody>;
