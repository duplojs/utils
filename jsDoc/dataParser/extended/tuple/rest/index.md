Adds or replaces the rest parser of a tuple parser.

**Supported call styles:**
- Method: `dataParser.rest(dataParser)` -> returns a tuple parser

Returns a new tuple parser where items after the fixed shape are validated by the provided parser.

```ts
{@include dataParser/extended/tuple/rest/example.ts[3,17]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/tuple

@namespace DPE
