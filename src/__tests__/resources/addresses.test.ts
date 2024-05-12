/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { getPaddleTestClient } from '../helpers/test-client.js';
import {
  AddressMock,
  AddressMockResponse,
  CreateAddressExpectation,
  CreateAddressMock,
  ListAddressMockResponse,
  UpdateAddressExpectation,
  UpdateAddressMock,
} from '../mocks/resources/addresses.mock.js';
import {
  AddressesResource,
  CreateAddressRequestBody,
  ListAddressQueryParameters,
  UpdateAddressRequestBody,
} from '../../resources/index.js';
import { convertToSnakeCase } from '../../internal/index.js';

describe('AddressesResource', () => {
  test('should return a list of addresses', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListAddressMockResponse);

    const addressesResource = new AddressesResource(paddleInstance);
    const addressCollection = addressesResource.list('ctm_1234');

    let addresses = await addressCollection.next();
    expect(paddleInstance.get).toBeCalledWith('/customers/ctm_1234/addresses?');
    expect(addresses.length).toBe(1);

    addresses = await addressCollection.next();
    expect(paddleInstance.get).toBeCalledWith('/customers/ctm_1234/addresses?');
    expect(addresses.length).toBe(1);
  });

  test('should accept query params and return a list of addresses', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListAddressMockResponse);
    const addressesResource = new AddressesResource(paddleInstance);
    const queryParams: ListAddressQueryParameters = {
      after: '2',
      id: ['1234'],
    };

    const addressCollection = addressesResource.list('ctm_1234', queryParams);
    let addresses = await addressCollection.next();

    expect(paddleInstance.get).toBeCalledWith('/customers/ctm_1234/addresses?after=2&id=1234');
    expect(addresses.length).toBe(1);
  });

  test('should return a single address by ID', async () => {
    const addressId = AddressMock.id;
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(AddressMockResponse);

    const addressesResource = new AddressesResource(paddleInstance);
    const address = await addressesResource.get('ctm_1234', addressId);

    expect(paddleInstance.get).toBeCalledWith(`/customers/ctm_1234/addresses/${addressId}`);
    expect(address).toBeDefined();
    expect(address.id).toBe(addressId);
  });

  test('should accepts query params and return a single address by ID', async () => {
    const addressId = AddressMock.id;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.get = jest.fn().mockResolvedValue(AddressMockResponse);
    const addressesResource = new AddressesResource(paddleInstance);

    const address = await addressesResource.get('ctm_1234', addressId);

    expect(address).toBeDefined();
    expect(paddleInstance.get).toBeCalledWith(`/customers/ctm_1234/addresses/${addressId}`);
    expect(address.id).toBe(addressId);
  });

  test('should create a new address', async () => {
    const newAddress: CreateAddressRequestBody = CreateAddressMock;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.post = jest.fn().mockResolvedValue(AddressMockResponse);
    const addressesResource = new AddressesResource(paddleInstance);
    const createdAddress = await addressesResource.create('ctm_1234', newAddress);

    expect(paddleInstance.post).toBeCalledWith(`/customers/ctm_1234/addresses`, CreateAddressMock);
    expect(createdAddress).toBeDefined();
    expect(createdAddress.id).toBeDefined();

    expect(convertToSnakeCase(newAddress)).toEqual(CreateAddressExpectation);
  });

  test('should update an existing address', async () => {
    const addressId = AddressMock.id;
    const addressToBeUpdated: UpdateAddressRequestBody = UpdateAddressMock;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.patch = jest.fn().mockResolvedValue(AddressMockResponse);

    const addressesResource = new AddressesResource(paddleInstance);
    const updatedAddress = await addressesResource.update('ctm_1234', addressId, addressToBeUpdated);

    expect(paddleInstance.patch).toBeCalledWith(`/customers/ctm_1234/addresses/${addressId}`, UpdateAddressMock);
    expect(updatedAddress).toBeDefined();

    expect(convertToSnakeCase(addressToBeUpdated)).toEqual(UpdateAddressExpectation);
  });

  test('should archive an existing address', async () => {
    const addressId = AddressMock.id;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.patch = jest.fn().mockResolvedValue(AddressMockResponse);

    const addressesResource = new AddressesResource(paddleInstance);
    const updatedAddress = await addressesResource.archive('ctm_1234', addressId);

    expect(paddleInstance.patch).toBeCalledWith(`/customers/ctm_1234/addresses/${addressId}`, { status: 'archived' });
    expect(updatedAddress).toBeDefined();
  });
});
