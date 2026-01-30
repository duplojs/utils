Constraint factory that validates numbers less than or equal to a maximum.

**Supported call styles:**
- Classic: `NumberMax(max)` -> returns a constraint handler

Creates a constraint handler for `C.Number` that enforces a value less than or equal to `max`. Use it to validate inputs and to constrain NewTypes with a maximum value requirement.

```ts
{@include clean/NumberMax/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
