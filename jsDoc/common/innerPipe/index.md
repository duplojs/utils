The innerPipe() method prepares a reusable synchronous pipeline: it returns a function that will apply the chain of transformations to any compatible input.

Signature: `innerPipe(pipe1, pipe2)` → returns a value

The input value is not mutated.

```ts
{@include common/innerPipe/example.ts[3,22]}
```

@see https://utils.duplojs.dev/en/v1/api/common/innerPipe

@namespace C
