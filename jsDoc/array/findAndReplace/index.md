Finds the first element matching a predicate and replaces it.

**Supported call styles:**
- Classic: `findAndReplace(array, predicate, value)` → returns a new array or `undefined`
- Curried: `findAndReplace(predicate, value)` → returns a function waiting for the array

The predicate receives `(element, { index })`.
The input array is not mutated.

@example
```ts
{@include array/findAndReplace/example.ts[3,10]}
```

@remarks
- Returns `undefined` when no element matches

@see [`A.find`](https://utils.duplojs.dev/en/v1/api/array/find) For finding an element
@see [`A.findAndSpliceReplace`](https://utils.duplojs.dev/en/v1/api/array/findAndSpliceReplace) For replacing via splice
@see https://utils.duplojs.dev/en/v1/api/array/findAndReplace

@namespace A
