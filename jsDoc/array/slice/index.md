Slices a portion of an array.

**Supported call styles:**
- Classic: `slice(array, start?, end?)` → returns a new array
- Curried: `slice(start?, end?)` → returns a function waiting for the array

The input array is not mutated.


```ts
{@include array/slice/example.ts[3,18]}
```

@remarks
- Uses the same semantics as [`Array.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

@see https://utils.duplojs.dev/en/v1/api/array/slice

@namespace A
