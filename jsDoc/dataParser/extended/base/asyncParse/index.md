The asyncParse() method runs an extended data parser asynchronously and resolves to an Either with the parsed value or a DataParserError.

**Supported call styles:**
- Method: `dataParser.asyncParse(input)` -> returns a promise

It executes the async parser path, applies all registered checkers, and keeps the extended API available on the parser instance.

@namespace DPE
