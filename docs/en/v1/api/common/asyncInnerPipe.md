---
outline: [2, 3]
description: "The asyncInnerPipe() method builds a reusable asynchronous pipeline. It returns a function that accepts a value or a promise, runs each step while waiting for the previous one, then returns a promise of the final result."
prev:
  text: "asyncPipe"
  link: "/en/v1/api/common/asyncPipe"
next:
  text: "forward"
  link: "/en/v1/api/common/forward"
---

# asyncInnerPipe

The **`asyncInnerPipe()`** method builds a reusable asynchronous pipeline. It returns a function that accepts a value or a promise, runs each step while waiting for the previous one, then returns a promise of the final result.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/asyncInnerPipe/tryout.doc.ts"
  majorVersion="v1"
  height="838px"
/>

## Syntax

```typescript
function asyncInnerPipe<Input, Output1>(
	pipe1: (input: Input) => PromiseLike<Output1> | Output1
): (input: PromiseLike<Input> | Input) => Promise<Awaited<Output1>>

function asyncInnerPipe<Input, Output1, Output2>(
	pipe1: (input: Input) => PromiseLike<Output1> | Output1,
	pipe2: (input: Output1) => PromiseLike<Output2> | Output2
): (input: PromiseLike<Input> | Input) => Promise<Awaited<Output2>>

// ... additional overloads (up to 15 functions)
```

## Parameters

- `pipe1, pipe2, ...` : Synchronous or asynchronous functions applied sequentially.

## Return value

An asynchronous function that accepts the initial input (direct or promised) and returns a promise of the final result.

## See also

- [`innerPipe`](/en/v1/api/common/innerPipe) - Synchronous curried variant
- [`asyncPipe`](/en/v1/api/common/asyncPipe) - Immediate execution of an asynchronous pipeline
