---
outline: [2, 3]
description: "prepareAsyncPipe() declares maybe-promise pipeline steps once and returns a reusable asynchronous function with contextual input inference."
prev:
  text: "asyncInnerPipe"
  link: "/en/v1/api/common/asyncInnerPipe"
next:
  text: "forward"
  link: "/en/v1/api/common/forward"
---

# prepareAsyncPipe

`prepareAsyncPipe()` is the asynchronous counterpart of `preparePipe()`. It declares up to fifteen transformations once, accepts synchronous or promise-returning steps, and returns a reusable asynchronous function.

The prepared function accepts either a direct input or a promise. Its contextual input-to-output signature can drive the local input inference, including when the pipeline participates in a recursive asynchronous function.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/prepareAsyncPipe/tryout.doc.ts"
  majorVersion="v1"
  height="796px"
/>

## Syntax

### Explicit input type

```typescript
const prepared = prepareAsyncPipe<Input>()(
  pipe1,
  pipe2
);
```

### Contextual input-to-output type

```typescript
const prepared: (input: Input) => Promise<Output> = prepareAsyncPipe()(
  pipe1,
  pipe2
);
```

## Parameters

- `Input`: optional upper constraint for the direct or promised input.
- `pipe1, pipe2, ...`: one to fifteen transformations returning either a value or a promise.

## Return value

A reusable function accepting `Input | PromiseLike<Input>` and returning a promise of the final output.

## See also

- [`preparePipe`](/en/v1/api/common/preparePipe) - Synchronous prepared variant.
- [`asyncInnerPipe`](/en/v1/api/common/asyncInnerPipe) - Reusable asynchronous composition inferred directly from its steps.
