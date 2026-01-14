---
outline: [2, 3]
description: "The toWrappedValue() function ensures a value is wrapped: if it is already a WrappedValue, it is returned as is, otherwise it is wrapped."
prev:
  text: "isRuntimeWrappedValueKey"
  link: "/en/v1/api/common/isRuntimeWrappedValueKey"
next:
  text: "unwrap"
  link: "/en/v1/api/common/unwrap"
---

# toWrappedValue

The **`toWrappedValue()`** function ensures a value is wrapped: if it is already a `WrappedValue`, it is returned as is, otherwise it is wrapped.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/toWrappedValue/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntax

```typescript
function toWrappedValue<
	GenericInnerValue extends AnyValue,
	GenericInput extends MaybeWrapped<GenericInnerValue>
>(
	input: GenericInput
): GenericInput extends WrappedValue ? GenericInput : WrappedValue<GenericInput>;
```

## Parameters

- `input` : Value (already wrapped or not) to normalize into a `WrappedValue`.

## Return value

The wrapped value, or the initial value if it was already wrapped.

## See also

- [`wrapValue`](/en/v1/api/common/wrapValue) - Wraps directly
- [`unwrap`](/en/v1/api/common/unwrap) - Unwraps a `WrappedValue`
