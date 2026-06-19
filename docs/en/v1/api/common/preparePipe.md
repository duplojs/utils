---
outline: [2, 3]
description: "preparePipe() declares synchronous pipeline steps once and returns a reusable function whose input can be inferred from its contextual input-to-output contract."
prev:
  text: "innerPipe"
  link: "/en/v1/api/common/innerPipe"
next:
  text: "asyncPipe"
  link: "/en/v1/api/common/asyncPipe"
---

# preparePipe

`preparePipe()` declares up to fifteen synchronous transformations once and returns the function that executes them. Reusing that function avoids rebuilding the list of steps at every call.

Unlike a directly inferred pipe, the returned function may provide its input through a contextual signature. This allows `preparePipe()` to infer the local input and all intermediate outputs without an explicit generic argument. The pattern is particularly useful for recursive functions, where the complete input-to-output contract is usually declared first.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/preparePipe/tryout.doc.ts"
  majorVersion="v1"
  height="691px"
/>

## Syntax

### Explicit input type

```typescript
const prepared = preparePipe<Input>()(
  pipe1,
  pipe2
);
```

### Contextual input-to-output type

```typescript
const prepared: (input: Input) => Output = preparePipe()(
  pipe1,
  pipe2
);
```

## Parameters

- `Input`: optional upper constraint for the input accepted by the prepared function.
- `pipe1, pipe2, ...`: one to fifteen transformations. Each receives the previous output.

The local input generic is inferred from the resulting function's contextual type and is used by the first step and by the returned function.

## Return value

A reusable function that accepts the inferred input and synchronously returns the final pipeline output.

## See also

- [`innerPipe`](/en/v1/api/common/innerPipe) - Builds a reusable pipe directly from its steps.
- [`prepareAsyncPipe`](/en/v1/api/common/prepareAsyncPipe) - Maybe-promise asynchronous variant.
