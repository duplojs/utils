Creates a data parser that accepts undefined.

**Supported call styles:**
- Classic: `DP.empty(definition?)` -> returns an empty parser
- Curried: not available

Accepts undefined (or the string "undefined" when coerce is enabled) and rejects other inputs.

```ts
{@include dataParser/classic/empty/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/empty

@namespace DP
