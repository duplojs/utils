---
outline: [2, 3]
description: "matchWithStringOtherwise() partially matches a Clean string primitive while preserving the narrowed original primitive in handlers and otherwise."
prev:
  text: "matchWithString"
  link: "/en/v1/api/clean/primitives/operators/matchWithString"
next:
  text: "matchWithNumber"
  link: "/en/v1/api/clean/primitives/operators/matchWithNumber"
---

# matchWithStringOtherwise

`matchWithStringOtherwise()` handles selected values of a Clean string primitive. Raw string values form the matcher keys. Missing cases are sent to `otherwise`, which receives the original primitive narrowed to the remaining values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/matchWithStringOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntax

### Classic signature

```typescript
function matchWithStringOtherwise<Input extends Primitive<string>, Matcher, Output>(
  input: Input,
  matcher: Matcher,
  otherwise: (value: UnhandledPrimitive) => Output
): MatcherResult | Output
```

### Curried signature

```typescript
function matchWithStringOtherwise<Input extends Primitive<string>, Matcher, Output>(
  matcher: Matcher,
  otherwise: (value: UnhandledPrimitive) => Output
): (input: Input) => MatcherResult | Output
```

## Parameters

- `input`: a Clean string primitive with literal values.
- `matcher`: a partial object indexed by raw values from the primitive. Unknown keys are rejected.
- `otherwise`: receives the original `Primitive`, `ConstrainedType`, or `NewType`, narrowed to values without a handler.

## Return value

The selected handler result, or the `otherwise` result for an unhandled wrapped value.

## See also

- [`matchWithString`](/en/v1/api/clean/primitives/operators/matchWithString) - Exhaustive primitive matching.
- [`matchWithNumberOtherwise`](/en/v1/api/clean/primitives/operators/matchWithNumberOtherwise) - Number primitive equivalent.
