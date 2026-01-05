---
outline: [2, 3]
description: "Builds an EitherRight<\"optional\"> when the value is defined."
prev:
  text: "optionalEmpty"
  link: "/en/v1/api/either/optionalEmpty"
next:
  text: "isOptionalEmpty"
  link: "/en/v1/api/either/isOptionalEmpty"
---

# optionalFilled

Builds an `EitherRight<"optional">` when the value is defined.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/optionalFilled/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntax

```typescript
function optionalFilled<
	const GenericInput extends unknown
>(
  input: GenericInput
): EitherOptionalFilled<GenericInput>;
```

## Parameters

- `input`: Defined value.

## Return value

`EitherOptionalFilled<GenericInput>`.

## See also

- [`optional`](/en/v1/api/either/optional).
- [`whenIsOptionalFilled`](/en/v1/api/either/whenIsOptionalFilled).
