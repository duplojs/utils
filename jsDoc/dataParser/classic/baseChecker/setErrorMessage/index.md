The setErrorMessage() method sets the checker error message on the current checker.

**Supported call styles:**
- Method: `checker.setErrorMessage(errorMessage)` -> returns the same checker

This method mutates the checker definition and affects errors emitted after it is called. Prefer `addErrorMessage()` when you need an immutable update.

```ts
{@include dataParser/classic/baseChecker/setErrorMessage/example.ts[3,13]}
```

@deprecated This method mutates the data parser checker.

@see https://utils.duplojs.dev/en/v1/api/dataParser

@namespace DP
