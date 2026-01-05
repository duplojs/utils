---
outline: [2, 3]
description: "The asyncLoop() function is the asynchronous variant of loop. Each iteration can return a promise before deciding to continue (next) or exit (exit)."
prev:
  text: "loop"
  link: "/en/v1/api/common/loop"
next:
  text: "externalPromise"
  link: "/en/v1/api/common/externalPromise"
---

# asyncLoop

The **`asyncLoop()`** function is the asynchronous variant of `loop`. Each iteration can return a promise before deciding to continue (`next`) or exit (`exit`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/asyncLoop/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
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

function asyncLoop<
	GenericRawExitOutput extends AnyValue = undefined,
	GenericRawNextOutput extends AnyValue = undefined
>(
	loop: (
		params: LoopParams<GenericRawNextOutput>
	) => Promise<
		LoopOutputNextResult<GenericRawNextOutput | undefined> |
		LoopOutputExistResult<GenericRawExitOutput>
	>
): Promise<GenericRawExitOutput>;
```

## Parameters

- `loop` : Async function called at each iteration. It receives `params` (`count`, `previousOutput`, `next`, `exit`) and returns a promise of `next(...)` or `exit(...)`.

## Return value

A promise resolved with the value passed to `exit(...)` (or `undefined` by default) when the loop ends.

## See also

- [`loop`](/en/v1/api/common/loop) - Synchronous version
