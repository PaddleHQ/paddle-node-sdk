# Upgrading

All breaking changes will be documented in this file to assist with upgrading to newer versions of the SDK.

## v2.0.0

There are two breaking changes in this release:

1. Minimum Node.js version is now 18.0.0. 
   - We had to restrict the minimum version as we would like to use native `fetch` API instead of `node-fetch` package.
   - If you are using Node.js version 16 or below, you will need to upgrade to Node.js version 18 or above.

2. `Webhooks.unmarshal` and `Webhooks.isSignatureValid` now returns a promise.
   - As we started supporting edge runtimes, we had to make these methods async as the edge version of crypto returns a promise.
   - If you are using these methods, you will need to update your code to handle the promise.

---