The clone() method creates a new data parser instance with the same definition and checkers.

**Supported call styles:**
- Method: `dataParser.clone()` -> returns a new parser

The original parser is not mutated, and the clone can be extended independently.

```ts
{@include dataParser/classic/base/clone/example.ts[3,12]}
```

@namespace DP
