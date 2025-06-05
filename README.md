# Paddle Node.js SDK

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/paddlehq/paddle-node-sdk/build-test.yml)](https://github.com/PaddleHQ/paddle-node-sdk/actions/workflows/build-test.yml?query=branch%3Amain)
[![NPM Version](https://img.shields.io/npm/v/%40paddle%2Fpaddle-node-sdk)](https://www.npmjs.com/package/@paddle/paddle-node-sdk?activeTab=versions)
[![NPM Downloads](https://img.shields.io/npm/dm/%40paddle%2Fpaddle-node-sdk)](https://www.npmjs.com/package/@paddle/paddle-node-sdk)
[![GitHub License](https://img.shields.io/github/license/paddlehq/paddle-node-sdk)](https://github.com/PaddleHQ/paddle-node-sdk/blob/main/LICENSE)


[Paddle Billing](https://www.paddle.com/billing?utm_source=dx&utm_medium=paddle-node-sdk) is a complete digital product sales and subscription management platform, designed for modern software businesses. It helps you increase your revenue, retain customers, and scale your operations.

This is a [Node.js](https://nodejs.org/) SDK that you can use to integrate Paddle Billing with applications written in server-side JavaScript.

For working with Paddle in your frontend, use [Paddle.js](https://developer.paddle.com/paddlejs/overview?utm_source=dx&utm_medium=paddle-node-sdk). You can open checkouts, securely collect payment information, build pricing pages, and integrate with Paddle Retain.  

> **Important:** This package works with Paddle Billing. It does not support Paddle Classic. To work with Paddle Classic, see: [Paddle Classic API reference](https://developer.paddle.com/classic/api-reference/1384a288aca7a-api-reference?utm_source=dx&utm_medium=paddle-node-sdk)

## Installation

Install using `npm`:

```sh
npm install @paddle/paddle-node-sdk
```

Install using `yarn`:

```sh
yarn add @paddle/paddle-node-sdk
```

Install using `pnpm`:

```sh
pnpm add @paddle/paddle-node-sdk
```

## Usage

To authenticate, you'll need an API key. You can create and manage API keys in **Paddle > Developer tools > Authentication**. 

Pass your API key while initializing a new Paddle client.

``` typescript
import { Environment, LogLevel, Paddle } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')
```

You can also pass an environment to work with the sandbox:

```typescript
const paddle = new Paddle('API_KEY', {
  environment: Environment.production, // or Environment.sandbox for accessing sandbox API
  logLevel: LogLevel.verbose, // or LogLevel.error for less verbose logging
  customHeaders: {
    'X-Custom-Header': 'value' // Optional custom headers
  }
})
```

Keep in mind that API keys are separate for your sandbox and live accounts, so you'll need to generate keys for each environment.

## Work with TypeScript

This SDK comes with TypeScript definitions for the Paddle API. We recommend that you update frequently to keep the TypeScript definitions up-to-date with the API. Use `// @ts-ignore` to prevent any type error if you don't want to update.

### Versioning

When we make [non-breaking changes](https://developer.paddle.com/api-reference/about/versioning?utm_source=dx&utm_medium=paddle-node-sdk#non-breaking-change) to the Paddle API, we'll only release a new major version of the Node.js SDK when it causes problems at runtime. We won't release a new version of the SDK when we weaken TypeScript types in a way that doesn't cause existing implementations to break or malfunction. For example, if we add a new field to a request or an allowed value for a field in a response, this weakens the Typescript type but does not cause existing usages to stop working.

This means when upgrading minor versions of the SDK, you may notice type errors. You can safely ignore these or fix by adding additional type guards.

## Naming conventions

Properties in the Paddle API use `snake_case`. To follow JavaScript conventions, properties in this SDK use `camelCase`. This means:

* Convert `snake_case` field names in the API docs to `camelCase` when creating or updating entities using the SDK.
* Responses match the API docs, but field names are `camelCase` rather than `snake_case`.

## Examples

### List entities

You can list supported entities with the `list` function in the resource.

When you call a list function, it returns an iterator object. This object doesn't fetch any data from the API right away.

**You must call the `next()` method** on this iterator to retrieve the first page of results (e.g., `await productCollection.next()`). Calling `next()` again will fetch the subsequent page.

<details open>
<summary style="font-size: 1.1rem;">Products (products.list())</summary>

```typescript
import { Paddle, Product, ProductCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedProducts() {
    try {
        // Returns an iterator instance
        const productCollection: ProductCollection = paddle.products.list()
    
        // Call `next()` to retrieve the first page of the dataset.
        const firstPage: Product[] = await productCollection.next()
        console.log("First page of products:", firstPage)
        
        if (productCollection.hasMore) {
            // Calling `next()` again will retrieve subsequent pages.
            const secondPage: Product[] = await productCollection.next()
            console.log("Second page of products:", secondPage)
        } else {
            console.log("No more pages of products available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated products:", e)
    }
}

getPaginatedProducts()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllProducts(): Promise<Product[]> {
  const productCollection: ProductCollection = paddle.products.list()
  const allItems: Product[] = []

  try {
    for await (const product of productCollection) {
        allItems.push(product)
    }
    if (allItems.length === 0) {
        console.log('No products were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllProducts:', e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Subscriptions (subscriptions.list())</summary>

```typescript
import { Paddle, Subscription, SubscriptionCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedSubscriptions() {
    try {
        const subscriptionCollection: SubscriptionCollection = paddle.subscriptions.list()
        
        const firstPage: Subscription[] = await subscriptionCollection.next()
        console.log("First page of subscriptions:", firstPage)
        
        if (subscriptionCollection.hasMore) {
            const secondPage: Subscription[] = await subscriptionCollection.next()
            console.log("Second page of subscriptions:", secondPage)
        } else {
            console.log("No more pages of subscriptions available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated subscriptions:", e)
    }
}

getPaginatedSubscriptions()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllSubscriptions(): Promise<Subscription[]> {
  const subscriptionCollection: SubscriptionCollection = paddle.subscriptions.list()
  const allItems: Subscription[] = []
  try {
    for await (const subscription of subscriptionCollection) {
        allItems.push(subscription)
    }
    if (allItems.length === 0) {
        console.log('No subscriptions were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllSubscriptions:', e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Customers (customers.list())</summary>

```typescript
import { Paddle, Customer, CustomerCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedCustomers() {
    try {
        const customerCollection: CustomerCollection = paddle.customers.list()
        
        const firstPage: Customer[] = await customerCollection.next()
        console.log("First page of customers:", firstPage)
        
        if (customerCollection.hasMore) {
            const secondPage: Customer[] = await customerCollection.next()
            console.log("Second page of customers:", secondPage)
        } else {
            console.log("No more pages of customers available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated customers:", e)
    }
}

getPaginatedCustomers()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllCustomers(): Promise<Customer[]> {
  const customerCollection: CustomerCollection = paddle.customers.list()
  const allItems: Customer[] = []
  try {
    for await (const customer of customerCollection) {
        allItems.push(customer)
    }
    if (allItems.length === 0) {
        console.log('No customers were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllCustomers:', e)
    throw e
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Addresses (addresses.list())</summary>

```typescript
import { Paddle, Address, AddressCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedAddresses(customerId: string) {
    try {
        // Note: addresses.list() requires a customerId
        const addressCollection: AddressCollection = paddle.addresses.list(customerId)
        
        const firstPage: Address[] = await addressCollection.next()
        console.log(`First page of addresses for customer ${customerId}:`, firstPage)
        
        if (addressCollection.hasMore) {
            const secondPage: Address[] = await addressCollection.next()
            console.log(`Second page of addresses for customer ${customerId}:`, secondPage)
        } else {
            console.log(`No more pages of addresses available for customer ${customerId} after the first page.`)
        }
    } catch (e) {
        console.error(`Error fetching paginated addresses for customer ${customerId}:`, e)
    }
}

getPaginatedAddresses('ctm_01grnn4zta5a1mf02jjze7y2ys')
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllAddresses(customerId: string): Promise<Address[]> {
  // Note: addresses.list() requires a customerId
  const addressCollection: AddressCollection = paddle.addresses.list(customerId)
  const allItems: Address[] = []
  try {
    for await (const address of addressCollection) {
        allItems.push(address)
    }
    if (allItems.length === 0) {
        console.log(`No addresses were found for customer ${customerId}.`)
    }
    return allItems
  } catch (e) {
    console.error(`Error within getAllAddresses for customer ${customerId}:`, e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Adjustments (adjustments.list())</summary>

```typescript
import { Paddle, Adjustment, AdjustmentCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedAdjustments() {
    try {
        const adjustmentCollection: AdjustmentCollection = paddle.adjustments.list()
        
        const firstPage: Adjustment[] = await adjustmentCollection.next()
        console.log("First page of adjustments:", firstPage)
        
        if (adjustmentCollection.hasMore) {
            const secondPage: Adjustment[] = await adjustmentCollection.next()
            console.log("Second page of adjustments:", secondPage)
        } else {
            console.log("No more pages of adjustments available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated adjustments:", e)
    }
}
getPaginatedAdjustments()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllAdjustments(): Promise<Adjustment[]> {
  const adjustmentCollection: AdjustmentCollection = paddle.adjustments.list()
  const allItems: Adjustment[] = []
  try {
    for await (const adjustment of adjustmentCollection) {
        allItems.push(adjustment)
    }
    if (allItems.length === 0) {
        console.log('No adjustments were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllAdjustments:', e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Businesses (businesses.list())</summary>

```typescript
import { Paddle, Business, BusinessCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedBusinesses(customerId: string) {
    try {
        // Note: businesses.list() requires a customerId
        const businessCollection: BusinessCollection = paddle.businesses.list(customerId)
        
        const firstPage: Business[] = await businessCollection.next()
        console.log(`First page of businesses for customer ${customerId}:`, firstPage)
        
        if (businessCollection.hasMore) {
            const secondPage: Business[] = await businessCollection.next()
            console.log(`Second page of businesses for customer ${customerId}:`, secondPage)
        } else {
            console.log(`No more pages of businesses available for customer ${customerId} after the first page.`)
        }
    } catch (e) {
        console.error(`Error fetching paginated businesses for customer ${customerId}:`, e)
    }
}
getPaginatedBusinesses('ctm_01grnn4zta5a1mf02jjze7y2ys')
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllBusinesses(customerId: string): Promise<Business[]> {
  // Note: businesses.list() requires a customerId
  const businessCollection: BusinessCollection = paddle.businesses.list(customerId)
  const allItems: Business[] = []
  try {
    for await (const business of businessCollection) {
        allItems.push(business)
    }
    if (allItems.length === 0) {
        console.log(`No businesses were found for customer ${customerId}.`)
    }
    return allItems
  } catch (e) {
    console.error(`Error within getAllBusinesses for customer ${customerId}:`, e)
    throw e 
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Discounts (discounts.list())</summary>

```typescript
import { Paddle, Discount, DiscountCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedDiscounts() {
    try {
        const discountCollection: DiscountCollection = paddle.discounts.list()
        
        const firstPage: Discount[] = await discountCollection.next()
        console.log("First page of discounts:", firstPage)
        
        if (discountCollection.hasMore) {
            const secondPage: Discount[] = await discountCollection.next()
            console.log("Second page of discounts:", secondPage)
        } else {
            console.log("No more pages of discounts available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated discounts:", e)
    }
}
getPaginatedDiscounts()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllDiscounts(): Promise<Discount[]> {
  const discountCollection: DiscountCollection = paddle.discounts.list()
  const allItems: Discount[] = []
  try {
    for await (const discount of discountCollection) {
        allItems.push(discount)
    }
    if (allItems.length === 0) {
        console.log('No discounts were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllDiscounts:', e)
    throw e
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Prices (prices.list())</summary>

```typescript
import { Paddle, Price, PriceCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedPrices() {
    try {
        const priceCollection: PriceCollection = paddle.prices.list()
        
        const firstPage: Price[] = await priceCollection.next()
        console.log("First page of prices:", firstPage)
        
        if (priceCollection.hasMore) {
            const secondPage: Price[] = await priceCollection.next()
            console.log("Second page of prices:", secondPage)
        } else {
            console.log("No more pages of prices available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated prices:", e)
    }
}
getPaginatedPrices()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllPrices(): Promise<Price[]> {
  const priceCollection: PriceCollection = paddle.prices.list()
  const allItems: Price[] = []
  try {
    for await (const price of priceCollection) {
        allItems.push(price)
    }
    if (allItems.length === 0) {
        console.log('No prices were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllPrices:', e)
    throw e
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Transactions (transactions.list())</summary>

```typescript
import { Paddle, Transaction, TransactionCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedTransactions() {
    try {
        const transactionCollection: TransactionCollection = paddle.transactions.list()
        
        const firstPage: Transaction[] = await transactionCollection.next()
        console.log("First page of transactions:", firstPage)
        
        if (transactionCollection.hasMore) {
            const secondPage: Transaction[] = await transactionCollection.next()
            console.log("Second page of transactions:", secondPage)
        } else {
            console.log("No more pages of transactions available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated transactions:", e)
    }
}
getPaginatedTransactions()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllTransactions(): Promise<Transaction[]> {
  const transactionCollection: TransactionCollection = paddle.transactions.list()
  const allItems: Transaction[] = []
  try {
    for await (const transaction of transactionCollection) {
        allItems.push(transaction)
    }
    if (allItems.length === 0) {
        console.log('No transactions were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllTransactions:', e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Payment Methods (paymentMethods.list())</summary>

```typescript
import { Paddle, PaymentMethod, PaymentMethodCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedPaymentMethods(customerId: string) {
    try {
        // Note: paymentMethods.list() requires a customerId
        const paymentMethodCollection: PaymentMethodCollection = paddle.paymentMethods.list(customerId)
        
        const firstPage: PaymentMethod[] = await paymentMethodCollection.next()
        console.log(`First page of payment methods for customer ${customerId}:`, firstPage)
        
        if (paymentMethodCollection.hasMore) {
            const secondPage: PaymentMethod[] = await paymentMethodCollection.next()
            console.log(`Second page of payment methods for customer ${customerId}:`, secondPage)
        } else {
            console.log(`No more pages of payment methods available for customer ${customerId} after the first page.`)
        }
    } catch (e) {
        console.error(`Error fetching paginated payment methods for customer ${customerId}:`, e)
    }
}
getPaginatedPaymentMethods('ctm_01grnn4zta5a1mf02jjze7y2ys')
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllPaymentMethods(customerId: string): Promise<PaymentMethod[]> {
  // Note: paymentMethods.list() requires a customerId
  const paymentMethodCollection: PaymentMethodCollection = paddle.paymentMethods.list(customerId)
  const allItems: PaymentMethod[] = []
  try {
    for await (const paymentMethod of paymentMethodCollection) {
        allItems.push(paymentMethod)
    }
    if (allItems.length === 0) {
        console.log(`No payment methods were found for customer ${customerId}.`)
    }
    return allItems
  } catch (e) {
    console.error(`Error within getAllPaymentMethods for customer ${customerId}:`, e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Notifications (notifications.list())</summary>

```typescript
import { Paddle, Notification, NotificationCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedNotifications() {
    try {
        const notificationCollection: NotificationCollection = paddle.notifications.list()
        
        const firstPage: Notification[] = await notificationCollection.next()
        console.log("First page of notifications:", firstPage)
        
        if (notificationCollection.hasMore) {
            const secondPage: Notification[] = await notificationCollection.next()
            console.log("Second page of notifications:", secondPage)
        } else {
            console.log("No more pages of notifications available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated notifications:", e)
    }
}
getPaginatedNotifications()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllNotifications(): Promise<Notification[]> {
  const notificationCollection: NotificationCollection = paddle.notifications.list()
  const allItems: Notification[] = []
  try {
    for await (const notification of notificationCollection) {
        allItems.push(notification)
    }
    if (allItems.length === 0) {
        console.log('No notifications were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllNotifications:', e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Reports (reports.list())</summary>

```typescript
import { Paddle, Report, ReportCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedReports() {
    try {
        const reportCollection: ReportCollection = paddle.reports.list()
        
        const firstPage: Report[] = await reportCollection.next()
        console.log("First page of reports:", firstPage)
        
        if (reportCollection.hasMore) {
            const secondPage: Report[] = await reportCollection.next()
            console.log("Second page of reports:", secondPage)
        } else {
            console.log("No more pages of reports available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated reports:", e)
    }
}
getPaginatedReports()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllReports(): Promise<Report[]> {
  const reportCollection: ReportCollection = paddle.reports.list()
  const allItems: Report[] = []
  try {
    for await (const report of reportCollection) {
        allItems.push(report)
    }
    if (allItems.length === 0) {
        console.log('No reports were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllReports:', e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Simulations (simulations.list())</summary>

```typescript
import { Paddle, Simulation, SimulationCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedSimulations() {
    try {
        const simulationCollection: SimulationCollection = paddle.simulations.list()
        
        const firstPage: Simulation[] = await simulationCollection.next()
        console.log("First page of simulations:", firstPage)
        
        if (simulationCollection.hasMore) {
            const secondPage: Simulation[] = await simulationCollection.next()
            console.log("Second page of simulations:", secondPage)
        } else {
            console.log("No more pages of simulations available after the first page.")
        }
    } catch (e) {
        console.error("Error fetching paginated simulations:", e)
    }
}
getPaginatedSimulations()
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllSimulations(): Promise<Simulation[]> {
  const simulationCollection: SimulationCollection = paddle.simulations.list()
  const allItems: Simulation[] = []
  try {
    for await (const simulation of simulationCollection) {
        allItems.push(simulation)
    }
    if (allItems.length === 0) {
        console.log('No simulations were found.')
    }
    return allItems
  } catch (e) {
    console.error('Error within getAllSimulations:', e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Simulation Runs (simulationRuns.list())</summary>

```typescript
import { Paddle, SimulationRun, SimulationRunCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedSimulationRuns(simulationId: string) {
    console.log(`Attempting to fetch paginated simulation runs for simulation ${simulationId}...`)
    try {
        // Note: simulationRuns.list() requires a simulationId
        const simulationRunCollection: SimulationRunCollection = paddle.simulationRuns.list(simulationId)
        
        const firstPage: SimulationRun[] = await simulationRunCollection.next()
        console.log(`First page of simulation runs for simulation ${simulationId}:`, firstPage)
        
        if (simulationRunCollection.hasMore) {
            const secondPage: SimulationRun[] = await simulationRunCollection.next()
            console.log(`Second page of simulation runs for simulation ${simulationId}:`, secondPage)
        } else {
            console.log(`No more pages of simulation runs available for simulation ${simulationId} after the first page.`)
        }
    } catch (e) {
        console.error(`Error fetching paginated simulation runs for simulation ${simulationId}:`, e)
    }
}
getPaginatedSimulationRuns('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk')
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllSimulationRuns(simulationId: string): Promise<SimulationRun[]> {
  const simulationRunCollection: SimulationRunCollection = paddle.simulationRuns.list(simulationId)
  const allItems: SimulationRun[] = []
  try {
    for await (const simulationRun of simulationRunCollection) {
        allItems.push(simulationRun)
    }
    if (allItems.length === 0) {
        console.log(`No simulation runs were found for simulation ${simulationId}.`)
    }
    return allItems
  } catch (e) {
    console.error(`Error within getAllSimulationRuns for simulation ${simulationId}:`, e)
    throw e // If you want to propagate the error
  }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Simulation Run Events (simulationRunEvents.list())</summary>

```typescript
import { Paddle, SimulationRunEvent, SimulationRunEventCollection } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaginatedSimulationRunEvents(simulationId: string, simulationRunId: string) {
    try {
        // Note: simulationRunEvents.list() requires simulationId and simulationRunId
        const collection: SimulationRunEventCollection = paddle.simulationRunEvents.list(simulationId, simulationRunId)
        
        const firstPage: SimulationRunEvent[] = await collection.next()
        console.log(`First page of events for sim ${simulationId}, run ${simulationRunId}:`, firstPage)
        
        if (collection.hasMore) {
            const secondPage: SimulationRunEvent[] = await collection.next()
            console.log(`Second page of events for sim ${simulationId}, run ${simulationRunId}:`, secondPage)
        } else {
            console.log(`No more pages of events for sim ${simulationId}, run ${simulationRunId} after the first page.`)
        }
    } catch (e) {
        console.error(`Error fetching paginated events for sim ${simulationId}, run ${simulationRunId}:`, e)
    }
}
getPaginatedSimulationRunEvents('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk', 'ntfsimrun_01ghbkd0frb9k95cnhwd1bxpvk')
```

You can optionally use these iterators with a `for await...of` loop to iterate over all items across all available pages.

```typescript
async function getAllSimulationRunEvents(simulationId: string, simulationRunId: string): Promise<SimulationRunEvent[]> {
  const collection: SimulationRunEventCollection = paddle.simulationRunEvents.list(simulationId, simulationRunId)
  const allItems: SimulationRunEvent[] = []
  try {
    for await (const event of collection) {
        allItems.push(event)
    }
    if (allItems.length === 0) {
        console.log(`No events found for sim ${simulationId}, run ${simulationRunId}.`)
    }
    return allItems
  } catch (e) {
    console.error(`Error within getAllSimulationRunEvents for sim ${simulationId}, run ${simulationRunId}:`, e)
    throw e // If you want to propagate the error
  }
}
```

</details>

### Create an entity

You can create a supported entity with the `create` function in the resource. It accepts the body to be created. The created entity is returned.


<details open>
<summary style="font-size: 1.1rem;">Products (products.create())</summary>

``` typescript
import { Paddle, CreateProductRequestBody } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createProduct(requestBody: CreateProductRequestBody) {
    try {
        const product = await paddle.products.create(requestBody)
        // Returns a product entity
        return product
    } catch (e) {
        // Handle Network/API errors
    }
}

const product = await createProduct({ name: 'ChatApp Education', taxCategory: 'standard' })
console.log("Product", product)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Transactions (transactions.create())</summary>

``` typescript
import { Paddle, CreateTransactionRequestBody, Transaction } from '@paddle/paddle-node-sdk' // Assuming types

const paddle = new Paddle('API_KEY')

async function createTransaction(requestBody: CreateTransactionRequestBody): Promise<Transaction | undefined> { // Assuming types
    try {
        const transaction = await paddle.transactions.create(requestBody)
        // Returns a transaction entity
        return transaction
    } catch (e) {
        // Handle Network/API errors
    }
}

const newTransaction = await createTransaction({ 
    items: [{ priceId: 'pri_01gsz8z1q1n00f12qt82y31smh', quantity: 1 }],
    customerId: 'ctm_01grnn4zta5a1mf02jjze7y2ys'
})
console.log("Transaction", newTransaction)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Addresses (addresses.create())</summary>

```typescript
import { Paddle, CreateAddressRequestBody, Address } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createAddress(customerId: string, requestBody: CreateAddressRequestBody): Promise<Address | undefined> {
    try {
        const address = await paddle.addresses.create(customerId, requestBody)
        return address
        // Returns an address entity
    } catch (e) {
        console.error('Error creating address:', e)
        // Handle Network/API errors
    }
}

const newAddress = await createAddress('ctm_01grnn4zta5a1mf02jjze7y2ys', { countryCode: 'US', description: 'Primary Address' })
console.log("New Address:", newAddress)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Adjustments (adjustments.create())</summary>

```typescript
import { Paddle, CreateAdjustmentRequestBody, Adjustment } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createAdjustment(requestBody: CreateAdjustmentRequestBody): Promise<Adjustment | undefined> {
    try {
        const adjustment = await paddle.adjustments.create(requestBody)
        return adjustment
        // Returns an adjustment entity
    } catch (e) {
        console.error('Error creating adjustment:', e)
        // Handle Network/API errors
    }
}

const newAdjustment = await createAdjustment({ transactionId: 'txn_01h04vsbhqc62t8hmd4z3b578c', items: [{ itemId: 'txnitm_01hvcc94b7qgz60qmrqmbm19zw', amount: '1000', type: 'partial' }], action: 'credit', reason: 'Refund for customer support' })
console.log("New Adjustment:", newAdjustment)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Businesses (businesses.create())</summary>

```typescript
import { Paddle, CreateBusinessRequestBody, Business } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createBusiness(customerId: string, requestBody: CreateBusinessRequestBody): Promise<Business | undefined> {
    try {
        const business = await paddle.businesses.create(customerId, requestBody)
        return business
        // Returns a business entity
    } catch (e) {
        console.error('Error creating business:', e)
        // Handle Network/API errors
    }
}

const newBusiness = await createBusiness('ctm_01grnn4zta5a1mf02jjze7y2ys', { name: 'Sample Inc.', companyNumber: '12345AB' })
console.log("New Business:", newBusiness)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Customers (customers.create())</summary>

```typescript
import { Paddle, CreateCustomerRequestBody, Customer } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createCustomer(requestBody: CreateCustomerRequestBody): Promise<Customer | undefined> {
    try {
        const customer = await paddle.customers.create(requestBody)
        return customer
        // Returns a customer entity
    } catch (e) {
        console.error('Error creating customer:', e)
        // Handle Network/API errors
    }
}

const newCustomer = await createCustomer({ email: 'customer@example.com', name: 'John Doe' })
console.log("New Customer:", newCustomer)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Customer Portal Sessions (customerPortalSessions.create())</summary>

```typescript
import { Paddle, CustomerPortalSession } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createCustomerPortalSession(customerId: string, subscriptionIds: string[]): Promise<CustomerPortalSession | undefined> {
    try {
        const session = await paddle.customerPortalSessions.create(customerId, subscriptionIds)
        return session
        // Returns a customer portal session entity
    } catch (e) {
        console.error('Error creating customer portal session:', e)
        // Handle Network/API errors
    }
}

const newSession = await createCustomerPortalSession('ctm_01grnn4zta5a1mf02jjze7y2ys', ['sub_01h04vsc0qhwtsbsxh3422wjs4'])
console.log("New Customer Portal Session:", newSession)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Discounts (discounts.create())</summary>

```typescript
import { Paddle, CreateDiscountRequestBody, Discount } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createDiscount(requestBody: CreateDiscountRequestBody): Promise<Discount | undefined> {
    try {
        const discount = await paddle.discounts.create(requestBody)
        return discount
        // Returns a discount entity
    } catch (e) {
        console.error('Error creating discount:', e)
        // Handle Network/API errors
    }
}

const newDiscount = await createDiscount({ amount: '1000', type: 'flat', description: '10 USD Off Coupon', currencyCode: 'USD', enabledForCheckout: true, code: 'SAVE10NOW' })
console.log("New Discount:", newDiscount)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Prices (prices.create())</summary>

```typescript
import { Paddle, CreatePriceRequestBody, Price } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createPrice(requestBody: CreatePriceRequestBody): Promise<Price | undefined> {
    try {
        const price = await paddle.prices.create(requestBody)
        return price
        // Returns a price entity
    } catch (e) {
        console.error('Error creating price:', e)
        // Handle Network/API errors
    }
}

const newPrice = await createPrice({ description: 'Premium Plan Monthly', productId: 'pro_01gsz97mq9pa4fkyy0wqenepkz', unitPrice: { amount: '2000', currencyCode: 'USD' }, billingCycle: { interval: 'month', frequency: 1 }, taxMode: 'account_setting' })
console.log("New Price:", newPrice)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Notification Settings (notificationSettings.create())</summary>

```typescript
import { Paddle, CreateNotificationSettingsRequestBody, NotificationSettings } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createNotificationSetting(requestBody: CreateNotificationSettingsRequestBody): Promise<NotificationSettings | undefined> {
    try {
        const notificationSetting = await paddle.notificationSettings.create(requestBody)
        return notificationSetting
        // Returns a notification setting entity
    } catch (e) {
        console.error('Error creating notification setting:', e)
        // Handle Network/API errors
    }
}

const newNotificationSetting = await createNotificationSetting({ description: 'Subscription Updates Webhook', type: 'url', destination: 'https://example.com/webhook/subscription-updates', subscribedEvents: ['subscription.updated', 'subscription.activated'], includeSensitiveFields: false })
console.log("New Notification Setting:", newNotificationSetting)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Reports (reports.create())</summary>

```typescript
import { Paddle, CreateReportRequestBody, Report } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createReport(requestBody: CreateReportRequestBody): Promise<Report | undefined> {
    try {
        const report = await paddle.reports.create(requestBody)
        return report
        // Returns a report entity
    } catch (e) {
        console.error('Error creating report:', e)
        // Handle Network/API errors
    }
}

const newReport = await createReport({ type: 'transaction_line_items' }) // See ReportType for other options
console.log("New Report:", newReport)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Simulations (simulations.create())</summary>

```typescript
import { Paddle, CreateSimulationRequestBody, Simulation } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

// Example 1: Creating a simulation for a single event (e.g., 'discount.created')
async function createDiscountEventSimulation() {
    try {
        // Base fields required for any simulation
        const name = 'Simulate Discount Creation Event'
        const notificationSettingId = 'ntfset_01gt21c5pdx9q1e4mh1xrsjjn6'

        const requestBody: CreateSimulationRequestBody = {
            name,
            notificationSettingId,
            type: 'discount.created', // See IEventName for all possible event types
            payload: {
                // These fields come from the DiscountNotification entity to provide partial data relevant to the 'discount.created' event
                description: 'End of Summer Sale - 10% Off',
                code: 'SUMMER10',
                type: 'percentage',
                amount: '10',
                enabledForCheckout: true,
                recur: false,
            },
        }

        const simulation = await paddle.simulations.create(requestBody)
        return simulation
        // Returns a simulation entity
    } catch (e) {
        console.error('Error creating discount.created simulation:', e)
        // Handle Network/API errors
    }
}

createDiscountEventSimulation()

// Example 2: Creating a simulation for a scenario (e.g., 'subscription_pause')
async function createSubscriptionPauseScenarioSimulation() {
    try {
        // Base fields required for any simulation
        const name = 'Simulate Subscription Pause Scenario'
        const notificationSettingId = 'ntfset_01gt21c5pdx9q1e4mh1xrsjjn6'

        const requestBody: CreateSimulationRequestBody = {
            name,
            notificationSettingId,
            type: 'subscription_pause', // See SimulationScenarioType for all possible scenario types
            config: {
                subscriptionPause: {
                    entities: {
                        subscriptionId: 'sub_01h04vsc0qhwtsbsxh3422wjs4'
                    },
                    options: {
                        effectiveFrom: 'next_billing_period', // See EffectiveFromType for all possible options
                        hasPastDueTransaction: false,
                    },
                },
            }
        }

        const simulation = await paddle.simulations.create(requestBody)
        return simulation
        // Returns a simulation entity
    } catch (e) {
        console.error('Error creating subscription_pause simulation:', e)
        // Handle Network/API errors
    }
}

createSubscriptionPauseScenarioSimulation()
```

</details>

<details>
<summary style="font-size: 1.1rem;">Simulation Runs (simulationRuns.create())</summary>

```typescript
import { Paddle, SimulationRun } from '@paddle/paddle-node-sdk' // No specific CreateRequestBody for this simple case

const paddle = new Paddle('API_KEY')

async function createSimulationRun(simulationId: string): Promise<SimulationRun | undefined> {
    try {
        const simulationRun = await paddle.simulationRuns.create(simulationId)
        return simulationRun
        // Returns a simulation run entity
    } catch (e) {
        console.error('Error creating simulation run:', e)
        // Handle Network/API errors
    }
}

const newSimulationRun = await createSimulationRun('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk')
console.log("New Simulation Run:", newSimulationRun)
```

</details>

### Update an entity
You can update a supported entity with the `update` function in the resource. It accepts the `id` of the entity to update and an object with the attributes to be updated. The updated entity is returned.

Where operations require more than one `id`, like for addresses and businesses, the `update` function accepts multiple arguments. For example, to update an address for a customer, pass the `customerId` and the `addressId`.

<details open>
<summary style="font-size: 1.1rem;">Products (products.update())</summary>

``` typescript
import { Paddle, UpdateProductRequestBody } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function updateProduct(productId: string, requestBody: UpdateProductRequestBody) {
    try {
        // Pass the product id and request body with the attributes to update
        const product = await paddle.products.update(productId, requestBody)
        // Returns an updated product entity
        return product
    } catch (e) {
        // Handle Network/API errors
    }
}

const product = await updateProduct('pro_01gsz97mq9pa4fkyy0wqenepkz', { name: 'ChatApp for Schools' })
console.log('Updated product', product)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Subscriptions (subscriptions.update())</summary>

``` typescript
import { Paddle, UpdateSubscriptionRequestBody, Subscription } from '@paddle/paddle-node-sdk' // Assuming types

const paddle = new Paddle('API_KEY')

async function updateSubscription(subscriptionId: string, requestBody: UpdateSubscriptionRequestBody): Promise<Subscription | undefined> { // Assuming types
    try {
        // Pass the subscription id and request body with the attributes to update
        const subscription = await paddle.subscriptions.update(subscriptionId, requestBody)
        // Returns an updated subscription entity
        return subscription
    } catch (e) {
        // Handle Network/API errors
    }
}

const updatedSubscription = await updateSubscription('sub_01h04vsc0qhwtsbsxh3422wjs4', { collectionMode: 'manual' })
console.log('Updated subscription', updatedSubscription)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Transactions (transactions.update())</summary>

(Note: Transaction updates might be limited to specific fields like customData or specific actions not covered by a generic update).

``` typescript
import { Paddle, UpdateTransactionRequestBody, Transaction } from '@paddle/paddle-node-sdk' // Assuming types

const paddle = new Paddle('API_KEY')

async function updateTransaction(transactionId: string, requestBody: UpdateTransactionRequestBody): Promise<Transaction | undefined> { // Assuming types
    try {
        // Pass the transaction id and request body with the attributes to update
        const transaction = await paddle.transactions.update(transactionId, requestBody)
        // Returns an updated transaction entity
        return transaction
    } catch (e) {
        // Handle Network/API errors
    }
}

const updatedTransaction = await updateTransaction('txn_01h04vsbhqc62t8hmd4z3b578c', { customData: { internal_reference: 'ref_abc123' } })
console.log('Updated transaction', updatedTransaction)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Addresses (addresses.update())</summary>

```typescript
import { Paddle, UpdateAddressRequestBody, Address } from '@paddle/paddle-node-sdk' // Assuming types

const paddle = new Paddle('API_KEY')

async function updateAddress(customerId: string, addressId: string, requestBody: UpdateAddressRequestBody): Promise<Address | undefined> { // Assuming types
    try {
        // Pass the customer id, address id and request body with the attributes to update
        const address = await paddle.addresses.update(customerId, addressId, requestBody)
        // Returns an updated address entity
        return address
    } catch (e) {
        // Handle Network/API errors
    }
}
```

</details>

<details>
<summary style="font-size: 1.1rem;">Businesses (businesses.update())</summary>

```typescript
import { Paddle, UpdateBusinessRequestBody, Business } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function updateBusiness(customerId: string, businessId: string, requestBody: UpdateBusinessRequestBody): Promise<Business | undefined> {
    try {
        // Pass the customer id, business id and request body with the attributes to update
        const business = await paddle.businesses.update(customerId, businessId, requestBody)
        // Returns an updated business entity
        return business
    } catch (e) {
        console.error(`Error updating business ${businessId} for customer ${customerId}:`, e)
        // Handle Network/API errors
    }
}

const updatedBusiness = await updateBusiness('ctm_01grnn4zta5a1mf02jjze7y2ys', 'biz_01grrebrzaee2qj2fqqhmcyzaj', { name: 'Sample Corp Updated', contacts: [{name: 'Jane Doe', email: 'jane.doe@example.com'}] })
console.log('Updated Business:', updatedBusiness)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Customers (customers.update())</summary>

```typescript
import { Paddle, UpdateCustomerRequestBody, Customer } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function updateCustomer(customerId: string, requestBody: UpdateCustomerRequestBody): Promise<Customer | undefined> {
    try {
        // Pass the customer id and request body with the attributes to update
        const customer = await paddle.customers.update(customerId, requestBody)
        // Returns an updated customer entity
        return customer
    } catch (e) {
        console.error(`Error updating customer ${customerId}:`, e)
        // Handle Network/API errors
    }
}

const updatedCustomer = await updateCustomer('ctm_01grnn4zta5a1mf02jjze7y2ys', { email: 'john.doe.updated@example.com', name: 'Johnathan Doe' })
console.log('Updated Customer:', updatedCustomer)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Discounts (discounts.update())</summary>

```typescript
import { Paddle, UpdateDiscountRequestBody, Discount } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function updateDiscount(discountId: string, requestBody: UpdateDiscountRequestBody): Promise<Discount | undefined> {
    try {
        // Pass the discount id and request body with the attributes to update
        const discount = await paddle.discounts.update(discountId, requestBody)
        // Returns an updated discount entity
        return discount
    } catch (e) {
        console.error(`Error updating discount ${discountId}:`, e)
        // Handle Network/API errors
    }
}

const updatedDiscount = await updateDiscount('dsc_01gv5kpg05xp104ek2fmgjwttf', { description: '15 USD Off Coupon - Extended', amount: '1500' })
console.log('Updated Discount:', updatedDiscount)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Prices (prices.update())</summary>

```typescript
import { Paddle, UpdatePriceRequestBody, Price } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function updatePrice(priceId: string, requestBody: UpdatePriceRequestBody): Promise<Price | undefined> {
    try {
        // Pass the price id and request body with the attributes to update
        const price = await paddle.prices.update(priceId, requestBody)
        // Returns an updated price entity
        return price
    } catch (e) {
        console.error(`Error updating price ${priceId}:`, e)
        // Handle Network/API errors
    }
}

const updatedPrice = await updatePrice('pri_01gsz8z1q1n00f12qt82y31smh', { description: 'Premium Plan Monthly (New Name)', unitPrice: { amount: '2200', currencyCode: 'USD' } })
console.log('Updated Price:', updatedPrice)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Notification Settings (notificationSettings.update())</summary>

```typescript
import { Paddle, UpdateNotificationSettingsRequestBody, NotificationSettings } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function updateNotificationSetting(notificationSettingId: string, requestBody: UpdateNotificationSettingsRequestBody): Promise<NotificationSettings | undefined> {
    try {
        // Pass the notification setting id and request body with the attributes to update
        const notificationSetting = await paddle.notificationSettings.update(notificationSettingId, requestBody)
        // Returns an updated notification setting entity
        return notificationSetting
    } catch (e) {
        console.error(`Error updating notification setting ${notificationSettingId}:`, e)
        // Handle Network/API errors
    }
}

const updatedNs = await updateNotificationSetting('ntfset_01gt21c5pdx9q1e4mh1xrsjjn6', { destination: 'https://example.com/webhook/updated-endpoint', subscribedEvents: ['transaction.completed', 'subscription.canceled'] })
console.log('Updated Notification Setting:', updatedNs)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Simulations (simulations.update())</summary>

```typescript
import { Paddle, UpdateSimulationRequestBody, Simulation } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function updateSimulation(simulationId: string, requestBody: UpdateSimulationRequestBody): Promise<Simulation | undefined> {
    try {
        // Pass the simulation id and request body with the attributes to update
        const simulation = await paddle.simulations.update(simulationId, requestBody)
        // Returns an updated simulation entity
        return simulation
    } catch (e) {
        console.error(`Error updating simulation ${simulationId}:`, e)
        // Handle Network/API errors
    }
}

// Example: Updating the payload of a single event simulation
const updatedEventSimulation = await updateSimulation('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk', { payload: { code: 'NEWDISCOUNTCODE' } })
console.log('Updated Event Simulation:', updatedEventSimulation)

// Example: Updating the config of a scenario simulation
const updatedScenarioSimulation = await updateSimulation('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk', { config: { subscriptionPause: { options: { effectiveFrom: 'immediately' } } } })
console.log('Updated Scenario Simulation:', updatedScenarioSimulation)
```

</details>

### Get an entity

You can get an entity with the `get` function in the resource. It accepts the `id` of the entity to get. The entity is returned.

Where operations require more than one `id`, like for addresses and businesses, the `get` function accepts multiple arguments. For example, to get an address for a customer, pass the `customerId` and the `addressId`.

<details open>
<summary style="font-size: 1.1rem;">Products (products.get())</summary>

``` typescript
import { Paddle, Product, GetProductQueryParameters } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getProduct(productId: string, queryParams?: GetProductQueryParameters): Promise<Product | undefined> {
    try {
        // Pass the product id get
        const product = await paddle.products.get(productId, queryParams)
        // Returns a product entity
        return product
    } catch (e) {
        // Handle Network/API errors
    }
}

// Optionally include additional data in the returned object
// See GetProductQueryParameters for more in which data you can include
const queryParams: GetProductQueryParameters = { include: ['prices'] }

const product = await getProduct('pro_01gsz97mq9pa4fkyy0wqenepkz', queryParams)
console.log('Product', product)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Subscriptions (subscriptions.get())</summary>

``` typescript
import { Paddle, Subscription, GetSubscriptionQueryParameters } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getSubscription(subscriptionId: string, queryParams?: GetSubscriptionQueryParameters): Promise<Subscription | undefined> {
    try {
        // Pass the subscription id to get
        const subscription = await paddle.subscriptions.get(subscriptionId, queryParams)
        // Returns a subscription entity
        return subscription
    } catch (e) {
        // Handle Network/API errors
    }
}

// Optionally include additional data in the returned object
// See GetSubscriptionQueryParameters for more in which data you can include
const queryParams: GetSubscriptionQueryParameters = { include: ['next_transaction', 'recurring_transaction_details'] }

const subscription = await getSubscription('sub_01h04vsc0qhwtsbsxh3422wjs4', queryParams)
console.log('Subscription', subscription)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Transactions (transactions.get())</summary>

``` typescript
import { Paddle, Transaction, GetTransactionQueryParameters } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getTransaction(transactionId: string, queryParams?: GetTransactionQueryParameters): Promise<Transaction | undefined> {
    try {
        // Pass the transaction id to get
        const transaction = await paddle.transactions.get(transactionId, queryParams)
        // Returns a transaction entity
        return transaction
    } catch (e) {
        // Handle Network/API errors
    }
}

// Optionally include additional data in the returned object
// See GetTransactionQueryParameters for more in which data you can include
const queryParams: GetTransactionQueryParameters = { include: ['customer', 'discount'] }

const transaction = await getTransaction('txn_01h04vsbhqc62t8hmd4z3b578c', queryParams)
console.log('Transaction', transaction)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Addresses (addresses.get())</summary>

```typescript
import { Paddle, Address } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getAddress(customerId: string, addressId: string): Promise<Address | undefined> {
    try {
        // Pass the customer_id and address_id to get
        const address = await paddle.addresses.get(customerId, addressId)
        // Returns an address entity
        return address
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching address ${addressId} for customer ${customerId}:`, e)
    }
}

const address = await getAddress('ctm_01grnn4zta5a1mf02jjze7y2ys', 'add_01gm302t81w94gyjpjpqypkzkf')
console.log('Address:', address)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Businesses (businesses.get())</summary>

```typescript
import { Paddle, Business } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getBusiness(customerId: string, businessId: string): Promise<Business | undefined> {
    try {
        // Pass the customer_id and business_id to get
        const business = await paddle.businesses.get(customerId, businessId)
        // Returns a business entity
        return business
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching business ${businessId} for customer ${customerId}:`, e)
    }
}

const business = await getBusiness('ctm_01grnn4zta5a1mf02jjze7y2ys', 'biz_01grrebrzaee2qj2fqqhmcyzaj')
console.log('Business:', business)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Customers (customers.get())</summary>

```typescript
import { Paddle, Customer } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getCustomer(customerId: string): Promise<Customer | undefined> {
    try {
        // Pass the customer_id to get
        const customer = await paddle.customers.get(customerId)
        // Returns a customer entity
        return customer
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching customer ${customerId}:`, e)
    }
}

const customer = await getCustomer('ctm_01grnn4zta5a1mf02jjze7y2ys')
console.log('Customer:', customer)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Discounts (discounts.get())</summary>

```typescript
import { Paddle, Discount } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getDiscount(discountId: string): Promise<Discount | undefined> {
    try {
        // Pass the discount_id to get
        const discount = await paddle.discounts.get(discountId)
        // Returns a discount entity
        return discount
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching discount ${discountId}:`, e)
    }
}

const discount = await getDiscount('dsc_01gv5kpg05xp104ek2fmgjwttf')
console.log('Discount:', discount)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Prices (prices.get())</summary>

```typescript
import { Paddle, Price, GetPriceQueryParameters } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPrice(priceId: string, queryParams?: GetPriceQueryParameters): Promise<Price | undefined> {
    try {
        // Pass the price_id to get
        const price = await paddle.prices.get(priceId, queryParams)
        // Returns a price entity
        return price
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching price ${priceId}:`, e)
    }
}

// Optionally include additional data in the returned object
// See GetPriceQueryParameters for more in which data you can include
const queryParams: GetPriceQueryParameters = { include: ['product'] }

const price = await getPrice('pri_01gsz8z1q1n00f12qt82y31smh', queryParams)
console.log('Price:', price)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Payment Methods (paymentMethods.get())</summary>

```typescript
import { Paddle, PaymentMethod } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getPaymentMethod(customerId: string, paymentMethodId: string): Promise<PaymentMethod | undefined> {
    try {
        // Pass the customer_id and payment_method_id to get
        const paymentMethod = await paddle.paymentMethods.get(customerId, paymentMethodId)
        // Returns a payment method entity
        return paymentMethod
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching payment method ${paymentMethodId} for customer ${customerId}:`, e)
    }
}

const paymentMethod = await getPaymentMethod('ctm_01grnn4zta5a1mf02jjze7y2ys', 'paymtd_01hkm9xwqpbbpr1ksmvg3sx3v1')
console.log('Payment Method:', paymentMethod)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Notification Settings (notificationSettings.get())</summary>

```typescript
import { Paddle, NotificationSettings } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getNotificationSetting(notificationSettingId: string): Promise<NotificationSettings | undefined> {
    try {
        // Pass the notification_setting_id (referred to as notificationId in the SDK method) to get
        const notificationSetting = await paddle.notificationSettings.get(notificationSettingId)
        // Returns a notification setting entity
        return notificationSetting
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching notification setting ${notificationSettingId}:`, e)
    }
}

const notificationSetting = await getNotificationSetting('ntfset_01gt21c5pdx9q1e4mh1xrsjjn6')
console.log('Notification Setting:', notificationSetting)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Notifications (notifications.get())</summary>

```typescript
import { Paddle, Notification } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getNotification(notificationId: string): Promise<Notification | undefined> {
    try {
        // Pass the notification_id to get
        const notification = await paddle.notifications.get(notificationId)
        // Returns a notification entity
        return notification
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching notification ${notificationId}:`, e)
    }
}

const notification = await getNotification('ntf_01ghbkd0frb9k95cnhwd1bxpvk')
console.log('Notification:', notification)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Reports (reports.get())</summary>

```typescript
import { Paddle, Report } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getReport(reportId: string): Promise<Report | undefined> {
    try {
        // Pass the report_id to get
        const report = await paddle.reports.get(reportId)
        // Returns a report entity
        return report
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching report ${reportId}:`, e)
    }
}

const report = await getReport('rep_01h9apkx1d320kpvvfyezr96k0')
console.log('Report:', report)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Simulations (simulations.get())</summary>

```typescript
import { Paddle, Simulation } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getSimulation(simulationId: string): Promise<Simulation | undefined> {
    try {
        // Pass the simulation_id to get
        const simulation = await paddle.simulations.get(simulationId)
        // Returns a simulation entity
        return simulation
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching simulation ${simulationId}:`, e)
    }
}

const simulation = await getSimulation('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk')
console.log('Simulation:', simulation)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Simulation Runs (simulationRuns.get())</summary>

```typescript
import { Paddle, SimulationRun, GetSimulationRunQueryParameters } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getSimulationRun(simulationId: string, simulationRunId: string, queryParams?: GetSimulationRunQueryParameters): Promise<SimulationRun | undefined> {
    try {
        // Pass the simulation_id and simulation_run_id to get
        const simulationRun = await paddle.simulationRuns.get(simulationId, simulationRunId, queryParams)
        // Returns a simulation run entity
        return simulationRun
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching simulation run ${simulationRunId} for simulation ${simulationId}:`, e)
    }
}

// Optionally include additional data in the returned object
// See GetSimulationRunQueryParameters for more in which data you can include
const queryParams: GetSimulationRunQueryParameters = { include: ['events'] }

const simulationRun = await getSimulationRun('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk', 'ntfsimrun_01ghbkd0frb9k95cnhwd1bxpvk', queryParams)
console.log('Simulation Run:', simulationRun)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Simulation Run Events (simulationRunEvents.get())</summary>

```typescript
import { Paddle, SimulationRunEvent } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getSimulationRunEvent(simulationId: string, simulationRunId: string, simulationEventId: string): Promise<SimulationRunEvent | undefined> {
    try {
        // Pass the simulation_id, simulation_run_id, and simulation_event_id, and optional query parameters to get
        const simulationRunEvent = await paddle.simulationRunEvents.get(simulationId, simulationRunId, simulationEventId)
        // Returns a simulation run event entity
        return simulationRunEvent
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error fetching event ${simulationEventId} for run ${simulationRunId}, simulation ${simulationId}:`, e)
    }
}

const simulationRunEvent = await getSimulationRunEvent('ntfsim_01ghbkd0frb9k95cnhwd1bxpvk', 'ntfsimrun_01ghbkd0frb9k95cnhwd1bxpvk', 'ntfsimevt_01hvg8ykjrcdr4jvv9rqcbkhfa')
console.log('Simulation Run Event:', simulationRunEvent)
```

</details>

### Archive an entity

You can archive an entity with the `archive` function in the resource. It accepts the `id` of the entity to archive. The entity is returned.
 
``` typescript
import { Paddle } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function archiveProduct(productId: string): Promise<Product | undefined> {
    try {
        // Pass the product id archive
        const product = await paddle.products.archive(productId)
        // Returns an archived product entity
        return product
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error archiving product ${productId}:`, e)
    }
}

const archivedProduct = await archiveProduct('pro_01gsz97mq9pa4fkyy0wqenepkz')
console.log('Archived Product:', archivedProduct)
```

<details>
<summary style="font-size: 1.1rem;">Prices (prices.archive())</summary>

```typescript
import { Paddle, Price } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function archivePrice(priceId: string): Promise<Price | undefined> {
    try {
        // Pass the price id to archive
        const price = await paddle.prices.archive(priceId)
        // Returns an archived price entity
        return price
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error archiving price ${priceId}:`, e)
    }
}

const archivedPrice = await archivePrice('pri_01gsz8z1q1n00f12qt82y31smh')
console.log('Archived Price:', archivedPrice)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Discounts (discounts.archive())</summary>

```typescript
import { Paddle, Discount } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function archiveDiscount(discountId: string): Promise<Discount | undefined> {
    try {
        // Pass the discount id to archive
        const discount = await paddle.discounts.archive(discountId)
        // Returns an archived discount entity
        return discount
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error archiving discount ${discountId}:`, e)
    }
}

const archivedDiscount = await archiveDiscount('dsc_01gv5kpg05xp104ek2fmgjwttf')
console.log('Archived Discount:', archivedDiscount)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Customers (customers.archive())</summary>

```typescript
import { Paddle, Customer } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function archiveCustomer(customerId: string): Promise<Customer | undefined> {
    try {
        // Pass the customer id to archive
        const customer = await paddle.customers.archive(customerId)
        // Returns an archived customer entity
        return customer
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error archiving customer ${customerId}:`, e)
    }
}

const archivedCustomer = await archiveCustomer('ctm_01grnn4zta5a1mf02jjze7y2ys')
console.log('Archived Customer:', archivedCustomer)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Addresses (addresses.archive())</summary>

```typescript
import { Paddle, Address } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function archiveAddress(customerId: string, addressId: string): Promise<Address | undefined> {
    try {
        // Pass the customer id and address id to archive
        const address = await paddle.addresses.archive(customerId, addressId)
        // Returns an archived address entity
        return address
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error archiving address ${addressId} for customer ${customerId}:`, e)
    }
}

const archivedAddress = await archiveAddress('ctm_01grnn4zta5a1mf02jjze7y2ys', 'add_01gm302t81w94gyjpjpqypkzkf')
console.log('Archived Address:', archivedAddress)
```

</details>

<details>
<summary style="font-size: 1.1rem;">Businesses (businesses.archive())</summary>

```typescript
import { Paddle, Business } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function archiveBusiness(customerId: string, businessId: string): Promise<Business | undefined> {
    try {
        // Pass the customer id and business id to archive
        const business = await paddle.businesses.archive(customerId, businessId)
        // Returns an archived business entity
        return business
    } catch (e) {
        // Handle Network/API errors
        console.error(`Error archiving business ${businessId} for customer ${customerId}:`, e)
    }
}

const archivedBusiness = await archiveBusiness('ctm_01grnn4zta5a1mf02jjze7y2ys', 'biz_01grrebrzaee2qj2fqqhmcyzaj')
console.log('Archived Business:', archivedBusiness)
```

</details>

## Resources

### Error Handling

If a request fails, Paddle returns an `error` object that contains the same information as [errors returned by the API](https://developer.paddle.com/api-reference/about/errors?utm_source=dx&utm_medium=paddle-node-sdk). You can use the `code` attribute to search an error in [the error reference](https://developer.paddle.com/errors/overview?utm_source=dx&utm_medium=paddle-node-sdk) and to handle the error in your app. Validation errors also return an array of `errors` that tell you which fields failed validation.

This example shows how to handle an error with the code `conflict`:

```typescript
import { ApiError } from '@paddle/paddle-node-sdk'

try {
  // Call functions from the SDK
} catch (e: any) {
  // e.code will always follow the error code defined in our documentation
  const paddleApiError = e as ApiError;
  if (paddleApiError.code === 'conflict') {
    // Handle Conflict error
  }
}
```

### Webhook signature verification

The SDK includes a helper function to verify webhook signatures sent by Notifications from Paddle.

```typescript
import { Paddle, EventName } from '@paddle/paddle-node-sdk'
import express, { Request, Response } from 'express'

const paddle = new Paddle('API_KEY')
const app = express()

// Create a `POST` endpoint to accept webhooks sent by Paddle.
// We need `raw` request body to validate the integrity. Use express raw middleware to ensure express doesn't convert the request body to JSON.
app.post('/webhooks', express.raw({ type: 'application/json' }), async (req: Request, res: Response) => {
  const signature = (req.headers['paddle-signature'] as string) || '';
  // req.body should be of type `buffer`, convert to string before passing it to `unmarshal`. 
  // If express returned a JSON, remove any other middleware that might have processed raw request to object
  const rawRequestBody = req.body.toString();
  // Replace `WEBHOOK_SECRET_KEY` with the secret key in notifications from vendor dashboard
  const secretKey = process.env['WEBHOOK_SECRET_KEY'] || '';

  try {
    if (signature && rawRequestBody) {
      // The `unmarshal` function will validate the integrity of the webhook and return an entity
      const eventData = await paddle.webhooks.unmarshal(rawRequestBody, secretKey, signature);
      switch (eventData.eventType) {
        case EventName.ProductUpdated:
          console.log(`Product ${eventData.data.id} was updated`);
          break;
        case EventName.SubscriptionUpdated:
          console.log(`Subscription ${eventData.data.id} was updated`);
          break;
        default:
          console.log(eventData.eventType);
      }
    } else {
      console.log('Signature missing in header');
    }
  } catch (e) {
    // Handle signature mismatch or other runtime errors
    console.log(e);
  }
  // Return a response to acknowledge
  res.send('Processed webhook event');
});

app.listen(3000)

```

## Feature parity 

The Node.js SDK has complete feature parity with the Paddle API. All operations in the Paddle API are supported.

## Learn more

- [Paddle API reference](https://developer.paddle.com/api-reference/overview?utm_source=dx&utm_medium=paddle-node-sdk)
- [Sign up for Paddle Billing](https://login.paddle.com/signup?utm_source=dx&utm_medium=paddle-node-sdk)
