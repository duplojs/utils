The clone() method creates a new extended data parser instance with the same definition and checkers.

**Supported call styles:**
- Method: `dataParser.clone()` -> returns a new parser

The original parser is not mutated, and the clone can be extended independently using extended methods.

```ts
{@include dataParser/extended/base/clone/example.ts[3,10]}
```

@namespace DPE
