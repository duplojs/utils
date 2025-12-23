---
outline: [2, 3]
prev:
  text: "whenIsNullishEmpty"
  link: "/en/v1/api/either/whenIsNullishEmpty"
next:
  text: "whenIsNullishFilled"
  link: "/en/v1/api/either/whenIsNullishFilled"
---

# isNullishFilled

Type guard that detects an `EitherNullishFilled`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isNullishFilled/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function isNullishFilled<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherNullishFilled>;
```

## Parameters

- `input`: `Either` coming from `nullish` or `nullishFilled`.

## Return value

`true` if the encapsulated information is defined.

## See also

- [`whenIsNullishFilled`](/en/v1/api/either/whenIsNullishFilled).
- [`isNullishEmpty`](/en/v1/api/either/isNullishEmpty).
