---
outline: [2, 3]
description: "The unwrap() function extracts the inner value of a WrappedValue. If the input is not wrapped, it is returned as is."
prev:
  text: "toWrappedValue"
  link: "/en/v1/api/common/toWrappedValue"
next:
  text: "addWrappedProperties"
  link: "/en/v1/api/common/addWrappedProperties"
---

# unwrap

The **`unwrap()`** function extracts the inner value of a `WrappedValue`. If the input is not wrapped, it is returned as is.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/unwrap/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

```typescript
type Unwrap<
	GenericAnyValue extends unknown
> = GenericAnyValue extends WrappedValue<infer inferredValue>
		? inferredValue
		: GenericAnyValue;

function unwrap<
	GenericInput extends AnyValue,
	GenericAnyValue extends AnyValue | WrappedValue<GenericInput>
>(
	anyValue: GenericAnyValue
): Unwrap<GenericAnyValue>;
```

## Parameters

- `anyValue` : Wrapped or non-wrapped value to unpack.

## Return value

The inner value if the input was wrapped, otherwise the input value.

## See also

- [`wrapValue`](/en/v1/api/common/wrapValue) - Wraps a value
