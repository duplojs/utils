Creates an extended data parser for records with key and value parsers.

**Supported call styles:**
- Method: `DPE.record(key, value, definition?)` -> returns a record parser

Validates objects by parsing each key and value with the provided parsers.

```ts
{@include dataParser/extended/record/example.ts[3,24]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/record

@namespace DPE
