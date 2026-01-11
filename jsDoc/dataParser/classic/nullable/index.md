Creates a data parser that accepts null or the inner parser output.

**Supported call styles:**
- Classic: `DP.nullable(inner, definition?)` -> returns a nullable parser
- Curried: not available

Returns null (or a coalescing value) when input is null, otherwise parses with the inner parser.

```ts
{@include dataParser/classic/nullable/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/nullable

@namespace DP
