---
outline: [2, 3]
description: "Runs a callback or a promise in a safe asynchronous block. If the callback throws or the promise rejects, the function resolves to a safe-callback-error Left instead of propagating the error."
prev:
  text: "safeCallback"
  link: "/en/v1/api/either/safeCallback"
next:
  text: "bool"
  link: "/en/v1/api/either/bool"
---

# asyncSafeCallback

Runs a callback or a promise in a safe asynchronous block. If the callback throws or the promise rejects, the function resolves to a `"safe-callback-error"` typed `Left` instead of propagating the error. If the input produces an `Either`, it is kept as-is. Other resolved values are wrapped in a `Right`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/asyncSafeCallback/tryout.doc.ts"
  majorVersion="v1"
  height="544px"
/>

## Syntax

```typescript
function asyncSafeCallback<
	const GenericOutput extends unknown
>(
	maybeFunction: (() => GenericOutput) | Promise<GenericOutput>
): Promise<Extract<ComputeSafeCallbackResult<GenericOutput>, any>>;
```

## Parameters

- `maybeFunction`: Callback or promise to execute safely. The result can be a direct value, an `Either`, or a promise of either.

## Return value

A promise that resolves with these rules:

- If the input produces a `Left` or `Right`: the `Either` is returned as-is.
- If the input succeeds with a non-`Either` value: the value is wrapped in `SafeCallbackSuccess`.
- If the callback throws or the promise rejects: `SafeCallbackError` (`left("safe-callback-error", error)`) is resolved.

## See also

- [`safeCallback`](/en/v1/api/either/safeCallback) – Version that keeps a synchronous output when possible.
- [`left`](/en/v1/api/either/left) – Build a typed `Left`.
