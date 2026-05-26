---
outline: [2, 3]
description: "Unwraps the payload of a Left and returns the input unchanged when the input is not Left."
prev:
  text: "whenIsLeftElse"
  link: "/en/v1/api/either/whenIsLeftElse"
next:
  text: "unwrapLeftOrThrow"
  link: "/en/v1/api/either/unwrapLeftOrThrow"
---

# unwrapLeft

Unwraps the payload of a `Left` and returns the input unchanged when the input is not `Left`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapLeft/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function unwrapLeft<
  GenericInput extends unknown
>(
  input: GenericInput
): GenericInput extends Left
  ? Unwrap<GenericInput>
  : GenericInput
```

## Parameters

- `input`: Value to unwrap when it is a `Left`.

## Return value

Returns the unwrapped payload for `Left`, otherwise returns `input` unchanged.

## See also

- [`unwrapLeftOrThrow`](/en/v1/api/either/unwrapLeftOrThrow) – Throwing variant when input is not `Left`.
- [`isLeft`](/en/v1/api/either/isLeft) – Type guard to check left side.
- [`unwrapByInformation`](/en/v1/api/either/unwrapByInformation) – Information-based non-throwing unwrap.
