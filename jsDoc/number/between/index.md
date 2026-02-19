Checks if a number is within a range (inclusive).

**Supported call styles:**
- Classic: `between(value, greater, less)` → returns a boolean
- Curried: `between(greater, less)` → returns a function waiting for the value

```ts
{@include number/between/example.ts[3,13]}
```

@see [`N.betweenThan`](https://utils.duplojs.dev/en/v1/api/number/betweenThan) For strict bounds
@see https://utils.duplojs.dev/en/v1/api/number/between

@namespace N
