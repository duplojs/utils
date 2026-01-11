Sorts time values in ascending or descending order.

**Supported call styles:**
- Classic: `sortTimes(array, type)` → returns a value
- Curried: `sortTimes(type)` → returns a function waiting for the input

The input value is not mutated.

```ts
{@include date/sortTimes/example.ts[3,18]}
```

@remarks
- Sort order uses "ASC" or "DSC".

@see https://utils.duplojs.dev/en/v1/api/date/sortTimes

@namespace D
