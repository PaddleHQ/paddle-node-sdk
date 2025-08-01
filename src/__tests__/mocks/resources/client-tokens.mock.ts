/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { IClientTokenResponse } from '../../../types/index.js';
import { ResponsePaginated, Response } from '../../../internal/index.js';

export const ClientTokensMock: IClientTokenResponse = {
  id: 'ctkn_01ghbkd0frb9k95cnhwd1bxpvk',
  name: 'Mackenzie',
  token: '1234',
  description: 'Client token for Mackenzie',
  status: 'active',
  created_at: '2024-10-12T07:20:50.52Z',
  updated_at: '2024-10-13T07:20:50.52Z',
  revoked_at: null,
};

export const ListClientTokenMockResponse: ResponsePaginated<IClientTokenResponse> = {
  data: [ClientTokensMock],
  meta: {
    request_id: '913dee78-d496-4d13-a93e-09d834c208dd',
    pagination: {
      per_page: 50,
      next: 'https://api.paddle.com/client-tokens?after=ctkn_01ghbkd0frb9k95cnhwd1bxpvk',
      has_more: false,
      estimated_total: 2,
    },
  },
};

export const ClientTokenMockResponse: Response<IClientTokenResponse> = {
  data: ClientTokensMock,
  meta: {
    request_id: '',
  },
};
