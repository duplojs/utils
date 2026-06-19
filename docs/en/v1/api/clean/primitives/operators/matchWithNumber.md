---
outline: [2, 3]
description: "matchWithNumber() performs exhaustive pattern matching on a Clean number primitive value and passes the correctly narrowed original primitive to each branch."
prev:
  text: "matchWithStringOtherwise"
  link: "/en/v1/api/clean/primitives/operators/matchWithStringOtherwise"
next:
  text: "matchWithNumberOtherwise"
  link: "/en/v1/api/clean/primitives/operators/matchWithNumberOtherwise"
---

# matchWithNumber

`matchWithNumber()` performs exhaustive pattern matching on the value of a Clean number primitive. Every possible value must have a processing branch.

A Clean primitive is a wrapped object, so it cannot be used directly as a matcher key. The keys are therefore raw `number` values. When a key matches, its callback receives the original Clean primitive narrowed to that value, preserving its `Primitive`, `ConstrainedType`, or `NewType` information.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/matchWithNumber/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntax

### Classic signature

```typescript
function matchWithNumber<Input extends Primitive<number>, Matcher>(
  input: Input,
  matcher: Matcher
): ReturnType<Matcher[keyof Matcher]>
```

### Curried signature

```typescript
function matchWithNumber<Input extends Primitive<number>, Matcher>(
  matcher: Matcher
): (input: Input) => ReturnType<Matcher[keyof Matcher]>
```

## Parameters

- `input`: a Clean primitive containing a `number`, including constrained values and new types.
- `matcher`: an exhaustive object indexed by the possible raw `number` values. A broad `Primitive<number>` requires an indexed `Record<number, handler>`.

Every key must have exactly one handler. TypeScript rejects a missing key or a key outside the input union. The selected handler receives the original Clean object narrowed with `Primitive<MatchingValue>`.

## Return value

The selected handler result, typed as the union of every handler return type.

## See also

- [`matchWithString`](/en/v1/api/clean/primitives/operators/matchWithString) - String primitive equivalent.
- [`equal`](/en/v1/api/clean/primitives/operators/equal) - Compares wrapped primitive values.
