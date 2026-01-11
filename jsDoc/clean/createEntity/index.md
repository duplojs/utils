Creates an entity handler from a property definition.

**Supported call styles:**
- Classic: `createEntity(name, getPropertiesDefinition)` -> returns a handler

Entities model business structures by composing NewTypes. The handler builds entities from typed properties or from raw inputs with validation.

```ts
{@include clean/createEntity/example.ts[3,55]}
```

@remarks
- The definition callback can use helpers like `array`, `nullable`, and `union` to enrich properties.
- Use `map`/`mapOrThrow` to build from raw inputs; `new` expects already typed values.

@see https://utils.duplojs.dev/en/v1/api/clean/entity

@namespace C
