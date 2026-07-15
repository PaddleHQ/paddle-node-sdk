# Investigation Summary for Issue #227

## Quick Reference

- **Issue:** https://github.com/PaddleHQ/paddle-node-sdk/issues/227
- **Investigation PR:** https://github.com/PaddleHQ/paddle-node-sdk/pull/229
- **Full Investigation:** See `INVESTIGATION_ISSUE_227.md`
- **Branch:** `cursor/investigation-issue-227-5442`

## Executive Summary

The issue reports that `prorated_next_billing_period` billing mode returns a minimum charge limit error in production, despite Paddle's documentation suggesting this should work as a workaround.

**Verdict:** This is an **API-level behavior issue** in Paddle's backend, not a bug in the Node.js SDK.

## What Was Investigated

### 1. SDK Code Analysis ✅
- ✅ Type definitions (`ProrationBillingMode`)
- ✅ Subscription resource implementation
- ✅ Request/response handling
- ✅ Unit test coverage
- ✅ API endpoint calls

**Result:** All SDK code is correct and properly implements Paddle's API specification.

### 2. Root Cause Identification ❌
The Paddle API backend appears to:
- Validate deferred prorated amounts ($0.10) independently
- Not combine them with the renewal charge ($3.00) for validation
- Return the same error for both `prorated_immediately` and `prorated_next_billing_period`

This contradicts the documented troubleshooting guidance.

## Key Findings

1. **SDK Implementation:** Perfect - no changes needed
2. **API Behavior:** Inconsistent with documentation
3. **Documentation:** Needs clarification on when `*_next_billing_period` works

## Deliverables

1. ✅ Comprehensive investigation document (`INVESTIGATION_ISSUE_227.md`)
2. ✅ Draft PR with findings (#229)
3. ✅ Git branch with investigation commit
4. ✅ Alternative workarounds documented
5. ✅ Questions prepared for Paddle API team

## Recommendations

### For SDK Users
Use alternative billing modes:
```typescript
// Option 1: Full price at next billing period
prorationBillingMode: 'full_next_billing_period'

// Option 2: No charge for upgrade
prorationBillingMode: 'do_not_bill'
```

### For Paddle Team
1. Escalate to API engineering for behavior clarification
2. Update error documentation
3. Consider API-level fix if behavior is unintended

### For SDK Maintainers  
No action needed - SDK is working correctly per API specification.

## Technical Details

The SDK correctly:
- Defines all 5 proration modes in type system
- Makes PATCH requests to `/subscriptions/{id}/preview`
- Passes parameters without client-side validation
- Handles responses according to API contract

The error originates from Paddle's API validation logic, not the SDK.

---

**Investigation completed:** July 15, 2026  
**By:** Cursor Cloud Agent
