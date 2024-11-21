/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { CustomerPortalSessionsResource } from '../../resources/index.js';
import { getPaddleTestClient } from '../helpers/test-client.js';
import {
  CustomerPortalSessionMockResponse,
  CustomerPortalSessionMock,
} from '../mocks/resources/customer-portal-sessions.mock.js';

describe('CustomerPortalSessionsResource', () => {
  test('should create a new customer portal session', async () => {
    const customerId = CustomerPortalSessionMock.customer_id;
    const subscriptionIds = ['sub_123'];
    const paddleInstance = getPaddleTestClient();
    paddleInstance.post = jest.fn().mockResolvedValue(CustomerPortalSessionMockResponse);

    const customerPortalSessionsResource = new CustomerPortalSessionsResource(paddleInstance);
    const createdCustomerPortalSession = await customerPortalSessionsResource.create(customerId, subscriptionIds);

    expect(paddleInstance.post).toBeCalledWith(`/customers/${customerId}/portal-sessions`, {
      subscriptionIds,
    });
    expect(createdCustomerPortalSession).toBeDefined();
    expect(createdCustomerPortalSession.id).toBeDefined();
    expect(createdCustomerPortalSession.customerId).toBe(customerId);
    expect(createdCustomerPortalSession.urls.subscriptions[0].id).toBe(subscriptionIds[0]);
  });
});
