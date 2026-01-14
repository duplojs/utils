---
outline: [2, 3]
description: "The innerPipe() method prepares a reusable synchronous pipeline: it returns a function that will apply the chain of transformations to any compatible input."
prev:
  text: "pipeCall"
  link: "/en/v1/api/common/pipeCall"
next:
  text: "asyncPipe"
  link: "/en/v1/api/common/asyncPipe"
---

# innerPipe

The **`innerPipe()`** method prepares a reusable synchronous pipeline: it returns a function that will apply the chain of transformations to any compatible input.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/innerPipe/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntax

```typescript
function innerPipe<Input, Output1>(
	pipe1: (input: Input) => Output1
): (input: Input) => Output1

function innerPipe<Input, Output1, Output2>(
	pipe1: (input: Input) => Output1,
	pipe2: (input: Output1) => Output2
): (input: Input) => Output2

// ... additional overloads (up to 15 functions)
```

## Parameters

- `pipe1, pipe2, ...` : Functions applied sequentially. Each output is the input of the next.

## Return value

A function that accepts the initial input and returns the final result of the pipeline, with strict typing at each step.

## See also

- [`pipe`](/en/v1/api/common/pipe) - Immediate version that runs the pipeline directly
- [`asyncInnerPipe`](/en/v1/api/common/asyncInnerPipe) - Asynchronous variant composing promises or FutureEither
