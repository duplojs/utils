Reduces an array from right to left.

**Supported call styles:**
- Classic: `reduceRight(array, startValue, theFunction)` → returns the reduced value
- Curried: `reduceRight(startValue, theFunction)` → returns a function waiting for the array

The function receives `{ element, index, lastValue, next, exit, nextWithObject, nextPush, self }`.
The input array is not mutated.


```ts
{@include array/reduceRight/example.ts[3,19]}
```

@remarks
- Uses the same semantics as `reduce`, but iterates from the end

@see [`A.reduce`](https://utils.duplojs.dev/en/v1/api/array/reduce) For left-to-right reduction
@see https://utils.duplojs.dev/en/v1/api/array/reduceRight

@namespace A
