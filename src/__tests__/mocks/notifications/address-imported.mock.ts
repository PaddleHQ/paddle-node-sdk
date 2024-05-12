/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { IAddressNotificationResponse } from '../../../notifications/index.js';
import { IEventsResponse } from '../../../types/index.js';

export const AddressImportedMock: IEventsResponse<IAddressNotificationResponse> = {
  event_id: 'evt_01hhy7cva3jgaez82k6n4n3x4b',
  event_type: 'address.imported',
  occurred_at: '2023-08-18T12:07:37.194676Z',
  notification_id: 'ntf_01hhvz7kcx82qj48zwna584bc0',
  data: {
    id: 'add_01h848pep46enq8y372x7maj0p',
    city: 'New York',
    region: 'NY',
    status: 'active',
    created_at: '2023-08-18T12:07:36.9Z',
    first_line: '4050 Jefferson Plaza, 41st Floor',
    updated_at: '2023-08-18T12:07:36.9Z',
    description: 'Head Office',
    postal_code: '10021',
    second_line: null,
    country_code: 'US',
    custom_data: null,
    import_meta: { external_id: '59f25141-28c3-4447-b77c-dae5677537f0', imported_from: 'billing_platform' },
  },
};

export const AddressImportedMockExpectation = {
  data: {
    city: 'New York',
    countryCode: 'US',
    createdAt: '2023-08-18T12:07:36.9Z',
    customData: null,
    customerId: null,
    description: 'Head Office',
    firstLine: '4050 Jefferson Plaza, 41st Floor',
    id: 'add_01h848pep46enq8y372x7maj0p',
    importMeta: {
      externalId: '59f25141-28c3-4447-b77c-dae5677537f0',
      importedFrom: 'billing_platform',
    },
    postalCode: '10021',
    region: 'NY',
    secondLine: null,
    status: 'active',
    updatedAt: '2023-08-18T12:07:36.9Z',
  },
  eventId: 'evt_01hhy7cva3jgaez82k6n4n3x4b',
  eventType: 'address.imported',
  notificationId: 'ntf_01hhvz7kcx82qj48zwna584bc0',
  occurredAt: '2023-08-18T12:07:37.194676Z',
};
