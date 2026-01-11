Creates a data parser for strings.

**Supported call styles:**
- Classic: `DP.string(definition?)` -> returns a string parser
- Curried: not available

Validates that the input is a string, optionally applies coerce, and runs the configured checkers.

```ts
{@include dataParser/classic/string/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/string

@namespace DP
