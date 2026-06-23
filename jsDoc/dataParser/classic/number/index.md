Creates a data parser for numbers.

**Supported call styles:**
- Classic: `DP.number(definition?)` -> returns a number parser
- Curried: not available

Validates that the input is a finite number, optionally applies coerce, and runs the configured checkers. `NaN`, `Infinity`, and `-Infinity` are rejected.

```ts
{@include dataParser/classic/number/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/number

@namespace DP
