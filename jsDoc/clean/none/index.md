Constructor that creates a `Maybe` empty branch from an entity name.

**Supported call styles:**
- Classic: `none(entityName)` -> returns `None<entityName>`
- Pipe-compatible: `pipe(entityName, none)`

Use `none` when an entity is absent but you still want to keep a precise business contract with `Maybe<Entity>`.

```ts
{@include clean/none/example.ts[3,24]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/maybe

@namespace C
