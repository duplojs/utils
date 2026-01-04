Creates an async generator from a loop function.

Signature: `asyncLoop(loopFunction)` → returns an async generator

The loop receives `{ count, previousOutput, next, exit }`.
The generator ends when `exit` is returned.

@example
```ts
{@include generator/asyncLoop/example.ts[3,28]}
```

@see [`G.loop`](https://utils.duplojs.dev/en/v1/api/generator/loop) For sync loops
@see https://utils.duplojs.dev/en/v1/api/generator/asyncLoop

@namespace G
