The createExternalPromise() function creates a promise controllable from the outside: it exposes resolve, reject, and the associated promise.

Signature: `createExternalPromise()` → returns a value

The input value is not mutated.

```ts
{@include common/externalPromise/example.ts[3,7]}
```

@see https://utils.duplojs.dev/en/v1/api/common/externalPromise
