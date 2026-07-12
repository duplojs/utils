Wraps an empty parser in an extended coercer parser.

**Supported call styles:**
- Method: `dataParser.coerce()` -> returns a coercer parser

Keeps the current empty parser as the inner parser, then accepts the string `"undefined"` before validating the final undefined value.

```ts
{@include dataParser/extended/empty/coerce/example.ts[3,16]}
```

@remarks
The parser output remains `undefined`. The coercer only widens accepted input.

@see https://utils.duplojs.dev/en/v1/api/dataParser/empty

@namespace DPE
