Performs partial pattern matching on a number literal union and delegates unhandled values to an `otherwise` callback.

**Supported call styles:**
- Classic: `matchWithNumberOtherwise(input, matcher, otherwise)` -> runs a matching handler or the fallback
- Curried: `matchWithNumberOtherwise(matcher, otherwise)` -> returns a function waiting for the input

Matcher keys must belong to the input union, but they do not need to cover it exhaustively. Each handler receives its matching literal, while `otherwise` receives the precise union of unhandled literals.

```ts
{@include pattern/matchWithNumberOtherwise/example.ts[3,30]}
```

@remarks Non-literal `number` inputs are rejected because their remaining cases cannot be represented as a finite literal union.

@see https://utils.duplojs.dev/en/v1/api/pattern/matchWithNumberOtherwise
@see [`P.matchWithNumber`](https://utils.duplojs.dev/en/v1/api/pattern/matchWithNumber)

@namespace P
