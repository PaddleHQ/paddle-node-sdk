/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { BaseResource, PathParameters, QueryParameters } from '../../internal/base/index.js';
import {
  type CreateDiscountRequestBody,
  type GetDiscountQueryParameters,
  type ListDiscountQueryParameters,
  type UpdateDiscountRequestBody,
} from './operations/index.js';
import { Discount, DiscountCollection } from '../../entities/index.js';
import { type IDiscountResponse } from '../../types/index.js';
import { type ErrorResponse, type Response } from '../../internal/index.js';

const DiscountPaths = {
  list: '/discounts',
  create: '/discounts',
  get: '/discounts/{discount_id}',
  update: '/discounts/{discount_id}',
} as const;

export * from './operations/index.js';

export class DiscountsResource extends BaseResource {
  public list(queryParams?: ListDiscountQueryParameters): DiscountCollection {
    const queryParameters = new QueryParameters(queryParams);
    return new DiscountCollection(this.client, DiscountPaths.list + queryParameters.toQueryString());
  }

  public async create(createDiscountParameters: CreateDiscountRequestBody): Promise<Discount> {
    const response = await this.client.post<CreateDiscountRequestBody, Response<IDiscountResponse> | ErrorResponse>(
      DiscountPaths.create,
      createDiscountParameters,
    );

    const data = this.handleResponse<IDiscountResponse>(response);

    return new Discount(data);
  }

  public async get(discountId: string, queryParams?: GetDiscountQueryParameters): Promise<Discount> {
    const queryParameters = new QueryParameters(queryParams);
    const urlWithPathParams = new PathParameters(DiscountPaths.get, {
      discount_id: discountId,
    }).deriveUrl();

    const response = await this.client.get<undefined, Response<IDiscountResponse> | ErrorResponse>(
      urlWithPathParams + queryParameters.toQueryString(),
    );

    const data = this.handleResponse<IDiscountResponse>(response);

    return new Discount(data);
  }

  public async update(discountId: string, updateDiscount: UpdateDiscountRequestBody): Promise<Discount> {
    const urlWithPathParams = new PathParameters(DiscountPaths.update, {
      discount_id: discountId,
    }).deriveUrl();

    const response = await this.client.patch<UpdateDiscountRequestBody, Response<IDiscountResponse> | ErrorResponse>(
      urlWithPathParams,
      updateDiscount,
    );

    const data = this.handleResponse<IDiscountResponse>(response);

    return new Discount(data);
  }

  public async archive(discountId: string) {
    return await this.update(discountId, { status: 'archived' });
  }
}
