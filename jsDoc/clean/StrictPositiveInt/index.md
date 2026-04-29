Constraint set handler that validates strictly positive integer numbers (>= 1 and integer).

**Supported call styles:**
- Classic: `StrictPositiveInt.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes to strictly positive integer numbers.

```ts
{@include clean/StrictPositiveInt/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
