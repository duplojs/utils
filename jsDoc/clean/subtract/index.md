Subtracts a value from a Number and returns a wrapped Number.

**Supported call styles:**
- Classic: `subtract(value, subtrahend)` -> returns a Number
- Curried: `subtract(subtrahend)` -> returns a function waiting for the value

Use it for domain arithmetic while keeping numbers wrapped.

```ts
{@include clean/subtract/example.ts[3,19]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/subtract

@namespace C
