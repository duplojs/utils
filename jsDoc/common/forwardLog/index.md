The forwardLog() function logs the received value (side effect) then returns it unchanged, handy for inspecting a pipeline without breaking it.

Signature: `forwardLog(input)` → returns a value

The input value is not mutated.

```ts
{@include common/forwardLog/example.ts[3,15]}
```

@see https://utils.duplojs.dev/en/v1/api/common/forwardLog

@namespace C
