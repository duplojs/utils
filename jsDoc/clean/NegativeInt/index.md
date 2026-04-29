Constraint set handler that validates negative integer numbers (<= 0 and integer).

**Supported call styles:**
- Classic: `NegativeInt.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes to negative integer numbers.

```ts
{@include clean/NegativeInt/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
