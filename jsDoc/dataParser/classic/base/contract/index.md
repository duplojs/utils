The contract() method validates that the parser output type exactly matches the type you want to assign it to.

**Supported call styles:**
- Method: `dataParser.contract<Output>()` -> returns the same parser if types match

It does not change runtime behavior; it enforces at compile time that the parser output type and the expected type are exactly the same.

```ts
{@include dataParser/classic/base/contract/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser

@namespace DP
