---
outline: [2, 3]
description: "The loop() function creates a custom generator using a loop function. It lets you generate sequences of values lazily."
prev:
  text: "execute"
  link: "/en/v1/api/generator/execute"
next:
  text: "asyncLoop"
  link: "/en/v1/api/generator/asyncLoop"
---

# loop

The **`loop()`** function creates a custom generator using a loop function. It lets you generate sequences of values lazily.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/loop/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

```typescript
function loop<
	GenericRawExitOutput extends any = undefined,
	GenericRawNextOutput extends any = undefined,
>(
	loop: (params: GeneratorLoopParams<GenericRawNextOutput>) =>
		| LoopOutputNextResult<GenericRawNextOutput>
		| LoopOutputNextResult<undefined>
		| LoopOutputExistResult<GenericRawExitOutput>
		| LoopOutputExistResult<undefined>
): Generator<
	Exclude<GenericRawExitOutput | GenericRawNextOutput, undefined>,
	unknown,
	unknown
>
```

## Parameters

- `loop`: Function called at each iteration that receives:
  - `count`: Index of the current iteration
  - `previousOutput`: Value returned by the previous iteration
  - `next(value?)`: Continues the loop and emits a value
  - `exit(value?)`: Ends the loop and emits an optional final value

## Return value

A `Generator` that emits the values passed to `next()` and `exit()`.

## See also

- [`asyncLoop`](/en/v1/api/generator/asyncLoop) - Asynchronous version of loop
- [`execute`](/en/v1/api/generator/execute) - Consumes a generator
- [`map`](/en/v1/api/generator/map) - Transforms the elements of a generator

## Sources

- [MDN Web Docs - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
