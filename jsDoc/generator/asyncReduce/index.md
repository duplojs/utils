Reduces an iterable to a single value with async support.

**Supported call styles:**
- Classic: `asyncReduce(iterator, startValue, theFunction)` → returns a promise
- Curried: `asyncReduce(startValue, theFunction)` → returns a function waiting for the iterator

The function receives `{ element, index, lastValue, next, exit, nextWithObject }`.
The input iterator is not mutated.

```ts
{@include generator/asyncReduce/example.ts[3,14]}
```

@remarks
- `exit` stops the reduction early

@see [`G.reduce`](https://utils.duplojs.dev/en/v1/api/generator/reduce) For sync iterables
@see https://utils.duplojs.dev/en/v1/api/generator/asyncReduce

@namespace G
