The asyncParseOrThrow() method runs an extended data parser asynchronously and resolves to the parsed value or rejects with a DataParserThrowError.

**Supported call styles:**
- Method: `dataParser.asyncParseOrThrow(input)` -> returns a promise

It awaits the parser and all registered checkers, whether their execution is synchronous or asynchronous.

@namespace DPE
