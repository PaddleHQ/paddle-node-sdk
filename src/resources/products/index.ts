/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Product, ProductCollection } from '../../entities';
import { type ErrorResponse, type Response } from '../../internal';
import { BaseResource, PathParameters, QueryParameters } from '../../internal/base';
import {
  type CreateProductRequestBody,
  type GetProductQueryParameters,
  type ListProductQueryParameters,
  type UpdateProductRequestBody,
} from './operations';
import { type IProductResponse } from '../../types';

const ProductPaths = {
  list: '/products',
  create: '/products',
  get: '/products/{product_id}',
  update: '/products/{product_id}',
} as const;

export * from './operations';

export class ProductsResource extends BaseResource {
  public list(queryParams?: ListProductQueryParameters): ProductCollection {
    const queryParameters = new QueryParameters(queryParams);
    return new ProductCollection(this.client, ProductPaths.list + queryParameters.toQueryString());
  }

  public async create(createProductParameters: CreateProductRequestBody): Promise<Product> {
    const response = await this.client.post<CreateProductRequestBody, Response<IProductResponse> | ErrorResponse>(
      ProductPaths.create,
      createProductParameters,
    );

    const data = this.handleResponse<IProductResponse>(response);

    return new Product(data);
  }

  public async get(productId: string, queryParams?: GetProductQueryParameters): Promise<Product> {
    const queryParameters = new QueryParameters(queryParams);

    const urlWithPathParams = new PathParameters(ProductPaths.get, {
      product_id: productId,
    }).deriveUrl();

    const response = await this.client.get<
      GetProductQueryParameters | undefined,
      Response<IProductResponse> | ErrorResponse
    >(urlWithPathParams, queryParameters);

    const data = this.handleResponse<IProductResponse>(response);

    return new Product(data);
  }

  public async update(productId: string, updateProduct: UpdateProductRequestBody): Promise<Product> {
    const urlWithPathParams = new PathParameters(ProductPaths.update, {
      product_id: productId,
    }).deriveUrl();

    const response = await this.client.patch<UpdateProductRequestBody, Response<IProductResponse> | ErrorResponse>(
      urlWithPathParams,
      updateProduct,
    );

    const data = this.handleResponse<IProductResponse>(response);

    return new Product(data);
  }

  public async archive(productId: string) {
    return await this.update(productId, { status: 'archived' });
  }
}
