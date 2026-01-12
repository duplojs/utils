Creates an extended data parser for objects with a defined shape.

**Supported call styles:**
- Method: `DPE.object(shape, definition?)` -> returns an object parser

Validates objects and exposes object-specific helpers like pick, omit, partial, and required.

```ts
{@include dataParser/extended/object/example.ts[3,29]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/object

@namespace DPE
