The parse() method runs a data parser synchronously and returns an Either with the parsed value or a DataParserError.

**Supported call styles:**
- Method: `dataParser.parse(input)` -> returns an `Either`

It executes the parser, applies all registered checkers, and never mutates the input.

```ts
{@include dataParser/classic/base/parse/example.ts[3,25]}
```

@namespace DP
