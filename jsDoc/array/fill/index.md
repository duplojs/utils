Fills part of an array with a given value.

**Supported call styles:**
- Classic: `fill(array, value, start, end)` → returns a new array
- Curried: `fill(value, start, end)` → returns a function waiting for the array

The fill operation applies from `start` (inclusive) to `end` (exclusive).
The input array is not mutated.

@example
```ts
{@include array/fill/example.ts[3,17]}
```

@remarks
- Uses the same semantics as [`Array.prototype.fill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) for `start` and `end`

@see https://utils.duplojs.dev/en/v1/api/array/fill

@namespace A
