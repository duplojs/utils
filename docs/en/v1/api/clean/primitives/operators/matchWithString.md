---
outline: [2, 3]
description: "matchWithString() performs exhaustive pattern matching on a Clean string primitive value and passes the correctly narrowed original primitive to each branch."
prev:
  text: "equal"
  link: "/en/v1/api/clean/primitives/operators/equal"
next:
  text: "matchWithStringOtherwise"
  link: "/en/v1/api/clean/primitives/operators/matchWithStringOtherwise"
---

# matchWithString

`matchWithString()` performs exhaustive pattern matching on the value of a Clean string primitive. Every possible value must have a processing branch.

A Clean primitive is a wrapped object, so it cannot be used directly as a matcher key. The keys are therefore raw `string` values. When a key matches, its callback receives the original Clean primitive narrowed to that value, preserving its `Primitive`, `ConstrainedType`, or `NewType` information.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/matchWithString/tryout.doc.ts"
  majorVersion="v1"
  height="544px"
/>

## Syntax

### Classic signature

```typescript
function matchWithString<Input extends Primitive<string>, Matcher>(
  input: Input,
  matcher: Matcher
): ReturnType<Matcher[keyof Matcher]>
```

### Curried signature

```typescript
function matchWithString<Input extends Primitive<string>, Matcher>(
  matcher: Matcher
): (input: Input) => ReturnType<Matcher[keyof Matcher]>
```

## Parameters

- `input`: a Clean primitive containing a `string`, including constrained values and new types.
- `matcher`: an exhaustive object indexed by the possible raw `string` values. A broad `Primitive<string>` requires an indexed `Record<string, handler>`.

Every key must have exactly one handler. TypeScript rejects a missing key or a key outside the input union. The selected handler receives the original Clean object narrowed with `Primitive<MatchingValue>`.

## Return value

The selected handler result, typed as the union of every handler return type.

## See also

- [`matchWithNumber`](/en/v1/api/clean/primitives/operators/matchWithNumber) - Numeric primitive equivalent.
- [`equal`](/en/v1/api/clean/primitives/operators/equal) - Compares wrapped primitive values.
