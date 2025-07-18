/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { getPaddleTestClient } from '../helpers/test-client.js';
import {
  CustomerCreditBalanceMockResponse,
  CustomerMock,
  CustomerMockResponse,
  GenerateAuthTokenMockResponse,
  ListCustomerMockResponse,
  UpdateCustomerExpectation,
  UpdateCustomerMock,
} from '../mocks/resources/customers.mock.js';
import {
  CreateCustomerRequestBody,
  CustomersResource,
  ListCustomerQueryParameters,
  UpdateCustomerRequestBody,
} from '../../resources/index.js';
import { convertToSnakeCase } from '../../internal/index.js';

describe('CustomersResource', () => {
  test('should return a list of customers', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListCustomerMockResponse);

    const customersResource = new CustomersResource(paddleInstance);
    const customerCollection = customersResource.list();

    let customers = await customerCollection.next();
    expect(paddleInstance.get).toHaveBeenCalledWith('/customers?');
    expect(customers.length).toBe(1);

    customers = await customerCollection.next();
    expect(paddleInstance.get).toHaveBeenCalledWith('/customers?after=1');
    expect(customers.length).toBe(1);
  });

  test('should accept query params and return a list of customers', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListCustomerMockResponse);
    const customersResource = new CustomersResource(paddleInstance);
    const queryParams: ListCustomerQueryParameters = {
      after: '2',
      id: ['1234'],
    };

    const customerCollection = customersResource.list(queryParams);
    const customers = await customerCollection.next();

    expect(paddleInstance.get).toHaveBeenCalledWith('/customers?after=2&id=1234');
    expect(customers.length).toBe(1);
  });

  test('should return a single customer by ID', async () => {
    const customerId = CustomerMock.id;
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(CustomerMockResponse);

    const customersResource = new CustomersResource(paddleInstance);
    const customer = await customersResource.get(customerId);

    expect(paddleInstance.get).toHaveBeenCalledWith(`/customers/${customerId}`);
    expect(customer).toBeDefined();
    expect(customer.id).toBe(customerId);
  });

  test('should accepts query params and return a single customer by ID', async () => {
    const customerId = CustomerMock.id;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.get = jest.fn().mockResolvedValue(CustomerMockResponse);
    const customersResource = new CustomersResource(paddleInstance);

    const customer = await customersResource.get(customerId);

    expect(customer).toBeDefined();
    expect(paddleInstance.get).toHaveBeenCalledWith(`/customers/${customerId}`);
    expect(customer.id).toBe(customerId);
  });

  test('should create a new customer', async () => {
    const newCustomer: CreateCustomerRequestBody = CustomerMock;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.post = jest.fn().mockResolvedValue(CustomerMockResponse);
    const customersResource = new CustomersResource(paddleInstance);
    const createdCustomer = await customersResource.create(newCustomer);

    expect(paddleInstance.post).toHaveBeenCalledWith(`/customers`, newCustomer);
    expect(createdCustomer).toBeDefined();
    expect(createdCustomer.id).toBeDefined();
    expect(createdCustomer.name).toBe(newCustomer.name);
  });

  test('should update an existing customer', async () => {
    const customerId = CustomerMock.id;
    const customerToBeUpdated: UpdateCustomerRequestBody = {
      name: 'Updated Customer',
    };

    const paddleInstance = getPaddleTestClient();
    paddleInstance.patch = jest.fn().mockResolvedValue(CustomerMockResponse);

    const customersResource = new CustomersResource(paddleInstance);
    const updatedCustomer = await customersResource.update(customerId, customerToBeUpdated);

    expect(paddleInstance.patch).toHaveBeenCalledWith(`/customers/${customerId}`, customerToBeUpdated);
    expect(updatedCustomer).toBeDefined();

    expect(convertToSnakeCase(UpdateCustomerMock)).toEqual(UpdateCustomerExpectation);
  });

  test('should archive an existing customer', async () => {
    const customerId = CustomerMock.id;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.patch = jest.fn().mockResolvedValue(CustomerMockResponse);

    const customersResource = new CustomersResource(paddleInstance);
    const updatedCustomer = await customersResource.archive(customerId);

    expect(paddleInstance.patch).toHaveBeenCalledWith(`/customers/${customerId}`, { status: 'archived' });
    expect(updatedCustomer).toBeDefined();
  });

  test('should return a credit balance for customer by ID', async () => {
    const customerId = CustomerMock.id;
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(CustomerCreditBalanceMockResponse);

    const customersResource = new CustomersResource(paddleInstance);
    const customer = await customersResource.getCreditBalance(customerId);

    expect(paddleInstance.get).toHaveBeenCalledWith(`/customers/${customerId}/credit-balances`, {
      queryParameters: undefined,
    });
    expect(customer).toBeDefined();
  });

  test('should generate an auth token for a customer', async () => {
    const customerId = CustomerMock.id;
    const paddleInstance = getPaddleTestClient();
    paddleInstance.post = jest.fn().mockResolvedValue(GenerateAuthTokenMockResponse);

    const customersResource = new CustomersResource(paddleInstance);
    const authToken = (await customersResource.generateAuthToken(customerId)).customerAuthToken;

    expect(paddleInstance.post).toHaveBeenCalledWith(`/customers/${customerId}/auth-token`, undefined);
    expect(authToken).toBeDefined();
  });
});
