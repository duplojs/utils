---
outline: [2, 3]
prev:
  text: "pipe"
  link: "/en/v1/api/common/pipe"
next:
  text: "innerPipe"
  link: "/en/v1/api/common/innerPipe"
description: "Stabilizes type inference in a pipe by neutralizing a function's influence."
---

# pipeCall

The **`pipeCall()`** function wraps a function so its first argument does not influence `pipe` inference. It is useful when a function is not generic on its first parameter and its type bubbles up the chain, breaking overall inference.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/pipeCall/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntax

```typescript
function pipeCall<
	GenericInput extends unknown,
	GenericOutput extends unknown
>(
	theFunction: (input: NoInfer<GenericInput>) => GenericOutput
): (input: GenericInput) => NoInfer<GenericOutput>;
```

## Parameters

- `theFunction` : The function to use inside a `pipe` without forcing the input inference.

## Return value

The same function, typed to preserve pipe inference.

## See also

- [`pipe`](/en/v1/api/common/pipe) - Composes synchronous functions
- [`innerPipe`](/en/v1/api/common/innerPipe) - Reusable pipe version
