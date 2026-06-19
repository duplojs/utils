Performs partial pattern matching on a Clean string primitive and delegates unhandled values to an `otherwise` callback.

**Supported call styles:**
- Classic: `matchWithStringOtherwise(input, matcher, otherwise)` -> runs a matching handler or the fallback
- Curried: `matchWithStringOtherwise(matcher, otherwise)` -> returns a function waiting for the primitive

Raw string values are used as matcher keys. Handlers receive the original primitive narrowed to their key, and `otherwise` receives the same original primitive narrowed to all remaining values.

```ts
{@include clean/matchWithStringOtherwise/example.ts[3,32]}
```

@remarks Constraints and `NewType` metadata remain attached to the primitive passed to every callback.

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithStringOtherwise
@see [`C.matchWithString`](https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithString)

@namespace C
