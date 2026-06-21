---
outline: [2, 3]
description: "Unwraps the payload of a Right and returns the input unchanged when the input is not Right."
prev:
  text: "whenIsRightOtherwise"
  link: "/en/v1/api/either/whenIsRightOtherwise"
next:
  text: "unwrapRightOrThrow"
  link: "/en/v1/api/either/unwrapRightOrThrow"
---

# unwrapRight

Unwraps the payload of a `Right` and returns the input unchanged when the input is not `Right`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapRight/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function unwrapRight<
  GenericInput extends unknown
>(
  input: GenericInput
): GenericInput extends Right
  ? Unwrap<GenericInput>
  : GenericInput
```

## Parameters

- `input`: Value to unwrap when it is a `Right`.

## Return value

Returns the unwrapped payload for `Right`, otherwise returns `input` unchanged.

## See also

- [`unwrapRightOrThrow`](/en/v1/api/either/unwrapRightOrThrow) – Throwing variant when input is not `Right`.
- [`isRight`](/en/v1/api/either/isRight) – Type guard to check right side.
- [`unwrapByInformation`](/en/v1/api/either/unwrapByInformation) – Information-based non-throwing unwrap.
