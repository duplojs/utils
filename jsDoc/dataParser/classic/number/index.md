Creates a data parser for numbers.

**Supported call styles:**
- Classic: `DP.number(definition?)` -> returns a number parser
- Curried: not available

Validates that the input is a number (non-NaN), optionally applies coerce, and runs the configured checkers.

```ts
{@include dataParser/classic/number/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/number

@namespace DP
