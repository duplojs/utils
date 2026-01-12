Constraint handler that validates strictly negative numbers (<= -1).

**Supported call styles:**
- Classic: `Negative.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes to negative numbers.

```ts
{@include clean/Negative/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
