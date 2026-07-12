Wraps a bigint parser in an extended coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current bigint parser as the inner parser, then accepts coercible string, number, and boolean inputs before validating the final bigint.

```ts
{@include dataParser/extended/bigint/coerce/example.ts[3,16]}
```

@remarks
Call this method after bigint-specific methods like `.min(...)` and `.max(...)` so the coercer keeps those checks.

@see https://utils.duplojs.dev/en/v1/api/dataParser/bigint

@namespace DPE
