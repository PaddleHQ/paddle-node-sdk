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
import { Environment, Paddle } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')
```

You can also pass an environment to work with the sandbox:

```typescript
const paddle = new Paddle('API_KEY', {
  environment: Environment.production, // or Environment.sandbox for accessing sandbox API
  logLevel: 'verbose' // or 'error' for less verbose logging
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

You can list supported entities with the `list` function in the resource. It returns an iterator to help when working with multiple pages.

``` typescript
import { Paddle } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

function getProducts() {
    // creates an iterator instance
    const productCollection = paddle.products.list()
    return productCollection
}

try {
    // Creates an iterator to loop through paginated data. 
    // At this point, It does not hold any data.
    const productCollection = getProducts()
    
    // Call `next()` to retrieve first page of the dataset
    const firstPage = await productCollection.next()
    console.log("First page data", firstPage)
    
    // Calling `next()` again will retrieve subsequent pages.
    const secondPage = await productCollection.next()
    console.log("Second page data", secondPage)
} catch (e) {
    // Handle Network/API errors
}
```

### Create an entity

You can create a supported entity with the `create` function in the resource. It accepts the body to be created. The created entity is returned.

``` typescript
import { Paddle, CreateProductRequestBody } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function createProduct(requestBody: CreateProductRequestBody) {
    try {
        // Pass the request body with the attributes required to create
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

### Update an entity

You can update a supported entity with the `update` function in the resource. It accepts the `id` of the entity to update and an object with the attributes to be updated. The updated entity is returned.

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

const product = await updateProduct('id', { name: 'ChatApp for Schools' })
console.log('Updated product', product)
```

Where operations require more than one `id`, the `update` function accepts multiple arguments. For example, to update an address for a customer, pass the `customerId` and the `addressId`:

```typescript
const address = await paddle.addresses.update(customerId, addressId, requestBody)
```

### Get an entity

You can get an entity with the `get` function in the resource. It accepts the `id` of the entity to get. The entity is returned.

``` typescript
import { Paddle } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function getProduct(productId: string) {
    try {
        // Pass the product id get
        const product = await paddle.products.get(productId)
        // Returns a product entity
        return product
    } catch (e) {
        // Handle Network/API errors
    }
}

const product = await getProduct('id')
console.log('Product', product)
```

### Archive an entity

You can archive an entity with the `archive` function in the resource. It accepts the `id` of the entity to archive. The entity is returned.
 
#### Entities that support archival

- Products
- Prices
- Discounts
- Customers
- Addresses
- Businesses

``` typescript
import { Paddle } from '@paddle/paddle-node-sdk'

const paddle = new Paddle('API_KEY')

async function archiveProduct(productId: string) {
    try {
        // Pass the product id archive
        const product = await paddle.products.archive(productId)
        // Returns an archived product entity
        return product
    } catch (e) {
        // Handle Network/API errors
    }
}

const product = await archiveProduct('id')
console.log('Product', product)
```

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

## Resources

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
