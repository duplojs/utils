Creates a data parser for TheDate values.

**Supported call styles:**
- Classic: `DP.date(definition?)` -> returns a date parser
- Curried: not available

Validates that the input is a TheDate, optionally applies coerce, and runs the configured checkers.

```ts
{@include dataParser/classic/date/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/date

@namespace DP
