Creates a data parser that accepts one of multiple parsers.

**Supported call styles:**
- Classic: `DP.union(options, definition?)` -> returns a union parser
- Curried: not available

Tries each option in order until one succeeds, then returns its output.

```ts
{@include dataParser/classic/union/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/union

@namespace DP
