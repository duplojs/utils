Constraint factory that validates strings with a minimum length.

**Supported call styles:**
- Classic: `StringMin(min)` -> returns a constraint handler

Creates a constraint handler for `C.String` that enforces a length greater than or equal to `min`. Use it to validate inputs and to constrain NewTypes with a minimum length requirement.

```ts
{@include clean/StringMin/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
