Runs a callback in a safe block. If the callback throws, the function returns a "callback" typed Left instead of propagating the exception.
If the callback returns an Either, it is returned as-is; otherwise the value is wrapped in an Right.

Signature: `safeCallback(theFunction)` → returns a value

The input value is not mutated.

```ts
{@include either/safeCallback/example.ts[3,16]}
```

@remarks
- Catches exceptions thrown by the callback and wraps them in an `Left<"callback">`
- Keeps an `Left` or `Right` returned by the callback untouched
- Useful for working in an unsafe environment (3rd party libraries, user code, etc.)

@see https://utils.duplojs.dev/en/v1/api/either/safeCallback

@namespace E
