Finds the last index of a value.

**Supported call styles:**
- Classic: `lastIndexOf(array, value, fromIndex?)` → returns the index or `undefined`
- Curried: `lastIndexOf(value)` → returns a function waiting for the array

The input array is not mutated.


```ts
{@include array/lastIndexOf/example.ts[3,17]}
```

@remarks
- Returns `undefined` when not found (unlike `Array.prototype.lastIndexOf` which returns `-1`)
- Curried style does not accept `fromIndex`

@see [`A.indexOf`](https://utils.duplojs.dev/en/v1/api/array/indexOf) For searching from the start
@see https://utils.duplojs.dev/en/v1/api/array/lastIndexOf

@namespace A
