Constructor that creates a `Maybe` success branch from an entity.

**Supported call styles:**
- Classic: `some(entity)` -> returns `Some<Entity>`
- Pipe-compatible: `pipe(entity, some)`

Use `some` when the expected entity is available and must satisfy a `Maybe<Entity>` contract.

```ts
{@include clean/some/example.ts[3,35]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/maybe

@namespace C
