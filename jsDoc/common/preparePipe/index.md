Prepares a reusable synchronous pipeline whose steps are declared once and whose input type can be inferred from the resulting function's context.

**Supported call styles:**
- Explicit input: `preparePipe<Input>()(pipe1, pipe2)` -> returns a typed reusable function
- Contextual input: `const fn: (input: Input) => Output = preparePipe()(pipe1, pipe2)` -> infers the local input from the target function type

Each execution only calls the already prepared function. Up to fifteen steps are supported, and every intermediate output becomes the next step's input.

```ts
{@include common/preparePipe/example.ts[3,25]}
```

@remarks Contextual input inference is useful when declaring recursive or mutually recursive functions because the complete input-to-output contract can be written before the pipeline is built.

@see https://utils.duplojs.dev/en/v1/api/common/preparePipe
@see [`innerPipe`](https://utils.duplojs.dev/en/v1/api/common/innerPipe)
