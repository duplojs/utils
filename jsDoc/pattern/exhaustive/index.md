Unwraps a pattern result when all cases are handled.

Signature: `exhaustive(result)` → returns the unwrapped value

Use this to signal that all patterns have been handled.

```ts
{@include pattern/exhaustive/example.ts[3,37]}
```

@see [`P.match`](https://utils.duplojs.dev/en/v1/api/pattern/match) For building match chains
@see https://utils.duplojs.dev/en/v1/api/pattern/exhaustive

@namespace P
