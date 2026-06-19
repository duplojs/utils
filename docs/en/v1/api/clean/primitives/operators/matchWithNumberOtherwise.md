---
outline: [2, 3]
description: "matchWithNumberOtherwise() partially matches a Clean number primitive while preserving the narrowed original primitive in handlers and otherwise."
prev:
  text: "matchWithNumber"
  link: "/en/v1/api/clean/primitives/operators/matchWithNumber"
next:
  text: "add"
  link: "/en/v1/api/clean/primitives/operators/add"
---

# matchWithNumberOtherwise

`matchWithNumberOtherwise()` handles selected values of a Clean number primitive. Raw number values form the matcher keys. Missing cases are sent to `otherwise`, which receives the original primitive narrowed to the remaining values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/matchWithNumberOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntax

### Classic signature

```typescript
function matchWithNumberOtherwise<Input extends Primitive<number>, Matcher, Output>(
  input: Input,
  matcher: Matcher,
  otherwise: (value: UnhandledPrimitive) => Output
): MatcherResult | Output
```

### Curried signature

```typescript
function matchWithNumberOtherwise<Input extends Primitive<number>, Matcher, Output>(
  matcher: Matcher,
  otherwise: (value: UnhandledPrimitive) => Output
): (input: Input) => MatcherResult | Output
```

## Parameters

- `input`: a Clean number primitive with literal values.
- `matcher`: a partial object indexed by raw values from the primitive. Unknown keys are rejected.
- `otherwise`: receives the original `Primitive`, `ConstrainedType`, or `NewType`, narrowed to values without a handler.

## Return value

The selected handler result, or the `otherwise` result for an unhandled wrapped value.

## See also

- [`matchWithNumber`](/en/v1/api/clean/primitives/operators/matchWithNumber) - Exhaustive primitive matching.
- [`matchWithStringOtherwise`](/en/v1/api/clean/primitives/operators/matchWithStringOtherwise) - String primitive equivalent.
