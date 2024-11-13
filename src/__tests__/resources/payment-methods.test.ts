/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { PaymentMethodsResource, type ListCustomerPaymentMethodQueryParameters } from '../../resources';
import { getPaddleTestClient } from '../helpers/test-client';
import {
  PaymentMethodMockResponse,
  PaymentMethodMock,
  ListPaymentMethodMockResponse,
} from '../mocks/resources/payment-methods.mock';

describe('PaymentMethodsResource', () => {
  test('should return a list of payment methods', async () => {
    const customerId = PaymentMethodMock.customer_id;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListPaymentMethodMockResponse);

    const paymentMethodsResource = new PaymentMethodsResource(paddleInstance);
    const paymentMethodCollection = paymentMethodsResource.list(customerId);

    let paymentMethods = await paymentMethodCollection.next();
    expect(paddleInstance.get).toBeCalledWith(`/customers/${customerId}/payment-methods?`);
    expect(paymentMethods.length).toBe(1);

    paymentMethods = await paymentMethodCollection.next();
    expect(paddleInstance.get).toBeCalledWith(`/customers/${customerId}/payment-methods?after=1`);
    expect(paymentMethods.length).toBe(1);
  });

  test('should accept query params and return a list of payment methods', async () => {
    const customerId = PaymentMethodMock.customer_id;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListPaymentMethodMockResponse);
    const paymentMethodsResource = new PaymentMethodsResource(paddleInstance);
    const queryParams: ListCustomerPaymentMethodQueryParameters = {
      after: '2',
      addressId: ['adr_123'],
    };

    const paymentMethodCollection = paymentMethodsResource.list(customerId, queryParams);
    let paymentMethods = await paymentMethodCollection.next();

    expect(paddleInstance.get).toBeCalledWith(`/customers/${customerId}/payment-methods?after=2&address_id=adr_123`);
    expect(paymentMethods.length).toBe(1);
  });

  test('should return a single payment method', async () => {
    const paymentMethodId = PaymentMethodMock.id;
    const customerId = PaymentMethodMock.customer_id;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(PaymentMethodMockResponse);

    const paymentMethodsResource = new PaymentMethodsResource(paddleInstance);
    const paymentMethod = await paymentMethodsResource.get(customerId, paymentMethodId);

    expect(paddleInstance.get).toBeCalledWith(`/customers/${customerId}/payment-methods/${paymentMethodId}`);
    expect(paymentMethod).toBeDefined();
    expect(paymentMethod.id).toBe(paymentMethodId);
  });

  test('should delete an existing payment method', async () => {
    const paymentMethodId = PaymentMethodMock.id;
    const customerId = PaymentMethodMock.customer_id;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.delete = jest.fn().mockResolvedValue(PaymentMethodMockResponse);

    const paymentMethodsResource = new PaymentMethodsResource(paddleInstance);
    const updatedPaymentMethod = await paymentMethodsResource.delete(customerId, paymentMethodId);

    expect(paddleInstance.delete).toBeCalledWith(`/customers/${customerId}/payment-methods/${paymentMethodId}`);
    expect(updatedPaymentMethod).toBeUndefined();
  });
});