Reduces an iterable to a single value.

**Supported call styles:**
- Classic: `reduce(iterator, startValue, theFunction)` → returns the reduced value
- Curried: `reduce(startValue, theFunction)` → returns a function waiting for the iterator

The function receives `{ element, index, lastValue, next, exit, nextWithObject, nextPush }`.
The input iterator is not mutated.

```ts
{@include generator/reduce/example.ts[3,18]}
```

@remarks
- `exit` stops the reduction early

@see [`G.reduceFrom`](https://utils.duplojs.dev/en/v1/api/generator/reduceFrom) For typed start values
@see [`G.asyncReduce`](https://utils.duplojs.dev/en/v1/api/generator/asyncReduce) For async iterables
@see https://utils.duplojs.dev/en/v1/api/generator/reduce

@namespace G
