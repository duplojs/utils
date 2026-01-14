---
outline: [2, 3]
description: "Type guard that checks whether a value is an EitherRight. Allows accessing the payload without explicit conversion."
prev:
  text: "fail"
  link: "/en/v1/api/either/fail"
next:
  text: "whenIsRight"
  link: "/en/v1/api/either/whenIsRight"
---

# isRight

Type guard that checks whether a value is an `EitherRight`. Allows accessing the payload without explicit conversion.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isRight/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

```typescript
function isRight<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherRight>
```

## Parameters

- `input`: Potentially `Either` value. The type can be a union.

## Return value

`true` if the input is an `EitherRight`, `false` otherwise. Thanks to the type guard, TypeScript automatically narrows the type in each branch.

## Best practices

- Combine `isRight` with `E.hasInformation` to target a specific success.
- Use it as a first guard to secure an `unwrap`.
- In a functional flow, `isRight` can be passed to `whenElse` or `filter` to separate successes from errors.

## See also

- [`whenIsRight`](/en/v1/api/either/whenIsRight) – Executes a callback only when the input is `Right`.
- [`isLeft`](/en/v1/api/either/isLeft) – `Left` counterpart.
