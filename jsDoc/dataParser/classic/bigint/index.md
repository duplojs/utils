Creates a data parser for bigint values.

**Supported call styles:**
- Classic: `DP.bigint(definition?)` -> returns a bigint parser
- Curried: not available

Validates that the input is a bigint, optionally applies coerce, and runs the configured checkers.

```ts
{@include dataParser/classic/bigint/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/bigint

@namespace DP
