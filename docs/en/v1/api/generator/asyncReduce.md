---
outline: [2, 3]
description: "The asyncReduce() function reduces a generator to a single value by applying an asynchronous accumulator function to each element. Asynchronous version of reduce()."
prev:
  text: "chunk"
  link: "/en/v1/api/generator/chunk"
next:
  text: "Generator"
  link: "/en/v1/api/generator/"
---

# asyncReduce

The **`asyncReduce()`** function reduces a generator to a single value by applying an asynchronous accumulator function to each element. Asynchronous version of `reduce()`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncReduce/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Classic signature

```typescript
function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>
): Promise<GeneratorReduceFromValue<GenericReduceFrom>>
```

### Curried signature

```typescript
function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>
): (
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>
) => Promise<GeneratorReduceFromValue<GenericReduceFrom>>
```

## Parameters

- `iterator`: The generator (synchronous or asynchronous) to reduce
- `startValue`: Initial accumulator value (use `DGenerator.reduceFrom()` for objects)
- `theFunction`: Asynchronous reduction function that receives:
  - `element`: The current element
  - `index`: The element index
  - `lastValue`: The previous accumulated value
  - `next(value)`: Continues with a new accumulated value
  - `exit(value)`: Ends and returns the value
  - `nextWithObject(obj1, obj2)`: Merges two objects (available if `lastValue` is an object)

## Return value

A `Promise` that resolves with the final accumulated value.

## See also

- [`reduce`](/en/v1/api/generator/reduce) - Synchronous version of asyncReduce
- [`asyncMap`](/en/v1/api/generator/asyncMap) - Transforms with an async function
- [`asyncFilter`](/en/v1/api/generator/asyncFilter) - Filters with an async function

## Sources

- [MDN Web Docs - Async iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
