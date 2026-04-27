Constraint set handler that validates positive integer numbers (>= 0 and integer).

**Supported call styles:**
- Classic: `PositiveInt.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes to positive integer numbers.

```ts
{@include clean/PositiveInt/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
