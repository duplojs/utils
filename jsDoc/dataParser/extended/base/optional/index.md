Makes the current parser accept undefined.

**Supported call styles:**
- Method: `dataParser.optional(definition?)` -> returns an optional parser

Returns undefined (or a coalescing value) when input is undefined, otherwise parses with the current parser.

```ts
{@include dataParser/extended/base/optional/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/optional

@namespace DPE
