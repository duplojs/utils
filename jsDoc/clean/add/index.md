Adds two Number values (wrapped or raw) and returns a wrapped Number.

**Supported call styles:**
- Classic: `add(value, operand)` -> returns a Number
- Curried: `add(operand)` -> returns a function waiting for the value

Use it to keep numeric operations in the Clean domain while preserving types.

```ts
{@include clean/add/example.ts[3,19]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/add

@namespace C
