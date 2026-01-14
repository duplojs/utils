Applies a handler when a predicate fails.

**Supported call styles:**
- Classic: `whenNot(input, predicate, handler)` -> returns a result or the input
- Curried: `whenNot(predicate, handler)` -> returns a function waiting for the input
- Classic predicate: `whenNot(input, isType, handler)` -> narrows input types
- Curried predicate: `whenNot(isType, handler)` -> narrows input types

If the predicate fails, the handler runs and the result is wrapped for chaining.
The input is not mutated.

```ts
{@include pattern/whenNot/example.ts[3,21]}
```

@remarks
- Predicate overloads (type guards) narrow the output type

@see [`P.otherwise`](https://utils.duplojs.dev/en/v1/api/pattern/otherwise) For fallbacks
@see https://utils.duplojs.dev/en/v1/api/pattern/whenNot

@namespace P
