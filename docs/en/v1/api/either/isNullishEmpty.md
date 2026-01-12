---
outline: [2, 3]
description: "Type guard detecting an EitherNullishEmpty."
prev:
  text: "nullishFilled"
  link: "/en/v1/api/either/nullishFilled"
next:
  text: "whenIsNullishEmpty"
  link: "/en/v1/api/either/whenIsNullishEmpty"
---

# isNullishEmpty

Type guard detecting an `EitherNullishEmpty`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isNullishEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function isNullishEmpty<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherNullishEmpty>;
```

## Parameters

- `input`: `Either` coming from the nullish helpers.

## Return value

`true` if the wrapped value is `null` or `undefined`.

## See also

- [`whenIsNullishEmpty`](/en/v1/api/either/whenIsNullishEmpty).
- [`isNullishFilled`](/en/v1/api/either/isNullishFilled).
