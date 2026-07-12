Wraps a nil parser in an extended coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current nil parser as the inner parser, then accepts the string `"null"` before validating the final null value.

```ts
{@include dataParser/extended/nil/coerce/example.ts[3,16]}
```

@remarks
The parser output remains `null`. The coercer only widens accepted input.

@see https://utils.duplojs.dev/en/v1/api/dataParser/nil

@namespace DPE
