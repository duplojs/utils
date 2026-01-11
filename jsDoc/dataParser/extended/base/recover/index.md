Recovers with a fallback value when parsing fails.

**Supported call styles:**
- Method: `dataParser.recover(recoveredValue, definition?)` -> returns a recover parser

Runs the current parser and returns the recovered value when parsing fails.

```ts
{@include dataParser/extended/base/recover/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/recover

@namespace DPE
