Checks if a number is within a range (exclusive).

**Supported call styles:**
- Classic: `betweenThan(value, greaterThan, lessThan)` → returns a boolean
- Curried: `betweenThan(greaterThan, lessThan)` → returns a function waiting for the value

```ts
{@include number/betweenThan/example.ts[3,19]}
```

@see [`N.between`](https://utils.duplojs.dev/en/v1/api/number/between) For inclusive bounds
@see https://utils.duplojs.dev/en/v1/api/number/betweenThan

@namespace N
