Creates a generator from a loop function.

Signature: `loop(loopFunction)` → returns a generator

The loop receives `{ count, previousOutput, next, exit }`.
The generator ends when `exit` is returned.

@example
```ts
{@include generator/loop/example.ts[3,20]}
```

@see [`G.asyncLoop`](https://utils.duplojs.dev/en/v1/api/generator/asyncLoop) For async loops
@see https://utils.duplojs.dev/en/v1/api/generator/loop

@namespace G
