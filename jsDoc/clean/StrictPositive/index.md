Constraint handler that validates strictly positive numbers (> 0).

**Supported call styles:**
- Classic: `StrictPositive.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes to numbers strictly greater than zero.

```ts
{@include clean/StrictPositive/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints#strictpositive

@namespace C
