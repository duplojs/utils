---
outline: [2, 3]
description: "Builds an EitherRight<\"nullish\"> with a non-null/non-undefined value."
prev:
  text: "nullishEmpty"
  link: "/en/v1/api/either/nullishEmpty"
next:
  text: "isNullishEmpty"
  link: "/en/v1/api/either/isNullishEmpty"
---

# nullishFilled

Builds an `EitherRight<"nullish">` with a non-null/non-undefined value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/nullishFilled/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntax

```typescript
function nullishFilled<
	const GenericInput extends unknown
>(
  input: GenericInput
): EitherNullishFilled<GenericInput>;
```

## Parameters

- `input`: Defined value.

## Return value

`EitherNullishFilled<GenericInput>` representing a “present” case.

## See also

- [`nullish`](/en/v1/api/either/nullish).
- [`whenIsNullishFilled`](/en/v1/api/either/whenIsNullishFilled).
