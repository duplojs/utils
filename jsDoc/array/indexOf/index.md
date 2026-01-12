Finds the first index of a value.

**Supported call styles:**
- Classic: `indexOf(array, value, fromIndex?)` → returns the index or `undefined`
- Curried: `indexOf(value)` → returns a function waiting for the array

The input array is not mutated.

```ts
{@include array/indexOf/example.ts[3,18]}
```

@remarks
- Returns `undefined` when not found (unlike `Array.prototype.indexOf` which returns `-1`)
- Curried style does not accept `fromIndex`

@see [`A.lastIndexOf`](https://utils.duplojs.dev/en/v1/api/array/lastIndexOf) For searching from the end
@see https://utils.duplojs.dev/en/v1/api/array/indexOf

@namespace A
