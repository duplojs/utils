Constraint set handler that validates strictly negative integer numbers (<= -1 and integer).

**Supported call styles:**
- Classic: `StrictNegativeInt.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes to strictly negative integer numbers.

```ts
{@include clean/StrictNegativeInt/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
