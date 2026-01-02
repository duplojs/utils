Accesses an element at a given index, supporting negative indices.

**Supported call styles:**
- Classic: `at(array, index)` → returns the element
- Curried: `at(index)` → returns a function waiting for the array

**Negative indices:** `-1` is the last element, `-2` is second-to-last, etc.
Returns `undefined` if out of bounds.

@example
```ts
{@include array/at/example.ts[3,10]}
```

@remarks
- Type-safe with tuple types: return type is inferred based on the index
- Does not mutate the input array
- Works seamlessly in functional composition and pipes

@see [`A.first`](https://utils.duplojs.dev/en/v1/api/array/first) For accessing the first element
@see [`A.last`](https://utils.duplojs.dev/en/v1/api/array/last) For accessing the last element
@see https://utils.duplojs.dev/en/v1/api/array/at

@namespace A