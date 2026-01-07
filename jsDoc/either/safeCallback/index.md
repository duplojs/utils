Runs a callback in a safe block. If the callback throws, the function returns a "callback" typed EitherLeft instead of propagating the exception.

Signature: `safeCallback(theFunction)` → returns a value

The input value is not mutated.

```ts
{@include either/safeCallback/example.ts[3,9]}
```

@remarks
- Catches exceptions thrown by the callback and wraps them in an `EitherLeft<"callback">`
- Useful for working in an unsafe environment (3rd party libraries, user code, etc.)

@see https://utils.duplojs.dev/en/v1/api/either/safeCallback

@namespace E
