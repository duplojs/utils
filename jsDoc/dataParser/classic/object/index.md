Creates a data parser for objects with a defined shape.

**Supported call styles:**
- Classic: `DP.object(shape, definition?)` -> returns an object parser
- Curried: not available

Validates that the input is an object and parses each property in the provided shape.

```ts
{@include dataParser/classic/object/example.ts[3,24]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/object

@namespace DP
