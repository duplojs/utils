Creates a data parser that accepts any value.

**Supported call styles:**
- Classic: `DP.unknown(definition?)` -> returns an unknown parser
- Curried: not available

Always succeeds, unless additional checkers reject the value.

```ts
{@include dataParser/classic/unknown/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/unknown

@namespace DP
