Sorts dates in ascending or descending order.

**Supported call styles:**
- Classic: `sort(array, type)` → returns a value
- Curried: `sort(type)` → returns a function waiting for the input

The input value is not mutated.

```ts
{@include date/sort/example.ts[3,11]}
```

@remarks
- Sort order uses "ASC" or "DSC".

@see https://utils.duplojs.dev/en/v1/api/date/sort

@namespace D
