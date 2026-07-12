Wraps a boolean parser in an extended coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current boolean parser as the inner parser, then accepts coercible string and number inputs before validating the final boolean.

```ts
{@include dataParser/extended/boolean/coerce/example.ts[3,16]}
```

@remarks
The parser output remains boolean. The coercer only widens accepted input.

@see https://utils.duplojs.dev/en/v1/api/dataParser/boolean

@namespace DPE
