Creates an extended data parser that recovers with a fallback value on error.

**Supported call styles:**
- Method: `DPE.recover(inner, recoveredValue, definition?)` -> returns a recover parser

Runs the inner parser and returns the recovered value when parsing fails.

```ts
{@include dataParser/extended/recover/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/recover

@namespace DPE
