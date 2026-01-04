Joins array elements into a string.

**Supported call styles:**
- Classic: `join(array, separator)` → returns a string
- Curried: `join(separator)` → returns a function waiting for the array

The input array is not mutated.


```ts
{@include array/join/example.ts[3,16]}
```

@remarks
- Tuple inputs preserve their literal joined type
- Uses the same semantics as [`Array.prototype.join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

@see https://utils.duplojs.dev/en/v1/api/array/join

@namespace A
