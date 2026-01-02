Finds the first element matching a predicate and replaces a segment.

**Supported call styles:**
- Classic: `findAndSpliceReplace(array, predicate, elements)` → returns a new array or `undefined`
- Curried: `findAndSpliceReplace(predicate, elements)` → returns a function waiting for the array

The predicate receives `(element, { index })`.
The input array is not mutated.

@example
```ts
{@include array/findAndSpliceReplace/example.ts[3,21]}
```

@remarks
- Returns `undefined` when no element matches

@see [`A.findAndSpliceDelete`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceDelete) For deleting elements
@see [`A.findAndSpliceInsert`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceInsert) For inserting elements
@see https://utils.duplojs.dev/en/v1/api/array/findAndSpliceReplace

@namespace A
