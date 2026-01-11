---
outline: [2, 3]
description: "The wrapValue() function wraps a value in a marked container (SymbolWrappedValue) to identify it unambiguously in composite structures."
prev:
  text: "interpolation"
  link: "/en/v1/api/common/interpolation"
next:
  text: "isWrappedValue"
  link: "/en/v1/api/common/isWrappedValue"
---

# wrapValue

The **`wrapValue()`** function wraps a value in a marked container (`SymbolWrappedValue`) to identify it unambiguously in composite structures.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/wrapValue/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function wrapValue<
	const GenericInput extends unknown
>(
	input: GenericInput
): WrappedValue<GenericInput>;
```

## Parameters

- `input` : Value to wrap.

## Return value

A `WrappedValue` object containing the original value and the symbolic marker.

## See also

- [`toWrappedValue`](/en/v1/api/common/toWrappedValue) - Wraps if needed (idempotent)
- [`unwrap`](/en/v1/api/common/unwrap) - Retrieves the inner value
