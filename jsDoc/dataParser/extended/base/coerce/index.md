Wraps the current extended parser in a coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current parser as the inner parser. When a coercion transformer is registered for the inner parser kind, input is transformed before validation; otherwise the original input is passed to the inner parser.

```ts
{@include dataParser/extended/base/coerce/example.ts[3,25]}
```

@remarks
- Parsed output is always the output of the current parser.
- Accepted input is widened only for parser kinds registered in `DPE.DataParserCoercerExtended.transformers`.
- Call this method after parser-specific methods like `.min(...)`, `.max(...)`, `.regex(...)`, or `.int()` so the coercer keeps those checks.

@see https://utils.duplojs.dev/en/v1/api/dataParser/coercer

@namespace DPE
