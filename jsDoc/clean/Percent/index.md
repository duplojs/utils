Constraint set handler that validates percent numbers (between 0 and 100 included).

**Supported call styles:**
- Classic: `Percent.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes to values in the percent range.

```ts
{@include clean/Percent/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
