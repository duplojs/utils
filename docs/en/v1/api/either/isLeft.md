---
outline: [2, 3]
description: "Type guard that checks whether a value is an EitherLeft. Ideal to secure an unwrap or trigger an error branch."
prev:
  text: "whenIsRight"
  link: "/en/v1/api/either/whenIsRight"
next:
  text: "whenIsLeft"
  link: "/en/v1/api/either/whenIsLeft"
---

# isLeft

Type guard that checks whether a value is an `EitherLeft`. Ideal to secure an `unwrap` or trigger an error branch.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/isLeft/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function isLeft<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherLeft>
```

## Parameters

- `input`: Potentially `Either` value. Can be a `Left | Right` union.

## Return value

`true` when the input is an `EitherLeft`. The type is then narrowed to include only the `Left` part.

## Best practices

- Use `isLeft` before reading the encapsulated value on the error side.
- Combine it with `E.hasInformation` to target a specific business error.
- In pipelines, `isLeft` can be passed to `whenElse` to short-circuit on the first error.

## See also

- [`isRight`](/en/v1/api/either/isRight) – Success-side counterpart.
- [`whenIsLeft`](/en/v1/api/either/whenIsLeft) – Functional version with callback.
