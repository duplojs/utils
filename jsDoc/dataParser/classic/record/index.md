Creates a data parser for records with key and value parsers.

**Supported call styles:**
- Classic: `DP.record(key, value, definition?)` -> returns a record parser
- Curried: not available

Validates that the input is an object and parses each key and value with the provided parsers.

```ts
{@include dataParser/classic/record/example.ts[3,22]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/record

@namespace DP
