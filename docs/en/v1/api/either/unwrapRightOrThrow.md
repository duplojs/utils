---
outline: [2, 3]
description: "Unwraps the payload of a Right and throws a NotRightError when the input is not Right."
prev:
  text: "whenIsRightElse"
  link: "/en/v1/api/either/whenIsRightElse"
next:
  text: "isLeft"
  link: "/en/v1/api/either/isLeft"
---

# unwrapRightOrThrow

Unwraps the payload of a `Right` and throws a `NotRightError` when the input is not `Right`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapRightOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

```typescript
function unwrapRightOrThrow<
  GenericInput extends unknown
>(
  input: GenericInput
): Unwrap<Extract<GenericInput, Right>>
```

## Parameters

- `input`: Value expected to be a `Right`.

## Return value

Returns the unwrapped payload when the input is `Right`. Otherwise, the function throws `E.NotRightError`.

## See also

- [`isRight`](/en/v1/api/either/isRight) – Type guard to check the input before unwrapping.
- [`right`](/en/v1/api/either/right) – Generic `Right` constructor.
- [`unwrapByInformationOrThrow`](/en/v1/api/either/unwrapByInformationOrThrow) – Variant that also checks the literal information.
