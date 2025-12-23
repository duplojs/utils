---
outline: [2, 3]
prev:
  text: "optionalFilled"
  link: "/en/v1/api/either/optionalFilled"
next:
  text: "whenIsOptionalEmpty"
  link: "/en/v1/api/either/whenIsOptionalEmpty"
---

# isOptionalEmpty

Type guard that detects an `EitherOptionalEmpty`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isOptionalEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function isOptionalEmpty<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherOptionalEmpty>;
```

## Parameters

- `input`: `Either` coming from `optional`.

## Return value

`true` if the value is `undefined`.

## See also

- [`whenIsOptionalEmpty`](/en/v1/api/either/whenIsOptionalEmpty).
- [`isOptionalFilled`](/en/v1/api/either/isOptionalFilled).
