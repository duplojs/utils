Wraps a time parser in an extended coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current time parser as the inner parser, then accepts coercible ISO-like time strings before validating the final `TheTime`.

```ts
{@include dataParser/extended/time/coerce/example.ts[3,17]}
```

@remarks
Call this method after time-specific methods like `.min(...)` and `.max(...)` so the coercer keeps those checks.

@see https://utils.duplojs.dev/en/v1/api/dataParser/time

@namespace DPE
