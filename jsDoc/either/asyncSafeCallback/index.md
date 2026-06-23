Runs a callback or a promise in a safe asynchronous block. If the callback throws or the promise rejects, the function resolves to a "safe-callback-error" typed Left instead of propagating the error.
If the callback or promise resolves to an Either, it is returned as-is; otherwise the resolved value is wrapped in a Right.

Signature: `asyncSafeCallback(maybeFunction)` → returns a promise

The input value is not mutated.

```ts
{@include either/asyncSafeCallback/example.ts[3,24]}
```

@remarks
- Catches exceptions thrown by the callback and rejected promises, then resolves to a `Left<"safe-callback-error">`
- Keeps a `Left` or `Right` returned or resolved by the input untouched
- Wraps successful non-Either values in a `Right<"safe-callback-success">`
- Accepts either a callback or a promise directly

@see https://utils.duplojs.dev/en/v1/api/either/asyncSafeCallback

@namespace E
