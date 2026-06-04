The addErrorMessage() method returns a new data parser checker with a custom error message.

**Supported call styles:**
- Method: `checker.addErrorMessage(errorMessage)` -> returns a new checker

The original checker is not mutated. The returned checker uses the message for checker errors, overriding the parser fallback message.

```ts
{@include dataParser/classic/baseChecker/addErrorMessage/example.ts[3,13]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser

@namespace DP
