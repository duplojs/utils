Instantiates multiple use cases at once.

**Supported call styles:**
- Classic: `useCaseInstances(useCases, repositories)` -> returns use case functions

It maps dependency handlers to their implementations and returns an object of executable use cases with matching keys.

```ts
{@include clean/useCaseInstances/example.ts[3,32]}
```

@remarks
- Returned keys are the uncapitalized version of the handler keys.

@see https://utils.duplojs.dev/en/v1/api/clean/useCase

@namespace C
