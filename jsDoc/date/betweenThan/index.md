Checks whether a date is between two dates (exclusive).

**Supported call styles:**
- Classic: `betweenThan(input, greater, less)` → returns a value
- Curried: `betweenThan(greater, less)` → returns a function waiting for the input

The input value is not mutated.

```ts
{@include date/betweenThan/example.ts[3,14]}
```

@remarks
- Bounds are exclusive.

@see https://utils.duplojs.dev/en/v1/api/date/betweenThan

@namespace D
