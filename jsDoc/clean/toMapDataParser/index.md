Creates a DataParser that maps Clean handlers or primitives into a wrapped value object.

**Supported call styles:**
- Classic: `toMapDataParser(handler, params?)` -> returns a DataParser
- Pipe: `pipe(handler, toMapDataParser)` -> returns a DataParser

The resulting parser preserves kind tags (`newTypeKind`, `constrainedTypeKind`) and stores the parsed value under the wrapped value key. When `coerce` is enabled, compatible primitive parsers will coerce inputs before validation.

```ts
{@include clean/toMapDataParser/example.ts[3,30]}
```

@remarks
- Supported inputs: `NewTypeHandler`, `ConstraintHandler`, `ConstraintsSetHandler`, and `PrimitiveHandler`.
- Use `coerce: true` to allow conversions (e.g. number to string) on compatible parsers.

@see https://utils.duplojs.dev/en/v1/api/clean/toMapDataParser

@namespace C
