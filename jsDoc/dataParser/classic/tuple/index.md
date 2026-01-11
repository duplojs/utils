Creates a data parser for tuples with a fixed shape.

**Supported call styles:**
- Classic: `DP.tuple(shape, definition?)` -> returns a tuple parser
- Curried: not available

Validates array inputs against the provided tuple shape, with an optional rest parser.

```ts
{@include dataParser/classic/tuple/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/dataParser/tuple

@namespace DP
