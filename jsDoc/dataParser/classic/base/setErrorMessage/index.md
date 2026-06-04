The setErrorMessage() method sets the parser error message on the current data parser.

**Supported call styles:**
- Method: `dataParser.setErrorMessage(errorMessage)` -> returns the same parser

This method mutates the parser definition and affects errors emitted after it is called. Prefer `addErrorMessage()` when you need an immutable update.

```ts
{@include dataParser/classic/base/setErrorMessage/example.ts[3,14]}
```

@deprecated This method mutates the data parser.

@see https://utils.duplojs.dev/en/v1/api/dataParser

@namespace DP
