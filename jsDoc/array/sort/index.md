Sorts an array using a compare function.

**Supported call styles:**
- Classic: `sort(array, compareFn)` → returns a new array
- Curried: `sort(compareFn)` → returns a function waiting for the array

The input array is not mutated.

```ts
{@include array/sort/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

@see https://utils.duplojs.dev/en/v1/api/array/sort

@namespace A
