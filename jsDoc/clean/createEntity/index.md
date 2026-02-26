Creates an entity handler from a property definition.

**Supported call styles:**
- Classic: `createEntity(name, getPropertiesDefinition)` -> returns a handler

Entities model business structures by composing NewTypes. The handler builds entities from typed properties or from raw inputs with validation.

```ts
{@include clean/createEntity/example.ts[3,84]}
```

@remarks
- The definition callback can use helpers like `array`, `nullable`, `union`, `structure`, and `identifier` to enrich properties.
- `identifier` is intended for technical string literals (discriminators/tags), not free-form business text values.
- Use `map`/`mapOrThrow` to build from raw inputs (with runtime constraint checks); `new` expects already typed values.

@see https://utils.duplojs.dev/en/v1/api/clean/entity

@namespace C
