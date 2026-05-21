Creates a repository handler as a label of `createPort`.

**Supported call styles:**
- Classic: `createRepository<Repository>()` -> returns a handler

`createRepository` is an alias of `createPort`: it behaves the same and returns a port handler. Use it when you want repository-oriented naming in your Clean Architecture code.

```ts
{@include clean/createRepository/example.ts[3,50]}
```

@remarks
- This helper is only a semantic wrapper around `createPort` and adds no runtime logic.

@see https://utils.duplojs.dev/en/v1/api/clean/repository
@see https://utils.duplojs.dev/en/v1/api/clean/port

@namespace C
