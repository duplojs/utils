The asyncParse() method runs a data parser asynchronously and resolves to an Either with the parsed value or a DataParserError.

**Supported call styles:**
- Method: `dataParser.asyncParse(input)` -> returns a promise

It executes the async parser path, applies all registered checkers, and never mutates the input.

@namespace DP
