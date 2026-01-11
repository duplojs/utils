Creates a data parser for boolean values.

**Supported call styles:**
- Classic: `DP.boolean(definition?)` -> returns a boolean parser
- Curried: not available

Validates that the input is a boolean, optionally applies coerce, and runs the configured checkers.

```ts
{@include dataParser/classic/boolean/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/boolean

@namespace DP
