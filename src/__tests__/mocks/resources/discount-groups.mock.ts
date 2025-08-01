/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { IDiscountGroupResponse } from '../../../types/index.js';
import { Response, ResponsePaginated } from '../../../internal/index.js';
import { UpdateDiscountGroupRequestBody } from '../../../resources/index.js';

export const DiscountGroupMock: IDiscountGroupResponse = {
  id: 'dsg_01gtf15svsqzgp9325ss4ebmwt',
  name: 'Black Friday 2024',
  status: 'active',
  created_at: '2024-11-28T14:36:14.695Z',
  updated_at: '2024-11-28T14:36:14.695Z',
  import_meta: null,
};

export const UpdateDiscountGroupRequest: UpdateDiscountGroupRequestBody = {
  name: 'Black Friday 2025',
  status: 'active',
};

export const UpdateDiscountGroupRequestExpectation = {
  name: 'Black Friday 2025',
  status: 'active',
};

export const DiscountGroupMockResponse: Response<IDiscountGroupResponse> = {
  data: DiscountGroupMock,
  meta: {
    request_id: '',
  },
};

export const ListDiscountGroupMockResponse: ResponsePaginated<IDiscountGroupResponse> = {
  data: [DiscountGroupMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/discount-groups?after=1',
      per_page: 10,
    },
  },
};
