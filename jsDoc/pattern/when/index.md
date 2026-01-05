Applies a handler when a predicate matches.

**Supported call styles:**
- Classic: `when(input, predicate, handler)` → returns a result or the input
- Curried: `when(predicate, handler)` → returns a function waiting for the input
- Classic predicate: `when(input, isType, handler)` → narrows input types
- Curried predicate: `when(isType, handler)` → narrows input types

If the predicate matches, the handler runs and the result is wrapped for chaining.
The input is not mutated.

```ts
{@include pattern/when/example.ts[3,21]}
```

@remarks
- Predicate overloads (type guards) narrow the output type

@see [`P.otherwise`](https://utils.duplojs.dev/en/v1/api/pattern/otherwise) For fallbacks
@see https://utils.duplojs.dev/en/v1/api/pattern/when

@namespace P
