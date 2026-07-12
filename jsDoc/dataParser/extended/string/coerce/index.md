Wraps a string parser in an extended coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current string parser as the inner parser, then accepts coercible inputs such as number, bigint, boolean, symbol, null, and undefined before validating the final string.

```ts
{@include dataParser/extended/string/coerce/example.ts[3,16]}
```

@remarks
Call this method after string-specific methods like `.min(...)`, `.max(...)`, and `.regex(...)` so the coercer keeps those checks.

@see https://utils.duplojs.dev/en/v1/api/dataParser/string

@namespace DPE
