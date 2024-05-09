/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { BaseResource, PathParameters, QueryParameters } from '../../internal/base/index.js';
import {
  type CreateTransactionQueryParameters,
  type CreateTransactionRequestBody,
  type GetTransactionQueryParameters,
  type ListTransactionQueryParameters,
  type TransactionPreviewRequestBody,
  type UpdateTransactionQueryParameters,
  type UpdateTransactionRequestBody,
} from './operations/index.js';
import { Transaction, TransactionCollection, TransactionInvoicePDF, TransactionPreview } from '../../entities/index.js';
import {
  type ITransactionInvoicePDF,
  type ITransactionPreviewResponse,
  type ITransactionResponse,
} from '../../types/index.js';
import { type Response, type ErrorResponse } from '../../internal/index.js';

const TransactionPaths = {
  list: '/transactions',
  create: '/transactions',
  get: '/transactions/{transaction_id}',
  update: '/transactions/{transaction_id}',
  getInvoicePDF: '/transactions/{transaction_id}/invoice',
  preview: '/transactions/preview',
} as const;

export * from './operations/index.js';

export class TransactionsResource extends BaseResource {
  public list(queryParams?: ListTransactionQueryParameters): TransactionCollection {
    const queryParameters = new QueryParameters(queryParams);
    return new TransactionCollection(this.client, TransactionPaths.list + queryParameters.toQueryString());
  }

  public async create(
    createTransactionParameters: CreateTransactionRequestBody,
    queryParams?: CreateTransactionQueryParameters,
  ): Promise<Transaction> {
    const queryParameters = new QueryParameters(queryParams);
    const response = await this.client.post<
      CreateTransactionRequestBody,
      Response<ITransactionResponse> | ErrorResponse
    >(TransactionPaths.create + queryParameters.toQueryString(), createTransactionParameters);

    const data = this.handleResponse<ITransactionResponse>(response);

    return new Transaction(data);
  }

  public async update(
    transactionId: string,
    updateTransaction: UpdateTransactionRequestBody,
    queryParams?: UpdateTransactionQueryParameters,
  ): Promise<Transaction> {
    const queryParameters = new QueryParameters(queryParams);
    const urlWithPathParams = new PathParameters(TransactionPaths.update, {
      transaction_id: transactionId,
    }).deriveUrl();

    const response = await this.client.patch<
      UpdateTransactionRequestBody,
      Response<ITransactionResponse> | ErrorResponse
    >(urlWithPathParams + queryParameters.toQueryString(), updateTransaction);

    const data = this.handleResponse<ITransactionResponse>(response);

    return new Transaction(data);
  }

  public async get(transactionId: string, queryParams?: GetTransactionQueryParameters): Promise<Transaction> {
    const queryParameters = new QueryParameters(queryParams);

    const urlWithPathParams = new PathParameters(TransactionPaths.get, {
      transaction_id: transactionId,
    }).deriveUrl();

    const response = await this.client.get<
      GetTransactionQueryParameters | undefined,
      Response<ITransactionResponse> | ErrorResponse
    >(urlWithPathParams, queryParameters);

    const data = this.handleResponse<ITransactionResponse>(response);

    return new Transaction(data);
  }

  public async getInvoicePDF(transactionId: string): Promise<TransactionInvoicePDF> {
    const urlWithPathParams = new PathParameters(TransactionPaths.getInvoicePDF, {
      transaction_id: transactionId,
    }).deriveUrl();

    const response = await this.client.get<undefined, Response<ITransactionInvoicePDF> | ErrorResponse>(
      urlWithPathParams,
    );

    const data = this.handleResponse<ITransactionInvoicePDF>(response);

    return new TransactionInvoicePDF(data);
  }

  public async preview(previewTransactionParameters: TransactionPreviewRequestBody): Promise<TransactionPreview> {
    const response = await this.client.post<
      TransactionPreviewRequestBody,
      Response<ITransactionPreviewResponse> | ErrorResponse
    >(TransactionPaths.preview, previewTransactionParameters);

    const data = this.handleResponse<ITransactionPreviewResponse>(response);

    return new TransactionPreview(data);
  }
}
