/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { BaseResource, PathParameters, QueryParameters } from '../../internal/base/index.js';
import { type ErrorResponse, type Response } from '../../internal/index.js';
import {
  CreateClientTokenRequestBody,
  ListClientTokenQueryParameters,
  UpdateClientTokenRequestBody,
} from './operations/index.js';
import { ClientToken, ClientTokenCollection } from '../../entities/client-token/index.js';
import { IClientTokenResponse } from '../../types/index.js';

const ClientTokenPaths = {
  list: '/client-tokens',
  create: '/client-tokens',
  get: '/client-tokens/{client_token_id}',
  update: '/client-tokens/{client_token_id}',
} as const;

export * from './operations/index.js';

export class ClientTokensResource extends BaseResource {
  public list(queryParams?: ListClientTokenQueryParameters): ClientTokenCollection {
    const queryParameters = new QueryParameters(queryParams);
    return new ClientTokenCollection(this.client, ClientTokenPaths.list + queryParameters.toQueryString());
  }

  public async create(createClientTokenRequestBody: CreateClientTokenRequestBody): Promise<ClientToken> {
    const response = await this.client.post<
      CreateClientTokenRequestBody,
      Response<IClientTokenResponse> | ErrorResponse
    >(ClientTokenPaths.create, createClientTokenRequestBody);

    const data = this.handleResponse<IClientTokenResponse>(response);

    return new ClientToken(data);
  }

  public async get(clientTokenId: string): Promise<ClientToken> {
    const urlWithPathParams = new PathParameters(ClientTokenPaths.get, {
      client_token_id: clientTokenId,
    }).deriveUrl();

    const response = await this.client.get<undefined, Response<IClientTokenResponse> | ErrorResponse>(
      urlWithPathParams,
    );

    const data = this.handleResponse<IClientTokenResponse>(response);

    return new ClientToken(data);
  }

  public async update(clientTokenId: string, updateClientToken: UpdateClientTokenRequestBody): Promise<ClientToken> {
    const urlWithPathParams = new PathParameters(ClientTokenPaths.update, {
      client_token_id: clientTokenId,
    }).deriveUrl();

    const response = await this.client.patch<
      UpdateClientTokenRequestBody,
      Response<IClientTokenResponse> | ErrorResponse
    >(urlWithPathParams, updateClientToken);

    const data = this.handleResponse<IClientTokenResponse>(response);

    return new ClientToken(data);
  }

  public async revoke(clientTokenId: string) {
    return await this.update(clientTokenId, { status: 'revoked' });
  }
}
