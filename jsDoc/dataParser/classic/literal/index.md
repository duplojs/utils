Creates a data parser for a literal value.

**Supported call styles:**
- Classic: `DP.literal(value)` -> returns a literal parser
- Curried: not available

Accepts only the provided literal value and rejects any other input.

```ts
{@include dataParser/classic/literal/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/literal

@namespace DP
