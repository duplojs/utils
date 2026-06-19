Creates a handler for assigning a typed business state to an entity.

**Supported call styles:**
- Classic: `createFlag(name)` -> returns a handler

Use flags to make an entity state part of a precise type contract. Functions can require an entity combined with one or more flags, while the same entity keeps its original business properties and can reuse its repositories, mappers, and other supporting code. A flag can optionally carry data associated with its state.

```ts
{@include clean/createFlag/example.ts[3,56]}
```

@remarks
A flag avoids defining and maintaining a separate entity variation for every possible state. `append` enriches the entity's type with that state, `has` checks and narrows it at runtime, and `getValue` retrieves the data carried by the state.

@see https://utils.duplojs.dev/en/v1/api/clean/flag

@namespace C
