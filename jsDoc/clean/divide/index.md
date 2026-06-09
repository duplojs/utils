Divides a Number by a non-zero divisor and returns a wrapped Number.

**Supported call styles:**
- Classic: `divide(value, divisor)` -> returns a Number
- Curried: `divide(divisor)` -> returns a function waiting for the value

Use it for domain arithmetic while keeping numbers wrapped. The divisor must be validated with the `NotZero` constraint before it is passed to `divide`.

```ts
{@include clean/divide/example.ts[3,19]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/divide

@namespace C
