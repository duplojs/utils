---
outline: [2, 3]
description: "The asyncPipe() method chains asynchronous functions (promises or FutureEither) in series. Each step waits for the previous one to resolve and the last value is returned in a promise."
prev:
  text: "innerPipe"
  link: "/en/v1/api/common/innerPipe"
next:
  text: "asyncInnerPipe"
  link: "/en/v1/api/common/asyncInnerPipe"
---

# asyncPipe

The **`asyncPipe()`** method chains asynchronous functions (promises or `FutureEither`) in series. Each step waits for the previous one to resolve and the last value is returned in a promise.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/asyncPipe/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntax

```typescript
function asyncPipe<Input, Output1>(
	input: PromiseLike<Input> | Input,
	pipe1: (input: Awaited<Input>) => PromiseLike<Output1> | Output1
): Promise<Awaited<Output1>>

function asyncPipe<Input, Output1, Output2>(
	input: PromiseLike<Input> | Input,
	pipe1: (input: Awaited<Input>) => PromiseLike<Output1> | Output1,
	pipe2: (input: Awaited<Output1>) => PromiseLike<Output2> | Output2
): Promise<Awaited<Output2>>

// ... additional overloads (up to 15 functions)
```

## Parameters

- `input` : An initial value or promise of a value.
- `pipe1, pipe2, ...` : Functions that can return a value or a promise. Each step waits for the previous one.

## Return value

A promise resolved with the final value of the pipeline, while preserving intermediate types.

## See also

- [`pipe`](/en/v1/api/common/pipe) - Synchronous variant
- [`asyncInnerPipe`](/en/v1/api/common/asyncInnerPipe) - Curried asynchronous version
