The pipe() method chains up to 15 synchronous functions, passing the output of one as the input of the next. It returns the last computed value and stays fully typed at each step.

Signature: `pipe(input, pipe1, pipe2)` → returns a value

The input value is not mutated.

```ts
{@include common/pipe/example.ts[3,16]}
```

@see https://utils.duplojs.dev/en/v1/api/common/pipe
