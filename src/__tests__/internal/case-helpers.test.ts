import { convertToSnakeCase } from '../../internal/api/case-helpers.js';

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

    test('preserves customData that is already snake_case', () => {
      const input = {
        custom_data: {
          tenantId: 'abc-123',
        },
        notificationId: 'ntf_123',
        payload: {
          custom_data: {
            nestedKey: 'value2',
          },
        },
      };

      const result = convertToSnakeCase(input);

      expect(result).toEqual({
        custom_data: {
          tenantId: 'abc-123',
        },
        notification_id: 'ntf_123',
        payload: {
          custom_data: {
            nestedKey: 'value2',
          },
        },
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
});
