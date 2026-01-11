The asyncInnerPipe() method builds a reusable asynchronous pipeline. It returns a function that accepts a value or a promise, runs each step while waiting for the previous one, then returns a promise of the final result.

Signature: `asyncInnerPipe(pipe1, pipe2)` → returns a value

The input value is not mutated.

```ts
{@include common/asyncInnerPipe/example.ts[3,38]}
```

@see https://utils.duplojs.dev/en/v1/api/common/asyncInnerPipe

@namespace C
