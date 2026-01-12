Creates an extended data parser that accepts one of multiple parsers.

**Supported call styles:**
- Method: `DPE.union(options, definition?)` -> returns a union parser

Tries each option in order until one succeeds, then returns its output.

```ts
{@include dataParser/extended/union/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/union

@namespace DPE
