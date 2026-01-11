Creates a repository handler for a contract interface.

**Supported call styles:**
- Classic: `createRepository<Repository>()` -> returns a handler

The handler enforces the repository contract at compile time and stays runtime-free. It is meant to be composed with use cases.

```ts
{@include clean/createRepository/example.ts[3,50]}
```

@remarks
- This helper adds no runtime logic; it only validates the contract at compile time.

@see https://utils.duplojs.dev/en/v1/api/clean/repository

@namespace C
