/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { ICustomerResponse, IEventsResponse } from '../../../types/index.js';

export const CustomerImportedMock: IEventsResponse<ICustomerResponse> = {
  event_id: 'evt_01hhvz7k8twkw75ez34836tj0x',
  event_type: 'customer.imported',
  occurred_at: '2023-08-18T10:46:18.792661Z',
  notification_id: 'ntf_01hhvz7kcgagx9afxemvb9gb1n',
  data: {
    id: 'ctm_01h8441jn5pcwrfhwh78jqt8hk',
    name: 'Sam Miller',
    email: 'sam@example.com',
    locale: 'en',
    status: 'active',
    custom_data: { customer_reference_id: 'abcd1234' },
    created_at: '2023-08-18T10:46:18.533Z',
    updated_at: '2023-08-18T10:46:18.533Z',
    marketing_consent: false,
    import_meta: { external_id: '4f626321-f3af-46f6-925e-d1cb315e89f0', imported_from: 'billing_platform' },
  },
};

export const CustomerImportedMockExpectation = {
  data: {
    createdAt: '2023-08-18T10:46:18.533Z',
    customData: {
      customer_reference_id: 'abcd1234',
    },
    email: 'sam@example.com',
    id: 'ctm_01h8441jn5pcwrfhwh78jqt8hk',
    importMeta: {
      externalId: '4f626321-f3af-46f6-925e-d1cb315e89f0',
      importedFrom: 'billing_platform',
    },
    locale: 'en',
    marketingConsent: false,
    name: 'Sam Miller',
    status: 'active',
    updatedAt: '2023-08-18T10:46:18.533Z',
  },
  eventId: 'evt_01hhvz7k8twkw75ez34836tj0x',
  eventType: 'customer.imported',
  notificationId: 'ntf_01hhvz7kcgagx9afxemvb9gb1n',
  occurredAt: '2023-08-18T10:46:18.792661Z',
};
