Reduces an array to a single value.

**Supported call styles:**
- Classic: `reduce(array, startValue, theFunction)` → returns the reduced value
- Curried: `reduce(startValue, theFunction)` → returns a function waiting for the array

The function receives `{ element, index, lastValue, next, exit, nextWithObject, nextPush, self }`.
The input array is not mutated.


```ts
{@include array/reduce/example.ts[3,19]}
```

@remarks
- `exit` stops the reduction early

@see [`A.reduceFrom`](https://utils.duplojs.dev/en/v1/api/array/reduceFrom) For typed start values
@see [`A.reduceRight`](https://utils.duplojs.dev/en/v1/api/array/reduceRight) For reducing from the end
@see https://utils.duplojs.dev/en/v1/api/array/reduce

@namespace A
