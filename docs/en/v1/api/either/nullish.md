---
outline: [2, 3]
description: "Transforms a potentially null/undefined value into an Either. Allows propagating presence/absence in a type-safe way."
prev:
  text: "whenIsBoolFalsy"
  link: "/en/v1/api/either/whenIsBoolFalsy"
next:
  text: "nullishEmpty"
  link: "/en/v1/api/either/nullishEmpty"
---

# nullish

Transforms a potentially `null`/`undefined` value into an `Either`. Allows propagating presence/absence in a type-safe way.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/nullish/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function nullish<const GenericInput extends unknown = undefined>(
  input: GenericInput
): GenericInput extends NullishValue
  ? EitherNullishEmpty<GenericInput>
  : EitherNullishFilled<GenericInput>;
```

## Parameters

- `input`: Value to wrap (`null`, `undefined`, or any other value).

## Return value

- `EitherNullishFilled` when the value exists.
- `EitherNullishEmpty` when the value is `null` or `undefined`.

## See also

- [`nullishEmpty`](/en/v1/api/either/nullishEmpty).
- [`nullishFilled`](/en/v1/api/either/nullishFilled).
- [`whenIsNullishFilled`](/en/v1/api/either/whenIsNullishFilled).
