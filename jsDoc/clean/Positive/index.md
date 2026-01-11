Constraint handler that validates strictly positive numbers (>= 1).

**Supported call styles:**
- Classic: `Positive.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes to positive numbers.

```ts
{@include clean/Positive/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
