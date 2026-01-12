---
outline: [2, 3]
description: "The minElements() function checks that an array contains at least a given number of elements. It acts as a type guard, which allows TypeScript to infer a tuple of at least minLength elements."
prev:
  text: "maxOf"
  link: "/en/v1/api/array/maxOf"
next:
  text: "maxElements"
  link: "/en/v1/api/array/maxElements"
---

# minElements

The **`minElements()`** function checks that an array contains at least a given number of elements. It acts as a type guard, which allows TypeScript to infer a tuple of at least `minLength` elements.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/minElements/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function minElements<
	GenericInput extends readonly unknown[],
	GenericLength extends number
>(
	input: GenericInput,
	minLength: GenericLength
): input is [
	...CreateTuple<GenericInput[number], GenericLength>,
	...GenericInput[number][]
]
```

### Curried signature

```typescript
function minElements<
	GenericInput extends readonly unknown[],
	GenericLength extends number
>(
	minLength: GenericLength
): (
	input: GenericInput
) => input is [
	...CreateTuple<GenericInput[number], GenericLength>,
	...GenericInput[number][]
]
```

## Parameters

- `input`: Array for which you want to guarantee a minimum number of elements.
- `minLength`: Expected minimum number.

## Return value

`true` if the array length is greater than or equal to `minLength`, otherwise `false`. When the function returns `true`, the array type is narrowed to reflect the constraint.

## See also

- [`maxElements`](/en/v1/api/array/maxElements) - Imposes a maximum number of elements
- [`length`](/en/v1/api/array/length) - Returns the exact size of an array

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
