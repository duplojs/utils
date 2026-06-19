Performs partial pattern matching on a string literal union and delegates unhandled values to an `otherwise` callback.

**Supported call styles:**
- Classic: `matchWithStringOtherwise(input, matcher, otherwise)` -> runs a matching handler or the fallback
- Curried: `matchWithStringOtherwise(matcher, otherwise)` -> returns a function waiting for the input

Matcher keys must belong to the input union, but they do not need to cover it exhaustively. Each handler receives its matching literal, while `otherwise` receives the precise union of unhandled literals.

```ts
{@include pattern/matchWithStringOtherwise/example.ts[3,30]}
```

@remarks Non-literal `string` inputs are rejected because their remaining cases cannot be represented as a finite literal union.

@see https://utils.duplojs.dev/en/v1/api/pattern/matchWithStringOtherwise
@see [`P.matchWithString`](https://utils.duplojs.dev/en/v1/api/pattern/matchWithString)

@namespace P
