Checks whether a time is between two bounds (exclusive).

**Supported call styles:**
- Classic: `betweenThanTime(input, greater, less)` → returns a value
- Curried: `betweenThanTime(greater, less)` → returns a function waiting for the input

The input value is not mutated.

```ts
{@include date/betweenThanTime/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/date/betweenThanTime

@namespace D
