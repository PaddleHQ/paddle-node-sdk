/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ISimulationRunEventResponse } from '../../../types/index.js';
import { Response, ResponsePaginated } from '../../../internal/index.js';

export const SimulationRunEventMock: ISimulationRunEventResponse = {
  id: 'ntfsimevt_123',
  status: 'success',
  event_type: 'subscription.created',
  payload: {},
  request: null,
  response: null,
  created_at: '2024-09-18T12:24:47.960617Z',
  updated_at: '2024-09-18T12:24:48.309530Z',
};

export const SimulationRunEventMockResponse: Response<ISimulationRunEventResponse> = {
  data: SimulationRunEventMock,
  meta: {
    request_id: '',
  },
};

export const ListSimulationRunEventMockResponse: ResponsePaginated<ISimulationRunEventResponse> = {
  data: [SimulationRunEventMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/simulations/ntfsim_123/runs/ntfsimrun_123/events?after=1',
      per_page: 10,
    },
  },
};
