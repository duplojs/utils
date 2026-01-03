Fills all elements of an array with a given value.

**Supported call styles:**
- Classic: `fillAll(array, value)` → returns a new array
- Curried: `fillAll(value)` → returns a function waiting for the array

The input array is not mutated.


```ts
{@include array/fillAll/example.ts[3,17]}
```

@remarks
- Uses the same semantics as [`Array.prototype.fill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

@see [`A.fill`](https://utils.duplojs.dev/en/v1/api/array/fill) For filling a range
@see https://utils.duplojs.dev/en/v1/api/array/fillAll

@namespace A
