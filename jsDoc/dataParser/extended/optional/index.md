Creates an extended optional parser from another parser.

**Supported call styles:**
- Method: `DPE.optional(inner, definition?)` -> returns an optional parser

Returns undefined (or a coalescing value) when input is undefined, otherwise parses with the inner parser.

```ts
{@include dataParser/extended/optional/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/optional

@namespace DPE
