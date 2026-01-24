The parseOrThrow() method runs a data parser synchronously and returns the parsed value or throws a DataParserThrowError.

**Supported call styles:**
- Method: `dataParser.parseOrThrow(input)` -> returns the parsed value

It executes the parser, applies all registered checkers, and never mutates the input.

```ts
{@include dataParser/classic/base/parseOrThrow/example.ts[3,23]}
```

@namespace DP
