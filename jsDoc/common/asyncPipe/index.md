The asyncPipe() method chains asynchronous functions (promises or FutureEither) in series. Each step waits for the previous one to resolve and the last value is returned in a promise.

Signature: `asyncPipe(input, pipe1, pipe2)` → returns a value

The input value is not mutated.

```ts
{@include common/asyncPipe/example.ts[3,22]}
```

@see https://utils.duplojs.dev/en/v1/api/common/asyncPipe

@namespace C
