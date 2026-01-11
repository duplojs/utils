The parse() method runs an extended data parser synchronously and returns an Either with the parsed value or a DataParserError.

**Supported call styles:**
- Method: `dataParser.parse(input)` -> returns an `Either`

It executes the parser, applies all registered checkers, and keeps the extended API available on the parser instance.

```ts
{@include dataParser/extended/base/parse/example.ts[3,25]}
```

@namespace DPE
