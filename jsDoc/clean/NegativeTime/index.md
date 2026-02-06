Constraint handler that validates strictly negative durations (<= -1 millisecond).

**Supported call styles:**
- Classic: `NegativeTime.create(value)` -> returns Either

Use it as a reusable rule to validate time values and to constrain NewTypes to negative durations.

```ts
{@include clean/NegativeTime/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
