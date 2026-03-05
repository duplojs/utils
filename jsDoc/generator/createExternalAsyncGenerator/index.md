Creates an externally controlled async generator that emits at most one value.

Signature: `createExternalAsyncGenerator()` -> returns `{ asyncGenerator, next, exit }`

Use `next(value)` to resolve the pending iteration with a value, or `exit()` to stop it without yielding.

```ts
{@include generator/createExternalAsyncGenerator/example.ts[3,24]}
```

@remarks
- The returned async generator waits for one external resolution.
- The first call to `next` or `exit` settles that pending resolution.

@see https://utils.duplojs.dev/en/v1/api/generator/createExternalAsyncGenerator

@namespace G
