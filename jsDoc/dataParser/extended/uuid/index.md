Creates an extended data parser for UUID strings.

**Supported call styles:**
- Method: `DPE.uuid(definition?)` -> returns a UUID parser

Validates that the input is a string formatted as a UUID.

```ts
{@include dataParser/extended/uuid/example.ts[3,11]}
```

@remarks
- `DPE.uuid()` is a convenience wrapper around `DPE.string({ checkers: [checkerUuid(...)] })`.

@see https://utils.duplojs.dev/en/v1/api/dataParser/string

@namespace DPE
