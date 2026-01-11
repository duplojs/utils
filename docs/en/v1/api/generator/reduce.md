---
outline: [2, 3]
description: "The reduce() function reduces a generator to a single value by applying an accumulator function to each element. It also allows early exit with exit()."
prev:
  text: "chunk"
  link: "/en/v1/api/generator/chunk"
next:
  text: "asyncReduce"
  link: "/en/v1/api/generator/asyncReduce"
---

# reduce

The **`reduce()`** function reduces a generator to a single value by applying an accumulator function to each element. It also allows early exit with `exit()`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/reduce/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Classic signature

```typescript
function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
>(
	iterator: Iterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>
): GeneratorReduceFromValue<GenericReduceFrom>
```

### Curried signature

```typescript
function reduce<
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
): (iterator: Iterable<GenericElement>) => GeneratorReduceFromValue<GenericReduceFrom>
```

## Parameters

- `iterator`: The generator to reduce
- `startValue`: Initial accumulator value (use `DGenerator.reduceFrom()` for objects)
- `theFunction`: Reduction function that receives:
  - `element`: The current element
  - `index`: The element index
  - `lastValue`: The previous accumulated value
  - `next(value)`: Continues with a new accumulated value
  - `exit(value)`: Ends and returns the value
  - `nextWithObject(obj1, obj2)`: Merges two objects (available if `lastValue` is an object)

## Return value

The final accumulated value.

## See also

- [`asyncReduce`](/en/v1/api/generator/asyncReduce) - Asynchronous version of reduce
- [`map`](/en/v1/api/generator/map) - Transforms the elements of a generator
- [`filter`](/en/v1/api/generator/filter) - Filters the elements of a generator

## Sources

- [MDN Web Docs - Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
