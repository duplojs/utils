---
outline: [2, 3]
description: "The reduceRight() method works like reduce() but iterates through the array from right to left. It is useful for composing functions, rebuilding a structure from the end, or processing a stack."
prev:
  text: "reduce"
  link: "/en/v1/api/array/reduce"
next:
  text: "join"
  link: "/en/v1/api/array/join"
---

# reduceRight

The **`reduceRight()`** method works like `reduce()` but iterates through the array from right to left. It is useful for composing functions, rebuilding a structure from the end, or processing a stack.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/reduceRight/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntax

### Classic signature

```typescript
function reduceRight<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult,
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
function reduceRight<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult,
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

## Parameters

Identical to those of [`reduce`](/en/v1/api/array/reduce), but the iteration starts with the last element of the array.  
In particular:
- `params.self` exposes the full array (handy for knowing the length or comparing an index).
- `params.nextPush()` adds values to `lastValue` when it is an array, without needing to call `next()` after a `push`.

## Return value

The result of the accumulation from right to left (via `next()`, `nextWithObject()`, or `nextPush()`), or the value passed to `exit()` if an early exit occurs.

## See also

- [`reduce`](/en/v1/api/array/reduce) - Left → right version
- [`join`](/en/v1/api/array/join) - Concatenates strings with an explicit separator

## Sources

- [MDN Web Docs - Array.prototype.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
