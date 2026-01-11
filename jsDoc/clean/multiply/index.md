Multiplies a Number by a factor and returns a wrapped Number.

**Supported call styles:**
- Classic: `multiply(value, multiplier)` -> returns a Number
- Curried: `multiply(multiplier)` -> returns a function waiting for the value

Use it for domain arithmetic while keeping numbers wrapped.

```ts
{@include clean/multiply/example.ts[3,19]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/multiply

@namespace C
