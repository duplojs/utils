Performs partial pattern matching on a Clean number primitive and delegates unhandled values to an `otherwise` callback.

**Supported call styles:**
- Classic: `matchWithNumberOtherwise(input, matcher, otherwise)` -> runs a matching handler or the fallback
- Curried: `matchWithNumberOtherwise(matcher, otherwise)` -> returns a function waiting for the primitive

Raw number values are used as matcher keys. Handlers receive the original primitive narrowed to their key, and `otherwise` receives the same original primitive narrowed to all remaining values.

```ts
{@include clean/matchWithNumberOtherwise/example.ts[3,32]}
```

@remarks Constraints and `NewType` metadata remain attached to the primitive passed to every callback.

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithNumberOtherwise
@see [`C.matchWithNumber`](https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithNumber)

@namespace C
