Runs a callback in a safe block. If the callback throws or returns a rejected promise, the function returns or resolves to a "safe-callback-error" typed Left instead of propagating the error.
If the callback returns an Either, it is returned as-is; otherwise the value is wrapped in a Right. Promise results are handled the same way after resolution.

Signature: `safeCallback(theFunction)` → returns a value or promise

The input value is not mutated.

```ts
{@include either/safeCallback/example.ts[3,25]}
```

@remarks
- Catches exceptions thrown by the callback and rejected promises, then returns or resolves to a `Left<"safe-callback-error">`
- Keeps a `Left` or `Right` returned by the callback untouched
- Wraps successful non-Either values in a `Right<"safe-callback-success">`
- Useful for working in an unsafe environment (3rd party libraries, user code, etc.)

@see https://utils.duplojs.dev/en/v1/api/either/safeCallback

@namespace E
