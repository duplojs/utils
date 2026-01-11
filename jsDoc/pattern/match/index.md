Creates a match builder or applies a single pattern.

**Supported call styles:**
- Classic: `match(input)` → returns a match builder
- Classic: `match(input, pattern, handler)` → returns a result or the input
- Curried: `match(pattern, handler)` → returns a function waiting for the input

If the input matches the pattern, the handler runs and the result is wrapped for chaining.
The input is not mutated.

```ts
{@include pattern/match/example.ts[3,39]}
```

@see [`P.when`](https://utils.duplojs.dev/en/v1/api/pattern/when) For predicate branches
@see [`P.otherwise`](https://utils.duplojs.dev/en/v1/api/pattern/otherwise) For fallbacks
@see https://utils.duplojs.dev/en/v1/api/pattern/match

@namespace P
