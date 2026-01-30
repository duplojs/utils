Constraint factory that validates numbers greater than or equal to a minimum.

**Supported call styles:**
- Classic: `NumberMin(min)` -> returns a constraint handler

Creates a constraint handler for `C.Number` that enforces a value greater than or equal to `min`. Use it to validate inputs and to constrain NewTypes with a minimum value requirement.

```ts
{@include clean/NumberMin/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
