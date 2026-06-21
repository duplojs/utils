Validates raw properties and returns an Either containing the hydrated entity or a DataParser error.

**Supported call styles:**
- Classic: `handler.map(rawProperties)`
- Classic with refinement: `handler.map(rawProperties, refineEntity)`
- Curried refinement: `handler.map(refineEntity)(rawProperties)`

After hydration, an optional refiner can apply business rules or add flags. Its Right or Left result is forwarded while preserving its precise type. Hydration failures return a `Left<"hydrateEntityError", DataParserError>` before the refiner is called.

```ts
{@include clean/createEntity/map.example.ts[3,40]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/entity

@namespace C
