Constraint handler that validates numbers different from zero.

**Supported call styles:**
- Classic: `NotZero.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes that must reject zero, for example divisors.

```ts
{@include clean/NotZero/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
