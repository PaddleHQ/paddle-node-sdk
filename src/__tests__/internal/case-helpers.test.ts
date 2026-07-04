import { convertToSnakeCase } from '../../internal/api/case-helpers';

describe('convertToSnakeCase', () => {
  describe('customData preservation', () => {
    test('preserves camelCase keys inside top-level customData', () => {
      const input = {
        customData: {
          tenantId: 'abc-123',
          userRole: 'admin',
          isActive: true,
        },
        notificationId: 'ntf_123',
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        custom_data: {
          tenantId: 'abc-123',
          userRole: 'admin',
          isActive: true,
        },
        notification_id: 'ntf_123',
      });
    });

    test('preserves camelCase keys inside nested customData (one level)', () => {
      const input = {
        payload: {
          data: {
            customData: {
              tenantId: 'abc-123',
              subscriptionType: 'premium',
            },
          },
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        payload: {
          data: {
            custom_data: {
              tenantId: 'abc-123',
              subscriptionType: 'premium',
            },
          },
        },
      });
    });

    test('preserves camelCase keys inside deeply nested customData', () => {
      const input = {
        deeply: {
          nested: {
            object: {
              structure: {
                customData: {
                  userId: '123',
                  accountType: 'business',
                  isVerified: true,
                },
              },
            },
          },
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        deeply: {
          nested: {
            object: {
              structure: {
                custom_data: {
                  userId: '123',
                  accountType: 'business',
                  isVerified: true,
                },
              },
            },
          },
        },
      });
    });

    test('preserves multiple customData fields at different nesting levels', () => {
      const input = {
        customData: {
          topLevelKey: 'value1',
        },
        payload: {
          data: {
            customData: {
              nestedKey: 'value2',
            },
          },
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        custom_data: {
          topLevelKey: 'value1',
        },
        payload: {
          data: {
            custom_data: {
              nestedKey: 'value2',
            },
          },
        },
      });
    });

    test('preserves customData in simulation payload structure', () => {
      const input = {
        notificationSettingId: 'ntfset_01',
        name: 'test renewal',
        type: 'transaction.completed',
        payload: {
          data: {
            customData: {
              tenantId: 'abc-123',
              organizationType: 'enterprise',
            },
            transactionId: 'txn_123',
          },
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        notification_setting_id: 'ntfset_01',
        name: 'test renewal',
        type: 'transaction.completed',
        payload: {
          data: {
            custom_data: {
              tenantId: 'abc-123',
              organizationType: 'enterprise',
            },
            transaction_id: 'txn_123',
          },
        },
      });
    });

    test('preserves customData with nested objects inside', () => {
      const input = {
        customData: {
          metadata: {
            createdBy: 'user123',
            lastModified: '2026-07-04',
          },
          tags: ['urgent', 'vip'],
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        custom_data: {
          metadata: {
            createdBy: 'user123',
            lastModified: '2026-07-04',
          },
          tags: ['urgent', 'vip'],
        },
      });
    });

    test('preserves customData that is already snake_case', () => {
      const input = {
        custom_data: {
          tenantId: 'abc-123',
        },
        notificationId: 'ntf_123',
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        custom_data: {
          tenantId: 'abc-123',
        },
        notification_id: 'ntf_123',
      });
    });
  });

  describe('normal field conversion', () => {
    test('converts camelCase keys to snake_case', () => {
      const input = {
        notificationSettingId: 'abc',
        customerId: 'xyz',
        transactionId: '123',
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        notification_setting_id: 'abc',
        customer_id: 'xyz',
        transaction_id: '123',
      });
    });

    test('handles nested objects without customData', () => {
      const input = {
        eventData: {
          userId: '123',
          accountType: 'premium',
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        event_data: {
          user_id: '123',
          account_type: 'premium',
        },
      });
    });

    test('handles arrays of objects', () => {
      const input = {
        items: [
          { priceId: 'pri_123', quantity: 10 },
          { priceId: 'pri_456', quantity: 5 },
        ],
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        items: [
          { price_id: 'pri_123', quantity: 10 },
          { price_id: 'pri_456', quantity: 5 },
        ],
      });
    });

    test('handles arrays with objects containing customData', () => {
      const input = {
        discounts: [
          {
            discountId: 'dis_123',
            customData: {
              campaignName: 'summer-sale',
            },
          },
          {
            discountId: 'dis_456',
            customData: {
              campaignName: 'winter-promo',
            },
          },
        ],
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        discounts: [
          {
            discount_id: 'dis_123',
            custom_data: {
              campaignName: 'summer-sale',
            },
          },
          {
            discount_id: 'dis_456',
            custom_data: {
              campaignName: 'winter-promo',
            },
          },
        ],
      });
    });

    test('handles NonCatalogDiscount with nested customData (transaction scenario)', () => {
      const input = {
        status: 'draft',
        customerId: 'ctm_123',
        discountId: null,
        discount: {
          amount: '250',
          description: 'NCD for create',
          type: 'flat',
          recur: false,
          maximumRecurringIntervals: null,
          customData: {
            internal_reference: 'create_ref',
            campaignId: 'camp_456',
          },
          restrictTo: ['pri_123'],
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        status: 'draft',
        customer_id: 'ctm_123',
        discount_id: null,
        discount: {
          amount: '250',
          description: 'NCD for create',
          type: 'flat',
          recur: false,
          maximum_recurring_intervals: null,
          custom_data: {
            internal_reference: 'create_ref',
            campaignId: 'camp_456',
          },
          restrict_to: ['pri_123'],
        },
      });
    });
  });

  describe('edge cases', () => {
    test('handles null input', () => {
      const result = convertToSnakeCase(null);
      expect(result).toBeNull();
    });

    test('handles undefined input', () => {
      const result = convertToSnakeCase(undefined);
      expect(result).toBeUndefined();
    });

    test('handles empty object', () => {
      const result = convertToSnakeCase({});
      expect(result).toEqual({});
    });

    test('handles object with only customData', () => {
      const input = {
        customData: {
          someKey: 'someValue',
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        custom_data: {
          someKey: 'someValue',
        },
      });
    });

    test('handles customData with null value', () => {
      const input = {
        customData: null,
        userId: '123',
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        custom_data: null,
        user_id: '123',
      });
    });

    test('handles customData with empty object', () => {
      const input = {
        customData: {},
        userId: '123',
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        custom_data: {},
        user_id: '123',
      });
    });

    test('preserves Date objects', () => {
      const date = new Date('2026-07-04');
      const input = {
        createdAt: date,
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        created_at: date,
      });
    });
  });

  describe('mixed scenarios', () => {
    test('handles customData alongside normal camelCase fields', () => {
      const input = {
        eventName: 'test.event',
        notificationId: 'ntf_123',
        customData: {
          userId: '123',
          accountType: 'premium',
        },
        metadata: {
          createdBy: 'system',
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        event_name: 'test.event',
        notification_id: 'ntf_123',
        custom_data: {
          userId: '123',
          accountType: 'premium',
        },
        metadata: {
          created_by: 'system',
        },
      });
    });

    test('handles complex nested structure with multiple customData fields', () => {
      const input = {
        transaction: {
          transactionId: 'txn_123',
          customData: {
            orderId: 'ord_456',
          },
          items: [
            {
              priceId: 'pri_789',
              product: {
                productId: 'pro_012',
                customData: {
                  sku: 'SKU-123',
                },
              },
            },
          ],
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        transaction: {
          transaction_id: 'txn_123',
          custom_data: {
            orderId: 'ord_456',
          },
          items: [
            {
              price_id: 'pri_789',
              product: {
                product_id: 'pro_012',
                custom_data: {
                  sku: 'SKU-123',
                },
              },
            },
          ],
        },
      });
    });
  });
});
