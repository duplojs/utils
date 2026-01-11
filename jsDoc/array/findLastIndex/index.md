Finds the index of the last element matching a predicate.

**Supported call styles:**
- Classic: `findLastIndex(array, predicate)` → returns the index or `undefined`
- Curried: `findLastIndex(predicate)` → returns a function waiting for the array

The predicate receives `(element, { index })`.

```ts
{@include array/findLastIndex/example.ts[3,17]}
```

@remarks
- Returns `undefined` when no element matches (unlike `Array.prototype.findLastIndex` which returns `-1`)
- Uses the same semantics as [`Array.prototype.findLastIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)

@see [`A.findLast`](https://utils.duplojs.dev/en/v1/api/array/findLast) For retrieving the element
@see https://utils.duplojs.dev/en/v1/api/array/findLastIndex

@namespace A
