import { NodeRuntime } from '../../index.esm.node.js';
import { Client } from '../../internal/api/client.js';
import { Environment } from '../../internal/index.js';
import { type TransactionCompletedEvent, Webhooks } from '../../notifications/index.js';
import {
  type CreateSimulationRequestBody,
  SimulationsResource,
  SubscriptionsResource,
  TransactionsResource,
  type UpdateSimulationRequestBody,
} from '../../resources/index.js';
import { type IEvents } from '../../types/index.js';
import { apiResponse } from '../helpers/api-response.js';
import { TransactionCompletedMock } from '../mocks/notifications/transaction-completed.mock.js';
import { PriceMock } from '../mocks/resources/prices.mock.js';
import { SimulationMockResponse } from '../mocks/resources/simulations.mock.js';
import { SubscriptionMockResponse } from '../mocks/resources/subscriptions.mock.js';
import { TransactionMock, TransactionMockResponse } from '../mocks/resources/transactions.mock.js';

const mockFetch = jest.fn();

const customData = {
  tenantId: 'abc-123',
  snake_key: 'kept',
  'kebab-key': 'kept',
  nestedObject: { innerKey: true },
  listOfObjects: [{ itemKey: 1 }],
};

function sentBody() {
  return JSON.parse(mockFetch.mock.calls[0][1].body);
}

describe('custom data', () => {
  let client: Client;

  beforeAll(() => {
    global.fetch = mockFetch;
  });

  beforeEach(() => {
    NodeRuntime.initialize();
    client = new Client('TEST_API_KEY', { environment: Environment.sandbox });
    mockFetch.mockReset();
  });

  describe('in simulation payloads', () => {
    beforeEach(() => {
      mockFetch.mockResolvedValue(apiResponse(200, SimulationMockResponse));
    });

    test('create keeps keys inside payload.customData', async () => {
      const requestBody: CreateSimulationRequestBody = {
        notificationSettingId: 'ntfset_01gt21c5pdx9q1e4mh1xrsjjn6',
        name: 'Completed transaction',
        type: 'transaction.completed',
        payload: { customData, customerId: 'ctm_01grnn4zta5a1mf02jjze7y2ys' },
      };

      await new SimulationsResource(client).create(requestBody);

      expect(sentBody()).toEqual({
        notification_setting_id: 'ntfset_01gt21c5pdx9q1e4mh1xrsjjn6',
        name: 'Completed transaction',
        type: 'transaction.completed',
        payload: { custom_data: customData, customer_id: 'ctm_01grnn4zta5a1mf02jjze7y2ys' },
      });
    });

    test('update keeps keys inside payload.customData', async () => {
      const requestBody: UpdateSimulationRequestBody = {
        type: 'transaction.completed',
        payload: { customData },
      };

      await new SimulationsResource(client).update('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk', requestBody);

      expect(sentBody()).toEqual({ type: 'transaction.completed', payload: { custom_data: customData } });
    });

    // Simulation.payload is returned as the raw API object, so a payload read from the API and sent back,
    // or copied from a webhook, uses the custom_data spelling.
    test.each([
      ['create', (resource: SimulationsResource, body: object) => resource.create(body as CreateSimulationRequestBody)],
      [
        'update',
        (resource: SimulationsResource, body: object) =>
          resource.update('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk', body as UpdateSimulationRequestBody),
      ],
    ])('%s keeps keys inside a snake_case payload', async (_operation, send) => {
      const payload = {
        custom_data: customData,
        items: [{ price: { custom_data: customData, product_id: 'pro_01gsz4t5hdjse780zja8vvr7jg' } }],
      };

      await send(new SimulationsResource(client), { type: 'transaction.completed', payload });

      expect(sentBody()).toEqual({ type: 'transaction.completed', payload });
    });

    test('create keeps keys inside custom data nested under payload.data', async () => {
      const requestBody = {
        notificationSettingId: 'ntfset_01gt21c5pdx9q1e4mh1xrsjjn6',
        name: 'Completed transaction',
        type: 'transaction.completed',
        payload: { data: { custom_data: customData } },
      } as unknown as CreateSimulationRequestBody;

      await new SimulationsResource(client).create(requestBody);

      expect(sentBody().payload).toEqual({ data: { custom_data: customData } });
    });
  });

  describe('in nested request entities', () => {
    test('transactions.create keeps keys inside price, product and discount customData', async () => {
      mockFetch.mockResolvedValue(apiResponse(200, TransactionMockResponse));

      await new TransactionsResource(client).create({
        customData,
        items: [
          {
            quantity: 1,
            price: {
              description: 'One-off',
              unitPrice: { amount: '1000', currencyCode: 'USD' },
              customData,
              product: { name: 'Setup', taxCategory: 'standard', customData },
            },
          },
        ],
        discount: { amount: '10', description: 'Launch', type: 'percentage', customData },
      });

      expect(sentBody()).toEqual({
        custom_data: customData,
        items: [
          {
            quantity: 1,
            price: {
              description: 'One-off',
              unit_price: { amount: '1000', currency_code: 'USD' },
              custom_data: customData,
              product: { name: 'Setup', tax_category: 'standard', custom_data: customData },
            },
          },
        ],
        discount: { amount: '10', description: 'Launch', type: 'percentage', custom_data: customData },
      });
    });

    test('subscriptions.update keeps keys inside price and product customData', async () => {
      mockFetch.mockResolvedValue(apiResponse(200, SubscriptionMockResponse));

      await new SubscriptionsResource(client).update('sub_01h7zcgmdc6tmwtjehp3sh7azf', {
        customData,
        items: [
          {
            quantity: 1,
            price: {
              description: 'Monthly',
              unitPrice: { amount: '1000', currencyCode: 'USD' },
              customData,
              product: { name: 'Plan', taxCategory: 'standard', customData },
            },
          },
        ],
      });

      expect(sentBody()).toEqual({
        custom_data: customData,
        items: [
          {
            quantity: 1,
            price: {
              description: 'Monthly',
              unit_price: { amount: '1000', currency_code: 'USD' },
              custom_data: customData,
              product: { name: 'Plan', tax_category: 'standard', custom_data: customData },
            },
          },
        ],
      });
    });

    test('subscriptions.createOneTimeCharge keeps keys inside price customData', async () => {
      mockFetch.mockResolvedValue(apiResponse(200, SubscriptionMockResponse));

      await new SubscriptionsResource(client).createOneTimeCharge('sub_01h7zcgmdc6tmwtjehp3sh7azf', {
        effectiveFrom: 'immediately',
        items: [
          {
            quantity: 1,
            price: {
              description: 'One-off',
              unitPrice: { amount: '1000', currencyCode: 'USD' },
              productId: 'pro_01gsz4t5hdjse780zja8vvr7jg',
              customData,
            },
          },
        ],
      });

      expect(sentBody().items[0].price.custom_data).toEqual(customData);
    });
  });

  describe('in responses and webhooks', () => {
    test('transactions.get keeps keys inside nested custom_data', async () => {
      const response = {
        ...TransactionMockResponse,
        data: {
          ...TransactionMock,
          custom_data: customData,
          items: [{ quantity: 1, price: { ...PriceMock, custom_data: customData } }],
        },
      };
      mockFetch.mockResolvedValue(apiResponse(200, response));

      const transaction = await new TransactionsResource(client).get(TransactionMock.id);

      expect(transaction.customData).toEqual(customData);
      expect(transaction.items[0]?.price?.customData).toEqual(customData);
    });

    test('a known webhook event keeps keys inside nested custom_data', () => {
      const { data } = TransactionCompletedMock;
      const event = {
        ...TransactionCompletedMock,
        data: {
          ...data,
          custom_data: customData,
          items: data.items.map((item) => ({ ...item, price: { ...item.price, custom_data: customData } })),
        },
      };

      const parsed = Webhooks.fromJson(event as IEvents) as TransactionCompletedEvent;

      expect(parsed.data.customData).toEqual(customData);
      expect(parsed.data.items[0]?.price?.customData).toEqual(customData);
    });
  });
});
