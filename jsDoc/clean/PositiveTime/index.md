Constraint handler that validates strictly positive durations (>= 1 millisecond).

**Supported call styles:**
- Classic: `PositiveTime.create(value)` -> returns Either

Use it as a reusable rule to validate time values and to constrain NewTypes to positive durations.

```ts
{@include clean/PositiveTime/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
