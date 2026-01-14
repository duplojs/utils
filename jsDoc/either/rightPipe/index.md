Chains synchronous transformations on an Either as long as it remains Right. The pipeline stops as soon as a Left is returned.

Signature: `rightPipe(input, pipe1, pipe2)` → returns a value

The input value is not mutated.

```ts
{@include either/rightPipe/example.ts[2,16]}
```

@remarks
- Stops at the first Left and forwards it as-is.

@see https://utils.duplojs.dev/en/v1/api/either/rightPipe

@namespace E
