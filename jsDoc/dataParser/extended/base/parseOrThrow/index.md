The parseOrThrow() method runs an extended data parser synchronously and returns the parsed value or throws a DataParserThrowError.

**Supported call styles:**
- Method: `dataParser.parseOrThrow(input)` -> returns the parsed value

It executes the parser, applies all registered checkers, and keeps the extended API available on the parser instance.

```ts
{@include dataParser/extended/base/parseOrThrow/example.ts[3,14]}
```

@namespace DPE
