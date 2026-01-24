The asyncParseOrThrow() method runs an extended data parser asynchronously and resolves to the parsed value or rejects with a DataParserThrowError.

**Supported call styles:**
- Method: `dataParser.asyncParseOrThrow(input)` -> returns a promise

It executes the async parser path, applies all registered checkers, and keeps the extended API available on the parser instance.

@namespace DPE
