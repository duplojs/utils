---
outline: [2, 3]
description: "Applies a function only when the input is an EitherRight. Otherwise, the original value is returned as-is."
prev:
  text: "isRight"
  link: "/en/v1/api/either/isRight"
next:
  text: "isLeft"
  link: "/en/v1/api/either/isLeft"
---

# whenIsRight

Applies a function only when the input is an `EitherRight`. Otherwise, the original value is returned as-is.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsRight/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

### Classic signature

```typescript
function whenIsRight<
	const GenericInput extends unknown, 
	const GenericOutput
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, EitherRight>>) => GenericOutput
): Exclude<GenericInput, EitherRight> | GenericOutput;
```

### Curried signature

```typescript
function whenIsRight<
	const GenericInput extends unknown, 
	const GenericOutput
>(
  theFunction: (value: Unwrap<Extract<GenericInput, EitherRight>>) => GenericOutput
): (input: GenericInput) => Exclude<GenericInput, EitherRight> | GenericOutput;
```

## Parameters

- `theFunction`: Callback executed only on the `Right` part.
- `input` *(overload 2)*: Value to process immediately (otherwise the returned function awaits an `Either`).

## Return value

- Curried overload: returns a function ready to use in a pipeline.
- Direct overload: returns either the callback result (if `Right`) or the initial value.

## Use cases

- Enrich a `Right` (logging, transformation) without touching `Left` values.
- Inject `whenIsRight` into `pipe` to keep a smooth flow.
- Replace repetitive `if (E.isRight(...))` with a functional API.

## See also

- [`isRight`](/en/v1/api/either/isRight) – Manually test the type before acting.
- [`whenIsLeft`](/en/v1/api/either/whenIsLeft) – Error-side counterpart.
- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Pattern matching based on literal info.
