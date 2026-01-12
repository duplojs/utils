Creates an extended data parser for tuples with a fixed shape.

**Supported call styles:**
- Method: `DPE.tuple(shape, definition?)` -> returns a tuple parser

Validates array inputs against the provided tuple shape, with an optional rest parser.

```ts
{@include dataParser/extended/tuple/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/tuple

@namespace DPE
