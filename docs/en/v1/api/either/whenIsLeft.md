---
outline: [2, 3]
prev:
  text: "isLeft"
  link: "/en/v1/api/either/isLeft"
next:
  text: "rightPipe"
  link: "/en/v1/api/either/rightPipe"
---

# whenIsLeft

Executes a function only when the input is an `EitherLeft`. Otherwise, the original value is returned as-is.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsLeft/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntax

### Classic signature

```typescript
function whenIsLeft<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, EitherLeft>>) => GenericOutput
): Exclude<GenericInput, EitherLeft> | GenericOutput;
```

### Curried signature

```typescript
function whenIsLeft<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<GenericInput, EitherLeft>>) => GenericOutput
): (input: GenericInput) => Exclude<GenericInput, EitherLeft> | GenericOutput;
```

## Parameters

- `theFunction`: Callback triggered only on the `Left` part.
- `input` *(classic overload)*: Value to process immediately. Without this argument, the function returns a curried version suited for pipelines.

## Return value

- Classic signature: returns either the transformed value (if `Left`) or the initial value.
- Curried signature: returns a function ready to use in `pipe`, `map`, etc.

## Use cases

- Log or transform an error without touching the `Right`.
- Convert a `Left` into another type (e.g., `EitherLeft` -> `string`).
- Simplify repetitive `if (E.isLeft(...))` blocks in a functional style.

## See also

- [`whenIsRight`](/en/v1/api/either/whenIsRight) – Success-side counterpart.
- [`isLeft`](/en/v1/api/either/isLeft) – Manual type guard.
- [`whenHasInformation`](/en/v1/api/either/whenHasInformation) – Pattern matching on literal information.
