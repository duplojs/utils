Creates a use case handler with explicit dependencies.

**Supported call styles:**
- Classic: `createUseCase(dependencies, getUseCase)` -> returns a handler

This separates declaration (dependencies + factory) from instantiation (repositories). Sub-use-cases are resolved automatically during instantiation.

```ts
{@include clean/createUseCase/example.ts[3,64]}
```

@see https://utils.duplojs.dev/en/v1/api/clean/useCase

@namespace C
