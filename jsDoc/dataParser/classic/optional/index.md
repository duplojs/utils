Creates a data parser that accepts undefined or the inner parser output.

**Supported call styles:**
- Classic: `DP.optional(inner, definition?)` -> returns an optional parser
- Curried: not available

Returns undefined (or a coalescing value) when input is undefined, otherwise parses with the inner parser.

```ts
{@include dataParser/classic/optional/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/optional

@namespace DP
