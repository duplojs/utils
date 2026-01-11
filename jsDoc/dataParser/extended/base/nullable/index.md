Makes the current parser accept null.

**Supported call styles:**
- Method: `dataParser.nullable(definition?)` -> returns a nullable parser

Returns null (or a coalescing value) when input is null, otherwise parses with the current parser.

```ts
{@include dataParser/extended/base/nullable/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/nullable

@namespace DPE
