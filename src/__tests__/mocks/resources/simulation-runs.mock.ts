/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ISimulationRunResponse } from '../../../types/index.js';
import { Response, ResponsePaginated } from '../../../internal/index.js';

export const SimulationRunMock: ISimulationRunResponse = {
  id: 'ntfsimrun_01j82gvz2cgw08p7mak3gcd3a3',
  status: 'completed',
  type: 'subscription_creation',
  created_at: '2024-09-18T12:14:15.628606Z',
  updated_at: '2024-09-18T12:14:27.244695Z',
};

export const SimulationRunMockResponse: Response<ISimulationRunResponse> = {
  data: SimulationRunMock,
  meta: {
    request_id: '',
  },
};

export const ListSimulationRunMockResponse: ResponsePaginated<ISimulationRunResponse> = {
  data: [SimulationRunMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/simulations/ntfsim_123/runs?after=1',
      per_page: 10,
    },
  },
};
