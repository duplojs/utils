---
outline: [2, 3]
description: "The loop() function runs a loop controlled via the next and exit callbacks. Each iteration receives the counter and the previous output to drive the flow."
prev:
  text: "falsy"
  link: "/en/v1/api/common/falsy"
next:
  text: "asyncLoop"
  link: "/en/v1/api/common/asyncLoop"
---

# loop

The **`loop()`** function runs a loop controlled via the `next` and `exit` callbacks. Each iteration receives the counter and the previous output to drive the flow.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/loop/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
export interface LoopParams<
	GenericRawNextOutput extends any
> {
	count: number;
	previousOutput: GenericRawNextOutput | undefined;
	next<GenericInput extends GenericRawNextOutput | undefined = undefined>(
		output?: GenericInput
	): LoopOutputNextResult<GenericInput>;
	exit<GenericOutput extends AnyValue = undefined>(
		output?: GenericOutput
	): LoopOutputExistResult<GenericOutput>;
}

function loop<
	GenericRawExitOutput extends AnyValue = undefined,
	GenericRawNextOutput extends AnyValue = undefined
>(
	loop: (
		params: LoopParams<GenericRawNextOutput>
	) => LoopOutputNextResult<GenericRawNextOutput> | LoopOutputExistResult<GenericRawExitOutput>
): GenericRawExitOutput;
```

## Parameters

- `loop` : Function called on each iteration. It receives `params` (`count`, `previousOutput`, `next`, `exit`) and must return `next(...)` or `exit(...)`.

## Return value

The value passed to `exit(...)` (or `undefined` by default) once the loop finishes.

## See also

- [`asyncLoop`](/en/v1/api/common/asyncLoop) - Asynchronous version accepting promises
