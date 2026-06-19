---
outline: [2, 3]
description: "matchWithStringOtherwise() partially matches a string literal union and sends precisely the unhandled values to an otherwise callback."
prev:
  text: "matchWithString"
  link: "/en/v1/api/pattern/matchWithString"
next:
  text: "matchWithNumber"
  link: "/en/v1/api/pattern/matchWithNumber"
---

# matchWithStringOtherwise

`matchWithStringOtherwise()` handles selected members of a string literal union. Matcher keys must belong to the input union, but may omit cases. The `otherwise` callback receives only the literals that have no handler.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/matchWithStringOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntax

### Classic signature

```typescript
function matchWithStringOtherwise<Input extends string, Matcher, Output>(
  input: Input,
  matcher: Matcher,
  otherwise: (value: UnhandledValues) => Output
): MatcherResult | Output
```

### Curried signature

```typescript
function matchWithStringOtherwise<Input extends string, Matcher, Output>(
  matcher: Matcher,
  otherwise: (value: UnhandledValues) => Output
): (input: Input) => MatcherResult | Output
```

## Parameters

- `input`: a string literal or literal union; broad `string` values are rejected.
- `matcher`: a partial object whose keys can only be members of `input`. A property may be `undefined` to route that case to `otherwise`.
- `otherwise`: receives the exact union of cases without a handler.

## Return value

The selected handler result, or the `otherwise` result for an unhandled value.

## See also

- [`matchWithString`](/en/v1/api/pattern/matchWithString) - Exhaustive string matching.
- [`matchWithNumberOtherwise`](/en/v1/api/pattern/matchWithNumberOtherwise) - Numeric partial matching.
