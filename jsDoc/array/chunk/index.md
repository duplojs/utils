Splits an array into chunks of a given size.

**Supported call styles:**
- Classic: `chunk(array, size)` → returns a new array of chunks
- Curried: `chunk(size)` → returns a function waiting for the array

Each chunk contains up to `size` items, and the last chunk may be smaller.
The input array is not mutated.

@example
```ts
{@include array/chunk/example.ts[3,9]}
```

@remarks
- `size` should be a positive integer to avoid unexpected behavior

@see https://utils.duplojs.dev/en/v1/api/array/chunk

@namespace A