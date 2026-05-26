---
outline: [2, 3]
description: "Unwraps the payload of a Left and throws a NotLeftError when the input is not Left."
prev:
  text: "unwrapLeft"
  link: "/en/v1/api/either/unwrapLeft"
next:
  text: "rightPipe"
  link: "/en/v1/api/either/rightPipe"
---

# unwrapLeftOrThrow

Unwraps the payload of a `Left` and throws a `NotLeftError` when the input is not `Left`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapLeftOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

```typescript
function unwrapLeftOrThrow<
  GenericInput extends unknown
>(
  input: GenericInput
): Unwrap<Extract<GenericInput, Left>>
```

## Parameters

- `input`: Value expected to be a `Left`.

## Return value

Returns the unwrapped payload when the input is `Left`. Otherwise, the function throws `E.NotLeftError`.

## See also

- [`isLeft`](/en/v1/api/either/isLeft) – Type guard to check the input before unwrapping.
- [`left`](/en/v1/api/either/left) – Generic `Left` constructor.
- [`unwrapByInformationOrThrow`](/en/v1/api/either/unwrapByInformationOrThrow) – Variant that targets one precise information.
