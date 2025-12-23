---
outline: [2, 3]
prev:
  text: "wrapValue"
  link: "/en/v1/api/common/wrapValue"
next:
  text: "isRuntimeWrappedValueKey"
  link: "/en/v1/api/common/isRuntimeWrappedValueKey"
---

# isWrappedValue

The **`isWrappedValue()`** function is a type guard that checks whether a value is a `WrappedValue` created via `wrapValue`/`toWrappedValue`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/isWrappedValue/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function isWrappedValue<
	GenericInput extends unknown
>(
	input: GenericInput
): input is Extract<GenericInput, WrappedValue<any>>;
```

## Parameters

- `input` : Potentially wrapped value to test.

## Return value

A boolean, and a type narrowing to `WrappedValue<...>` when true.

## See also

- [`wrapValue`](/en/v1/api/common/wrapValue) - Wraps a value
- [`toWrappedValue`](/en/v1/api/common/toWrappedValue) - Wraps if needed
