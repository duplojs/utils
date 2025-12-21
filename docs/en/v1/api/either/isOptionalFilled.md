---
outline: [2, 3]
prev:
  text: "whenIsOptionalEmpty"
  link: "/en/v1/api/either/whenIsOptionalEmpty"
next:
  text: "whenIsOptionalFilled"
  link: "/en/v1/api/either/whenIsOptionalFilled"
---

# isOptionalFilled

Type guard that checks that an `optional` contains a value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isOptionalFilled/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function isOptionalFilled<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherOptionalFilled>;
```

## Parameters

- `input`: Result of `optional`.

## Return value

`true` if the value is defined.

## See also

- [`whenIsOptionalFilled`](/en/v1/api/either/whenIsOptionalFilled).
- [`isOptionalEmpty`](/en/v1/api/either/isOptionalEmpty).
