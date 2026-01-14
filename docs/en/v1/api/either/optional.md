---
outline: [2, 3]
description: "Wraps an undefined/defined value in an Either, useful for propagating optional fields."
prev:
  text: "whenIsNullableFilled"
  link: "/en/v1/api/either/whenIsNullableFilled"
next:
  text: "optionalEmpty"
  link: "/en/v1/api/either/optionalEmpty"
---

# optional

Wraps an `undefined`/defined value in an `Either`, useful for propagating optional fields.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/optional/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function optional<
	const GenericInput extends unknown = undefined
>(
  input: GenericInput
): GenericInput extends undefined
  ? EitherOptionalEmpty
  : EitherOptionalFilled<GenericInput>;
```

## Parameters

- `input`: Can be `undefined` or a concrete value.

## Return value

- `EitherOptionalFilled` if the value is defined.
- `EitherOptionalEmpty` otherwise.

## See also

- [`optionalEmpty`](/en/v1/api/either/optionalEmpty).
- [`optionalFilled`](/en/v1/api/either/optionalFilled).
