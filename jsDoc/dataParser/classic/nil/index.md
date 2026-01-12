Creates a data parser that accepts null.

**Supported call styles:**
- Classic: `DP.nil(definition?)` -> returns a nil parser
- Curried: not available

Accepts null (or the string "null" when coerce is enabled) and rejects other inputs.

```ts
{@include dataParser/classic/nil/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/nil

@namespace DP
