Constraint handler that validates non-empty strings without whitespace characters.

**Supported call styles:**
- Classic: `NoBlank.create(value)` -> returns Either

Use it as a reusable rule to validate inputs and to constrain NewTypes that must reject blank characters, such as slugs, identifiers, or compact tokens.

```ts
{@include clean/NoBlank/example.ts[3,17]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
