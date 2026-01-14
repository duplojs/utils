---
outline: [2, 3]
description: "Wraps a null or non-null value in an Either, while keeping the information on whether it is filled or empty."
prev:
  text: "whenIsNullishFilled"
  link: "/en/v1/api/either/whenIsNullishFilled"
next:
  text: "nullableEmpty"
  link: "/en/v1/api/either/nullableEmpty"
---

# nullable

Wraps a `null` or non-`null` value in an `Either`, while keeping the information on whether it is filled or empty.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/nullable/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function nullable<
	const GenericInput extends unknown = null
>(
  input: GenericInput
): GenericInput extends null
  ? EitherNullableEmpty
  : EitherNullableFilled<GenericInput>;
```

## Parameters

- `input`: Can be `null` or a concrete value.

## Return value

- `EitherNullableFilled` if the value exists.
- `EitherNullableEmpty` if `null`.

## See also

- [`nullableEmpty`](/en/v1/api/either/nullableEmpty).
- [`nullableFilled`](/en/v1/api/either/nullableFilled).
