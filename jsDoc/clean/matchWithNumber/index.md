Performs exhaustive pattern matching on the value of a Clean number primitive.

**Supported call styles:**
- Classic: `matchWithNumber(input, matcher)` -> runs the handler matching the wrapped value
- Curried: `matchWithNumber(matcher)` -> returns a function waiting for the primitive

A Clean primitive cannot be used directly as an object key, so the matcher uses raw number values as keys. Every possible value must have a handler. The selected handler receives the original Clean primitive narrowed to the matching key, preserving its constraints and `NewType` metadata.

```ts
{@include clean/matchWithNumber/example.ts[3,27]}
```

@remarks A broad `Primitive<number>` is supported with a `Record<number, handler>` matcher. Literal unions reject missing and additional keys.

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithNumber
@see [`C.matchWithString`](https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/matchWithString)

@namespace C
