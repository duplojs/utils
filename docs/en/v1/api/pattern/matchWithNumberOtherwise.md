---
outline: [2, 3]
description: "matchWithNumberOtherwise() partially matches a number literal union and sends precisely the unhandled values to an otherwise callback."
prev:
  text: "matchWithNumber"
  link: "/en/v1/api/pattern/matchWithNumber"
next:
  text: "when"
  link: "/en/v1/api/pattern/when"
---

# matchWithNumberOtherwise

`matchWithNumberOtherwise()` handles selected members of a number literal union. Matcher keys must belong to the input union, but may omit cases. The `otherwise` callback receives only the literals that have no handler.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/pattern/matchWithNumberOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntax

### Classic signature

```typescript
function matchWithNumberOtherwise<Input extends number, Matcher, Output>(
  input: Input,
  matcher: Matcher,
  otherwise: (value: UnhandledValues) => Output
): MatcherResult | Output
```

### Curried signature

```typescript
function matchWithNumberOtherwise<Input extends number, Matcher, Output>(
  matcher: Matcher,
  otherwise: (value: UnhandledValues) => Output
): (input: Input) => MatcherResult | Output
```

## Parameters

- `input`: a number literal or literal union; broad `number` values are rejected.
- `matcher`: a partial object whose keys can only be members of `input`. A property may be `undefined` to route that case to `otherwise`.
- `otherwise`: receives the exact union of cases without a handler.

## Return value

The selected handler result, or the `otherwise` result for an unhandled value.

## See also

- [`matchWithNumber`](/en/v1/api/pattern/matchWithNumber) - Exhaustive number matching.
- [`matchWithStringOtherwise`](/en/v1/api/pattern/matchWithStringOtherwise) - String partial matching.
