---
outline: [2, 3]
description: "Runs a callback in a safe block. If the callback throws or returns a rejected promise, the function returns or resolves to a safe-callback-error Left instead of propagating the error."
prev:
  text: "expect"
  link: "/en/v1/api/either/expect"
next:
  text: "bool"
  link: "/en/v1/api/either/bool"
---

# safeCallback

Runs a callback in a safe block. If the callback throws or returns a rejected promise, the function returns or resolves to a `"safe-callback-error"` typed `Left` instead of propagating the error. If the callback returns an `Either`, it is kept as-is. Promise results are handled after resolution.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/safeCallback/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntax

```typescript
function safeCallback<
	const GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): Extract<ComputeSafeCallbackResult<GenericOutput>, any>;
```

## Parameters

- `theFunction`: Callback to execute in a safe block. It can return a direct value, an `Either`, or a promise of either.

## Return value

- If the callback returns a `Left` or `Right`: the `Either` is returned as-is.
- If the callback succeeds with a non-`Either` value: the value is wrapped in `SafeCallbackSuccess`.
- If the callback returns a promise: the resolved value follows the same rules.
- If the callback throws or the promise rejects: `SafeCallbackError` (`left("safe-callback-error", error)`) is returned or resolved.

## See also

- [`left`](/en/v1/api/either/left) – Build a typed `Left`.
- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Pattern match on `"safe-callback-error"`.
