---
outline: [2, 3]
prev:
  text: "Common"
  link: "/en/v1/api/common/"
next:
  text: "innerPipe"
  link: "/en/v1/api/common/innerPipe"
---

# pipe

The **`pipe()`** method chains up to 15 synchronous functions, passing the output of one as the input of the next. It returns the last computed value and stays fully typed at each step.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/pipe/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

```typescript
function pipe<Input, Output1>(
	input: Input,
	pipe1: (input: Input) => Output1
): Output1

function pipe<Input, Output1, Output2>(
	input: Input,
	pipe1: (input: Input) => Output1,
	pipe2: (input: Output1) => Output2
): Output2

// ... additional overloads (up to 15 functions)
```

## Parameters

- `input` : The initial value to transform.
- `pipe1, pipe2, ...` : Functions applied sequentially. Each receives the output of the previous one.

## Return value

The value returned by the last function in the chain, with precise typing based on the chaining.

## Examples

### Example with library functions

<MonacoTSEditor
  src="/examples/v1/api/common/pipe/withCurriedFunctions.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## See also

- [`innerPipe`](/en/v1/api/common/innerPipe) - Curried version returning a reusable function
- [`asyncPipe`](/en/v1/api/common/asyncPipe) - Asynchronous pipe that composes promises
