The asyncParse() method runs a data parser asynchronously and resolves to an Either with the parsed value or a DataParserError.

**Supported call styles:**
- Method: `dataParser.asyncParse(input)` -> returns a promise

It awaits the parser and all registered checkers, whether their execution is synchronous or asynchronous.

@namespace DP
