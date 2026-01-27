---
outline: [2, 3]
description: "Runs a callback in a safe block. If the callback throws, the function returns a \"callback\" typed Left instead of propagating the exception."
prev:
  text: "whenHasInformation"
  link: "/en/v1/api/either/whenHasInformation"
next:
  text: "bool"
  link: "/en/v1/api/either/bool"
---

# safeCallback

Runs a callback in a safe block. If the callback throws, the function returns a `"callback"` typed `Left` instead of propagating the exception. If the callback returns an `Either`, it is kept as-is.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/safeCallback/tryout.doc.ts"
  majorVersion="v1"
  height="376px"
/>

## Syntax

```typescript
function safeCallback<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): ComputeSafeCallbackResult<GenericOutput> | CallbackError;
```

## Parameters

- `theFunction` : Callback to execute in a safe block.

## Return value

- If the callback returns an `Left` or `Right`: the `Either` is returned as-is.
- If the callback succeeds with a non-`Either` value: the value is wrapped in `CallbackSuccess`.
- If the callback throws: `CallbackError` (alias of `left("callback", error)`).

## See also

- [`left`](/en/v1/api/either/left) – Build a typed `Left`.
- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Pattern match on `"callback"`.
