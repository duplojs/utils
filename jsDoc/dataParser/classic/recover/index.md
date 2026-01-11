Creates a data parser that recovers with a fallback value on error.

**Supported call styles:**
- Classic: `DP.recover(inner, recoveredValue, definition?)` -> returns a recover parser
- Curried: not available

Runs the inner parser and returns the recovered value when parsing fails.

```ts
{@include dataParser/classic/recover/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/recover

@namespace DP
