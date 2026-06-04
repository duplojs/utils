The addErrorMessage() method returns a new data parser with a custom parser error message.

**Supported call styles:**
- Method: `dataParser.addErrorMessage(errorMessage)` -> returns a new parser

The original parser is not mutated. The returned parser uses the message for parser errors and as the fallback message for checkers that do not define their own message.

```ts
{@include dataParser/classic/base/addErrorMessage/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser

@namespace DP
