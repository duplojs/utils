---
outline: [2, 3]
prev:
  text: "loop"
  link: "/en/v1/api/generator/loop"
next:
  text: "map"
  link: "/en/v1/api/generator/map"
---

# asyncLoop

The **`asyncLoop()`** function creates a custom asynchronous generator using an async loop function. It lets you generate sequences of values lazily with asynchronous operations.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncLoop/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Syntax

```typescript
async function asyncLoop<
	GenericRawExitOutput extends any = undefined,
	GenericRawNextOutput extends any = undefined,
>(
	loop: (params: GeneratorLoopParams<GenericRawNextOutput>) => Promise<
		| LoopOutputNextResult<GenericRawNextOutput>
		| LoopOutputNextResult<undefined>
		| LoopOutputExistResult<GenericRawExitOutput>
		| LoopOutputExistResult<undefined>
	>
): AsyncGenerator<
	Exclude<GenericRawExitOutput | GenericRawNextOutput, undefined>,
	unknown,
	unknown
>
```

## Parameters

- `loop`: Async function called at each iteration that receives:
  - `count`: Index of the current iteration
  - `previousOutput`: Value returned by the previous iteration
  - `next(value?)`: Continues the loop and emits a value
  - `exit(value?)`: Ends the loop and emits an optional final value

## Return value

An `AsyncGenerator` that emits the values passed to `next()` and `exit()`.

## See also

- [`loop`](/en/v1/api/generator/loop) - Synchronous version of asyncLoop
- [`asyncMap`](/en/v1/api/generator/asyncMap) - Transforms elements with an async function
- [`execute`](/en/v1/api/generator/execute) - Consumes a generator

## Sources

- [MDN Web Docs - Async iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)
