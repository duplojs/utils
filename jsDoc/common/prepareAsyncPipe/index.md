Prepares a reusable asynchronous pipeline whose steps are declared once and whose input type can be inferred from the resulting function's context.

**Supported call styles:**
- Explicit input: `prepareAsyncPipe<Input>()(pipe1, pipe2)` -> returns a typed reusable async function
- Contextual input: `const fn: (input: Input) => Promise<Output> = prepareAsyncPipe()(pipe1, pipe2)` -> infers the local input from the target function type

Each step may return a direct value or a promise. Every execution accepts a direct input or a promise, awaits the prepared sequence, and returns a promise of the final output.

```ts
{@include common/prepareAsyncPipe/example.ts[3,27]}
```

@remarks Contextual input inference is useful when declaring recursive or mutually recursive async functions because the complete input-to-output contract can be written before the pipeline is built.

@see https://utils.duplojs.dev/en/v1/api/common/prepareAsyncPipe
@see [`asyncInnerPipe`](https://utils.duplojs.dev/en/v1/api/common/asyncInnerPipe)
