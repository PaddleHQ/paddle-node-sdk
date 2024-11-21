/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { CustomerPortalSession } from '../../entities/index.js';
import { type ICustomerPortalSessionResponse } from '../../types/index.js';
import { type ErrorResponse, type Response } from '../../internal';
import { BaseResource, PathParameters } from '../../internal/base';
import { type CreateCustomerPortalSessionRequestBody } from './operations/index.js';

const CustomerPortalSessionPaths = {
  create: '/customers/{customer_id}/portal-sessions',
} as const;

export class CustomerPortalSessionsResource extends BaseResource {
  public async create(customerId: string, subscriptionIds: string[]): Promise<CustomerPortalSession> {
    const urlWithPathParams = new PathParameters(CustomerPortalSessionPaths.create, {
      customer_id: customerId,
    }).deriveUrl();

    const response = await this.client.post<
      CreateCustomerPortalSessionRequestBody,
      Response<ICustomerPortalSessionResponse> | ErrorResponse
    >(urlWithPathParams, {
      subscriptionIds,
    });

    const data = this.handleResponse<ICustomerPortalSessionResponse>(response);

    return new CustomerPortalSession(data);
  }
}
