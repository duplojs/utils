Finds the index of the first element matching a predicate.

**Supported call styles:**
- Classic: `findIndex(array, predicate)` → returns the index or `undefined`
- Curried: `findIndex(predicate)` → returns a function waiting for the array

The predicate receives `(element, { index })`.

```ts
{@include array/findIndex/example.ts[3,17]}
```

@remarks
- Returns `undefined` when no element matches (unlike `Array.prototype.findIndex` which returns `-1`)
- Uses the same semantics as [`Array.prototype.findIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

@see [`A.find`](https://utils.duplojs.dev/en/v1/api/array/find) For retrieving the element
@see https://utils.duplojs.dev/en/v1/api/array/findIndex

@namespace A
