Constraint factory that validates strings with a maximum length.

**Supported call styles:**
- Classic: `StringMax(max)` -> returns a constraint handler

Creates a constraint handler for `C.String` that enforces a length less than or equal to `max`. Use it to validate inputs and to constrain NewTypes with a maximum length requirement.

```ts
{@include clean/StringMax/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
