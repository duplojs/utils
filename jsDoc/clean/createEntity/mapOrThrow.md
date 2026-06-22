Validates raw properties and returns the hydrated entity, throwing when hydration or refinement fails.

**Supported call styles:**
- Classic: `handler.mapOrThrow(rawProperties)`
- Classic with refinement: `handler.mapOrThrow(rawProperties, refineEntity)`
- Curried refinement: `handler.mapOrThrow(refineEntity)(rawProperties)`

After hydration, an optional refiner can apply business rules or add flags. A hydration failure throws `HydrateEntityError`; a Left returned by the refiner throws `RefineEntityError`. A successful refinement returns its unwrapped value with its precise type.

```ts
{@include clean/createEntity/mapOrThrow.example.ts[3,38]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/entity

@namespace C
