---
outline: [2, 3]
description: "The reduce() method aggregates the elements of an array from left to right by applying a function that carries state. It supports primitive values but also complex states via reduceFrom() and lets you exit the loop at any time thanks to exit()."
prev:
  text: "sort"
  link: "/en/v1/api/array/sort"
next:
  text: "reduceRight"
  link: "/en/v1/api/array/reduceRight"
---

# reduce

The **`reduce()`** method aggregates the elements of an array from left to right by applying a function that carries state. It supports primitive values but also complex states via `reduceFrom()` and lets you exit the loop at any time thanks to `exit()`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/reduce/tryout.doc.ts"
  majorVersion="v1"
  height="859px"
  :foldLines="[2]"
/>

## Syntax

### Classic signature

```typescript
function reduce<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends ArrayEligibleReduceFromValue,
	GenericExit extends ArrayReduceExit = ArrayReduceExit<never>
>(
	input: GenericInput,
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericInput[number],
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit
): ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"])
```

### Curried signature

```typescript
function reduce<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends ArrayEligibleReduceFromValue,
	GenericExit extends ArrayReduceExit = ArrayReduceExit<never>
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericInput[number],
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit
): (
	input: GenericInput
) => ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"])
```

### Auxiliary parameters

```typescript
interface ArrayReduceNext<GenericOutput = unknown> {
	"-next": GenericOutput;
}

interface ArrayReduceExit<GenericOutput = unknown> {
	"-exit": GenericOutput;
}

interface ArrayReduceFunctionParams<
	GenericInputArray extends readonly unknown[] = unknown[],
	GenericOutput extends unknown = unknown
> {
	element: GenericInputArray[number];
	index: number;
	lastValue: GenericOutput;
	self: GenericInputArray;
	nextWithObject: GenericOutput extends object ? (object1: GenericOutput, object2: Partial<GenericOutput>) => ArrayReduceNext<GenericOutput> : undefined;
	next(output: GenericOutput): ArrayReduceNext<GenericOutput>;
	exit<GenericExitValue extends unknown>(output: GenericExitValue): ArrayReduceExit<GenericExitValue>;
	nextPush: GenericOutput extends readonly any[] ? (array: GenericOutput, ...values: GenericOutput) => ArrayReduceNext<GenericOutput> : undefined;
}

function reduceFrom<
	GenericInput extends unknown
>(input: GenericInput): ArrayReduceFromResult<GenericInput>;
```

## Parameters

- `input`: The array to aggregate.
- `startValue`: Initial value. For objects/tuples, wrap it with `reduceFrom()` to keep precise typing.
- `theFunction`: Function called for each element. It receives the element, the index, the last value, the full array, and helpers (`next`, `nextWithObject`, `nextPush`, `exit`).
- `params.element`: The current element of the array.
- `params.index`: Position of the element in the array.
- `params.self`: The complete array (useful for comparing to length or accessing a neighbor).
- `params.lastValue`: State accumulated before the current element.
- `params.next()`: Returns the new value to propagate to the next iteration.
- `params.nextWithObject()`: Shortcut to partially merge an object while keeping typing.
- `params.nextPush()`: If `lastValue` is an array, adds one or more elements and returns the new state in one step.
- `params.exit()`: Allows immediately stopping the reduction and returning a custom value.

## Return value

The last value provided to `next()`, `nextWithObject()`, or `nextPush()`, or the value passed to `exit()` if an early exit is triggered. The original array remains unchanged.

## See also

- [`reduceRight`](/en/v1/api/array/reduceRight) - Iterates through the array from right to left
- [`sum`](/en/v1/api/array/sum) - Directly adds all numbers of an array

## Sources

- [MDN Web Docs - Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
