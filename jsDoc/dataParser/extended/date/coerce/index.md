Wraps a date parser in an extended coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current date parser as the inner parser, then accepts coercible string and number inputs before validating the final `TheDate`.

```ts
{@include dataParser/extended/date/coerce/example.ts[3,16]}
```

@remarks
Call this method after date-specific refinements so the coercer keeps those checks.

@see https://utils.duplojs.dev/en/v1/api/dataParser/date

@namespace DPE
