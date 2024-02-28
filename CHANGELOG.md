# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Check our main [developer changelog](https://developer.paddle.com/?utm_source=dx&utm_medium=paddle-node-sdk) for information about changes to the Paddle Billing platform, the Paddle API, and other developer tools.

## 1.0.2 - 2024-XX-XX

### Added

- Added `createdAt` and `updatedAt` to product and price entities, see [related changelog](https://developer.paddle.com/changelog/2024/product-price-dates?utm_source=dx&utm_medium=paddle-node-sdk).

---

## 1.0.2 - 2024-03-12

### Added

- Exported `ApiError` class for usage in `try/catch` block.

### Changed

- Added `customerId` property to `Address` and `Business` entities, see [related changelog](https://developer.paddle.com/changelog/2024/address-business-webhooks-customer-id?utm_source=dx&utm_medium=paddle-node-sdk).

---

## 1.0.1 - 2024-02-20

### Changed

- Removed early access notice from README and Changelog.

---

## 1.0.0 - 2024-02-20

### Changed

- Updated Package version to `1.0.0`

---

## 0.6.0 - 2024-02-20

> **Breaking changes:** This version includes major improvements that introduce breaking changes. These are called out below.

### Removed

- **Breaking change:** Removed `*Includes` entity in favour of standard entities.
  
  - Use `Price` instead of `PriceWithIncludes`
  - Use `Product` instead of `ProductWithIncludes`
  - Use `Subscription` instead of `SubscriptionIncludes`
  - Use `Transaction` instead of `TransactionIncludes`

---

## 0.5.0 - 2024-02-16

> **Breaking changes:** This version includes major improvements that introduce breaking changes. These are called out below.

### Changed

- We removed the shared entities between API and Notification as we foresee them diverging. No Action required for this change

---

## 0.4.0 - 2024-02-14

### Added

- Added `availablePaymentMethods` as an `include` Parameter to all transaction operations.
- Added `importMeta` to Subscription webhooks.

### Changed

- Filter customers by email address in `customers.list()` operation, see [related changelog](https://developer.paddle.com/changelog/2024/filter-customers-email?utm_source=dx&utm_medium=paddle-node-sdk).
- New payment method ID field for transaction payments, see [related changelog](https://developer.paddle.com/changelog/2024/payment-method-paddle-id?utm_source=dx&utm_medium=paddle-node-sdk).

### Fixed

- Fixed `effective_from` enum in Resume subscription operations.

### Deprecated

- Deprecated `storedPaymentMethodId` from transaction payments in favour of `paymentMethodId` field.

---

## 0.3.0 - 2024-01-11

### Changed

- The repo and the npm package is now generally available.

---

## 0.2.9 - 2024-01-11

### Fixed

- Marked `endsAt` as optional in discount under Subscriptions entity.

---

## 0.2.8 - 2024-01-09

### Fixed

- Marked `unitPriceOverrides` as optional in Price entity. 

---

## 0.2.7 - 2024-01-04

### Fixed

- Marked all properties in `ListNotificationQueryParameters` as optional.
- Removed additional `?` from URLS in List Reports and List Notifications functions.
- Fixed incorrect enum in Adjustment `type`

---

## 0.2.6 - 2023-12-22

### Added

- Added support for `address.imported`, `business.imported`, `customer.imported`, `price.imported` and `product.imported` notifications.

### Changed

- Added support to get available payment methods when previewing prices or transactions, see [related changelog](https://developer.paddle.com/changelog/2023/available-payment-methods?utm_source=dx&utm_medium=paddle-node-sdk).
- Added support to bill a one time non-catalog products and prices to subscription, see [related changelog](https://developer.paddle.com/changelog/2023/bill-custom-items-one-time-subscription-charge?utm_source=dx&utm_medium=paddle-node-sdk).
- Added support for non-catalog products and prices to transaction, see [related changelog](https://developer.paddle.com/changelog/2023/add-custom-items-transaction?utm_source=dx&utm_medium=paddle-node-sdk).
- Added `subscription.onPaymentFailure` to update subscriptions and preview update subscription operations, see [related changelog](https://developer.paddle.com/changelog/2023/payment-failure-behavior-update-subscription?utm_source=dx&utm_medium=paddle-node-sdk).

---

## 0.2.5 - 2023-12-15

### Added

- Added `reports.list()` to [list reports](https://developer.paddle.com/api-reference/reports/list-reports?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `reports.create()` to [create a new report](https://developer.paddle.com/api-reference/reports/create-report?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `reports.get()` to [get a report](https://developer.paddle.com/api-reference/reports/get-report?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `reports.getReportCsv()` to [get a CSV file for a report](https://developer.paddle.com/api-reference/reports/get-report-csv?utm_source=dx&utm_medium=paddle-node-sdk)

---

## 0.2.4 - 2023-12-14

### Changed

- Added `importMeta` to address, business, customer, discount and subscription entities
- Added `creditToBalance` to `transaction.details.payoutTotals` and `transaction.details.totals`
- Added `origin` query parameter to list transactions, see [related changelog](https://developer.paddle.com/changelog/2023/filter-transactions-origin?utm_source=dx&utm_medium=paddle-node-sdk).

---

## 0.2.3 - 2023-12-12

### Added

- Added `eventTypes.list()` to [list all event types](https://developer.paddle.com/api-reference/event-types/list-event-types?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `notificationSettings.list()` to [list all notification settings](https://developer.paddle.com/api-reference/notification-settings/list-notification-settings?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `notificationSettings.create()` to [create a notification settings](https://developer.paddle.com/api-reference/notification-settings/create-notification-setting?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `notificationSettings.get()` to [get a notification settings](https://developer.paddle.com/api-reference/notification-settings/get-notification-setting?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `notificationSettings.update()` to [update a notification settings](https://developer.paddle.com/api-reference/notification-settings/update-notification-setting?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `notificationSettings.delete()` to [delete a notification settings](https://developer.paddle.com/api-reference/notification-settings/delete-notification-setting?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `notifications.list()` to [list all notifications](https://developer.paddle.com/api-reference/notifications/list-notifications?utm_source=dx&utm_medium=paddle-node-sdk) 
- Added `notifications.get()` to [get a notification](https://developer.paddle.com/api-reference/notifications/get-notification?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `notifications.replay()` to [replay a notification](https://developer.paddle.com/api-reference/notifications/replay-notification?utm_source=dx&utm_medium=paddle-node-sdk)
- Added `notifications.getLogs()` to [get all logs for a notification](https://developer.paddle.com/api-reference/notification-logs/list-notification-logs?utm_source=dx&utm_medium=paddle-node-sdk)

### Fixed

- Fixed incorrect type of `action` in `subscriptions.scheduled_change`

---

## 0.2.2 - 2023-12-01

### Added

- Added `events.list()` to [list all events](https://developer.paddle.com/api-reference/events/list-events?utm_source=dx&utm_medium=paddle-node-sdk)
- Added helper function `paddle.webhooks.unmarshal` to [validate](https://developer.paddle.com/webhooks/signature-verification?utm_source=dx&utm_medium=paddle-node-sdk) and parse webhook events

---

## 0.2.1 - 2023-11-29

### Added

- Added helper function to archive supported entities
- Added `pricingPreview.preview()` to [preview calculations for one or more prices](https://developer.paddle.com/api-reference/pricing-preview/preview-prices?utm_source=dx&utm_medium=paddle-node-sdk) 

### Changed

- **Breaking change:** Converted all `list` operations to be synchronous. They did not have any async operation within them, and it was incorrectly typed to return a `Promise`.

---

## 0.2.0 - 2023-11-28

> **Breaking changes:** This version includes major improvements that introduce breaking changes. These are called out below.

### Added

- Added `lodash` as a dependency.
- Added `customData` to discount entity, see: [related changelog](https://developer.paddle.com/changelog/2023/custom-data-discounts?utm_source=dx&utm_medium=paddle-node-sdk).
- Added `name` to price entity, see [related changelog](https://developer.paddle.com/changelog/2023/price-name-description?utm_source=dx&utm_medium=paddle-node-sdk).
- Added `importMeta` to product and price entities.

### Fixed

- Fixed [list credit balances for a customer](https://developer.paddle.com/api-reference/customers/list-credit-balances?utm_source=dx&utm_medium=paddle-node-sdk) response entity.
- Fixed `adjustments` array in `next_transaction` object in subscription entity.

### Changed

- **Breaking change:** Converted all properties from `snake_case` to `camelCase`. This matches JavaScript conventions for field names.

### Removed

- **Breaking change:** Removed `toJson` function from all entities.

---

## 0.1.8 - 2023-11-24

### Added

- Added `transactions.preview()` to [preview a transaction](https://developer.paddle.com/api-reference/transactions/preview-transaction?utm_source=dx&utm_medium=paddle-node-sdk) operation.

---

## 0.1.7 - 2023-11-23

### Added

- Added changelog.

--- 

## 0.1.6 - 2023-11-22

### Fixed

- Fixed optional management URL object in subscription entities.

--- 

## 0.1.5 - 2023-11-14

### Added

- Added `transactions.getInvoicePDF()` for the [get a PDF invoice for a transaction](https://developer.paddle.com/api-reference/transactions/get-invoice-pdf?utm_source=dx&utm_medium=paddle-node-sdk) operation.
- Enabled request and response logging.

---

## 0.1.4 - 2023-11-09

### Removed

- Removed unused dependency `lodash`.

---

## 0.1.3 - 2023-11-08

### Fixed

- Added missing query parameters for the [list transactions](https://developer.paddle.com/api-reference/transactions/list-transactions?utm_source=dx&utm_medium=paddle-node-sdk) operation.

---

## 0.1.2 - 2023-11-06

### Fixed

- Fixed incorrect update subscription request body TypeScript definition.

---

## 0.1.1 - 2023-11-06

### Added

- Added `customers.getCreditBalance()` for the [list credit balances for a customer](https://developer.paddle.com/api-reference/customers/list-credit-balances?utm_source=dx&utm_medium=paddle-node-sdk) operation.
- Added `subscriptions.previewUpdate()` for the [preview an update to a subscription](https://developer.paddle.com/api-reference/subscriptions/preview-subscription?utm_source=dx&utm_medium=paddle-node-sdk) operation.
- Added `subscriptions.activate()` for the [activate a trialing subscription](https://developer.paddle.com/api-reference/subscriptions/activate-subscription?utm_source=dx&utm_medium=paddle-node-sdk) operation.
- Added `subscriptions.pause()` for the [pause a subscription](https://developer.paddle.com/api-reference/subscriptions/pause-subscription?utm_source=dx&utm_medium=paddle-node-sdk) operation.
- Added `subscriptions.resume()` for the [resume a paused subscription](https://developer.paddle.com/api-reference/subscriptions/resume-subscription?utm_source=dx&utm_medium=paddle-node-sdk) operation.
- Added `subscriptions.cancel()` for the [cancel a subscription](https://developer.paddle.com/api-reference/subscriptions/cancel-subscription?utm_source=dx&utm_medium=paddle-node-sdk) operation.
- Added `subscriptions.createOneTimeCharge()` for the [create a one-time charge for a subscription](https://developer.paddle.com/api-reference/subscriptions/create-one-time-charge?utm_source=dx&utm_medium=paddle-node-sdk) operation.
- Added `subscriptions.previewOneTimeCharge()` for the [preview a one-time charge for a subscription](https://developer.paddle.com/api-reference/subscriptions/preview-subscription-charge?utm_source=dx&utm_medium=paddle-node-sdk) operation.
- Added `subscriptions.getPaymentMethodChangeTransaction()` for the [get a transaction to update payment method](https://developer.paddle.com/api-reference/subscriptions/update-payment-method?utm_source=dx&utm_medium=paddle-node-sdk) operation.

---

## 0.1.0 - 2023-11-03

### Added

- Initial early access release. Added support for the most frequently used Paddle Billing entities and API operations. Check the [README](./README.md) for more information.
