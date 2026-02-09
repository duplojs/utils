Creates an extended nullable parser from another parser.

**Supported call styles:**
- Method: `DPE.nullable(inner, definition?)` -> returns a nullable parser

Returns null (or a coalescing value) when input is null, otherwise parses with the inner parser.

```ts
{@include dataParser/extended/nullable/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/nullable

@namespace DPE
