Wraps a number parser in an extended coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current number parser as the inner parser, then accepts coercible inputs such as numeric strings, bigint, boolean, and null before validating the final number.

```ts
{@include dataParser/extended/number/coerce/example.ts[3,16]}
```

@remarks
Call this method after number-specific methods like `.min(...)`, `.max(...)`, and `.int()` so the coercer keeps those checks.

@see https://utils.duplojs.dev/en/v1/api/dataParser/number

@namespace DPE
