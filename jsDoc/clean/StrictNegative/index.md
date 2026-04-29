Constraint handler that validates strictly negative numbers (< 0).

**Supported call styles:**
- Classic: `StrictNegative.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes to numbers strictly less than zero.

```ts
{@include clean/StrictNegative/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints#strictnegative

@namespace C
