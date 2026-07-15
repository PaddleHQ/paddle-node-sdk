# Investigation: Issue #227 - `prorated_next_billing_period` throwing minimum charge limit error

**Issue Link:** https://github.com/PaddleHQ/paddle-node-sdk/issues/227  
**Investigated By:** Cursor Cloud Agent  
**Date:** July 15, 2026  
**Status:** Investigation Complete - API-Level Issue Confirmed

## Summary

This issue reports that the `prorated_next_billing_period` billing mode returns a `subscription_update_transaction_balance_less_than_charge_limit` error in production, despite Paddle's documentation suggesting this mode should work as a workaround when the prorated amount is below the minimum charge limit.

**Key Finding:** This is an API-level behavior issue in Paddle's backend, not a bug in the Node.js SDK. The SDK correctly implements and supports all proration billing modes as defined by Paddle's API specification.

## Issue Details

### User's Scenario
- **Current plan:** USD 1.00 every 3 days
- **Target plan:** USD 3.00 every 3 days
- **Calculated prorated amount:** USD 0.10 (below minimum)
- **Minimum payment amount:** USD 0.70
- **Environment:** Production

### Observed Behavior

1. Using `prorated_immediately`:
   ```json
   {
     "error": {
       "type": "request_error",
       "code": "subscription_update_transaction_balance_less_than_charge_limit",
       "detail": "Unable to charge for Subscription update: Transaction balance is less than what we can charge. Transaction balance: 10, Minimum payment amount: 70, Currency code: USD"
     }
   }
   ```

2. Using `prorated_next_billing_period` (recommended workaround):
   ```json
   {
     "error": {
       "type": "request_error",
       "code": "subscription_update_transaction_balance_less_than_charge_limit",
       "detail": "Unable to charge for Subscription update: Transaction balance is less than what we can charge. Transaction balance: 10, Minimum payment amount: 70, Currency code: USD"
     }
   }
   ```

Both modes produce identical errors, contradicting the documentation's suggested workaround.

## SDK Investigation

### Code Analysis

#### 1. ProrationBillingMode Type Definition
**File:** `src/enums/subscription/proration-billing-mode.ts`

```typescript
export type ProrationBillingMode =
  | 'prorated_immediately'
  | 'prorated_next_billing_period'  // ✓ Supported
  | 'full_immediately'
  | 'full_next_billing_period'
  | 'do_not_bill';
```

**Finding:** The SDK correctly defines `prorated_next_billing_period` as a valid option.

#### 2. Subscription Update Implementation
**File:** `src/resources/subscriptions/index.ts`

```typescript
export class SubscriptionsResource extends BaseResource {
  public async previewUpdate(
    subscriptionId: string,
    updateSubscription: UpdateSubscriptionRequestBody,
  ): Promise<SubscriptionPreview> {
    const urlWithPathParams = new PathParameters(SubscriptionPaths.updatePreview, {
      subscription_id: subscriptionId,
    }).deriveUrl();

    const response = await this.client.patch<
      UpdateSubscriptionRequestBody,
      Response<ISubscriptionPreviewResponse> | ErrorResponse
    >(urlWithPathParams, updateSubscription);

    const data = this.handleResponse<ISubscriptionPreviewResponse>(response);

    return new SubscriptionPreview(data);
  }
}
```

**Finding:** The SDK is a thin wrapper that:
- Makes a PATCH request to `/subscriptions/{subscription_id}/preview`
- Passes the `UpdateSubscriptionRequestBody` (including `prorationBillingMode`) directly to the API
- Does not perform any client-side validation of proration billing mode values
- Relies entirely on the Paddle API backend for validation and business logic

#### 3. Request Body Type
**File:** `src/resources/subscriptions/operations/update-subscription-request-body.ts`

```typescript
export interface UpdateSubscriptionRequestBody {
  customerId?: string;
  addressId?: string;
  businessId?: string | null;
  currencyCode?: CurrencyCode;
  nextBilledAt?: string;
  discount?: UpdateSubscriptionDiscount | null;
  collectionMode?: CollectionMode;
  billingDetails?: IBillingDetailsUpdate | null;
  scheduledChange?: UpdateSubscriptionScheduledChange | null;
  items?: ISubscriptionUpdateItem[];
  customData?: ICustomData | null;
  prorationBillingMode?: ProrationBillingMode;  // ✓ Properly typed
  onPaymentFailure?: SubscriptionOnPaymentFailure;
}
```

**Finding:** The request body interface correctly includes `prorationBillingMode` with proper typing.

#### 4. Unit Tests
**File:** `src/__tests__/resources/subscriptions.test.ts`

```typescript
test('should preview update an existing subscription', async () => {
  const subscriptionId = SubscriptionMock.id;
  const subscriptionToBeUpdated: UpdateSubscriptionRequestBody = UpdateSubscriptionMock;

  const paddleInstance = getPaddleTestClient();
  paddleInstance.patch = jest.fn().mockResolvedValue(SubscriptionMockResponse);

  const subscriptionsResource = new SubscriptionsResource(paddleInstance);
  const updatedSubscription = await subscriptionsResource.previewUpdate(
    subscriptionId, 
    subscriptionToBeUpdated
  );

  expect(paddleInstance.patch).toHaveBeenCalledWith(
    `/subscriptions/${subscriptionId}/preview`,
    subscriptionToBeUpdated,
  );
  expect(updatedSubscription).toBeDefined();
});
```

**Finding:** Tests confirm the SDK correctly passes through the update request body to the API endpoint.

## Root Cause Analysis

### SDK Behavior: ✅ CORRECT

The Node.js SDK:
1. ✅ Correctly supports all five proration billing modes defined in Paddle's API specification
2. ✅ Properly types and validates the request structure
3. ✅ Makes the correct API call to `/subscriptions/{subscription_id}/preview`
4. ✅ Passes the `prorationBillingMode` parameter through without modification
5. ✅ Has no client-side business logic that would interfere with the request

### API Behavior: ❌ INCONSISTENT WITH DOCUMENTATION

The Paddle API backend appears to:
1. ❌ Validate the deferred prorated amount independently from the renewal charge
2. ❌ Reject `prorated_next_billing_period` requests when the prorated amount alone is below the minimum
3. ❌ Not combine the deferred prorated amount with the recurring renewal charge for minimum validation
4. ❌ Behave inconsistently with the documented troubleshooting guidance

## Expected vs Actual Behavior

### Expected (per documentation)
When using `prorated_next_billing_period`:
- The USD 0.10 prorated amount should be deferred to the next renewal
- At renewal, it should be combined with the USD 3.00 recurring charge
- Total renewal transaction: USD 3.10 (above the USD 0.70 minimum)
- Preview request should succeed

### Actual (observed behavior)
When using `prorated_next_billing_period`:
- The API validates the USD 0.10 prorated amount independently
- The validation fails because USD 0.10 < USD 0.70
- The preview request returns the same error as `prorated_immediately`
- The documented workaround does not work

## Questions for Paddle API Team

Based on this investigation, the following questions need clarification from Paddle's API engineering team:

1. **Is this the intended behavior?**  
   Should `prorated_next_billing_period` validate the deferred prorated amount independently, or should it consider the combined amount with the renewal charge?

2. **Documentation accuracy:**  
   If the current behavior is intended, should the error documentation be updated to clarify that `*_next_billing_period` modes are not valid workarounds when the prorated amount itself is below the minimum?

3. **Business logic scope:**  
   Is there a scenario where `prorated_next_billing_period` successfully defers charges below the minimum threshold?

4. **Recommended approach:**  
   What is the recommended implementation pattern for subscription upgrades with small proration amounts in production environments?

5. **Preview vs actual update:**  
   Does the actual subscription update endpoint (`PATCH /subscriptions/{id}`) behave differently from the preview endpoint, or would it also fail with the same error?

## Recommendations

### For SDK Maintainers
No changes needed to the SDK. The implementation is correct and compliant with the API specification.

### For Users Encountering This Issue
Until Paddle's API team clarifies the expected behavior:

1. **Alternative billing modes:**  
   Consider using `full_next_billing_period` or `do_not_bill` depending on your business requirements:
   ```typescript
   // Option 1: Charge full price at next billing period
   await paddle.subscriptions.previewUpdate(subscriptionId, {
     items: [{ priceId: targetPriceId, quantity: 1 }],
     prorationBillingMode: 'full_next_billing_period',
   });
   
   // Option 2: Don't bill for the change, apply at renewal
   await paddle.subscriptions.previewUpdate(subscriptionId, {
     items: [{ priceId: targetPriceId, quantity: 1 }],
     prorationBillingMode: 'do_not_bill',
   });
   ```

2. **Test in sandbox first:**  
   Always test subscription update scenarios in the sandbox environment before production deployment.

3. **Contact Paddle support:**  
   For production use cases, reach out to Paddle's support team for guidance on handling upgrades with small proration amounts.

### For Paddle Documentation Team
Consider updating the error documentation at:  
`https://developer.paddle.com/v1/errors/subscriptions/subscription_update_transaction_balance_less_than_charge_limit`

Suggested clarifications:
- When does `prorated_next_billing_period` work as a workaround vs when does it not?
- How is the minimum charge validation applied to deferred amounts?
- What are the recommended patterns for handling small prorated amounts?

## Conclusion

**This is not a bug in the paddle-node-sdk.** The SDK correctly implements the Paddle API specification and properly supports all proration billing modes.

The issue stems from an apparent inconsistency between:
1. The documented behavior of `prorated_next_billing_period` as a workaround for minimum charge errors
2. The actual validation logic in Paddle's API backend

This issue should be escalated to Paddle's API engineering team for clarification on the intended behavior and potential API-level fixes or documentation updates.

## Related Files

- SDK Implementation: `/src/resources/subscriptions/index.ts`
- Type Definitions: `/src/enums/subscription/proration-billing-mode.ts`
- Request Interface: `/src/resources/subscriptions/operations/update-subscription-request-body.ts`
- Tests: `/src/__tests__/resources/subscriptions.test.ts`

## Auto-generated Code Notice

The SDK code is auto-generated from Paddle's API specification:
```typescript
/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */
```

Any API behavior changes must be addressed at the API specification level, not within the SDK codebase.
