---
outline: [2, 3]
prev:
  text: "whenHasInformation"
  link: "/en/v1/api/either/whenHasInformation"
next:
  text: "bool"
  link: "/en/v1/api/either/bool"
---

# safeCallback

Runs a callback in a safe block. If the callback throws, the function returns a `"callback"` typed `EitherLeft` instead of propagating the exception.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/safeCallback/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

```typescript
function safeCallback<GenericOutput extends unknown>(
  theFunction: () => GenericOutput
): GenericOutput | EitherCallbackError;
```

## Parameters

- `theFunction` : Callback to execute in a safe block.

## Return value

- If the callback succeeds: the value returned by `theFunction`.
- If the callback throws: `EitherCallbackError` (alias of `left("callback", error)`).

## See also

- [`left`](/en/v1/api/either/left) – Build a typed `Left`.
- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Pattern match on `"callback"`.
