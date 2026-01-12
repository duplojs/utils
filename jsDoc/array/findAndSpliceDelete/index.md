Finds the first element matching a predicate and deletes a segment.

**Supported call styles:**
- Classic: `findAndSpliceDelete(array, predicate, deleteCount)` → returns a new array or `undefined`
- Curried: `findAndSpliceDelete(predicate, deleteCount)` → returns a function waiting for the array

The predicate receives `(element, { index })`.
The input array is not mutated.

```ts
{@include array/findAndSpliceDelete/example.ts[3,19]}
```

@remarks
- Returns `undefined` when no element matches

@see [`A.findAndSpliceInsert`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceInsert) For inserting elements
@see [`A.findAndSpliceReplace`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceReplace) For replacing elements
@see https://utils.duplojs.dev/en/v1/api/array/findAndSpliceDelete

@namespace A
