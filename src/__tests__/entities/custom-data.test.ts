import { CustomData } from '../../entities/index.js';

interface IMyCustomData {
  customer_reference_id: string;
}

describe('CustomData', () => {
  test('without casting to a custom type', () => {
    const customData: CustomData = { customer_reference_id: 'abcd1234' };

    expect(customData['customer_reference_id']).toBe('abcd1234');
  });

  test('casts to a custom type', () => {
    const customData: CustomData = { customer_reference_id: 'abcd1234' };
    const myCustomData = customData as IMyCustomData;

    expect(myCustomData?.customer_reference_id).toBe('abcd1234');
  });
});
