/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { PaymentMethod, PaymentMethodCollection } from '../../entities/index.js';
import { type IPaymentMethodResponse as PaymentMethodResponse } from '../../types/index.js';
import { type ErrorResponse, type Response } from '../../internal/index.js';
import { BaseResource, PathParameters, QueryParameters } from '../../internal/base/index.js';
import { type ListCustomerPaymentMethodQueryParameters } from './operations/index.js';

export * from './operations';

const PaymentMethodPaths = {
  list: '/customers/{customer_id}/payment-methods',
  get: '/customers/{customer_id}/payment-methods/{payment_method_id}',
  delete: '/customers/{customer_id}/payment-methods/{payment_method_id}',
} as const;

export class PaymentMethodsResource extends BaseResource {
  public list(customerId: string, queryParams?: ListCustomerPaymentMethodQueryParameters): PaymentMethodCollection {
    const queryParameters = new QueryParameters(queryParams);
    const urlWithPathParams = new PathParameters(PaymentMethodPaths.list, {
      customer_id: customerId,
    }).deriveUrl();
    return new PaymentMethodCollection(this.client, urlWithPathParams + queryParameters.toQueryString());
  }

  public async get(customerId: string, paymentMethodId: string): Promise<PaymentMethod> {
    const urlWithPathParams = new PathParameters(PaymentMethodPaths.get, {
      customer_id: customerId,
      payment_method_id: paymentMethodId,
    }).deriveUrl();

    const response = await this.client.get<undefined, Response<PaymentMethodResponse> | ErrorResponse>(
      urlWithPathParams,
    );

    const data = this.handleResponse<PaymentMethodResponse>(response);

    return new PaymentMethod(data);
  }

  public async delete(customerId: string, paymentMethodId: string): Promise<undefined> {
    const urlWithPathParams = new PathParameters(PaymentMethodPaths.delete, {
      customer_id: customerId,
      payment_method_id: paymentMethodId,
    }).deriveUrl();

    const response = await this.client.delete(urlWithPathParams);

    if (response) {
      this.handleResponse<undefined>(response);
    }
  }
}
