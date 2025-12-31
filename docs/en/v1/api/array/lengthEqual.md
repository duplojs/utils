---
outline: [2, 3]
prev:
  text: "length"
  link: "/en/v1/api/array/length"
next:
  text: "includes"
  link: "/en/v1/api/array/includes"
---

# lengthEqual

The **`lengthEqual()`** function checks that an array contains exactly a given number of elements. It acts as a type guard to infer a fixed-length tuple.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/lengthEqual/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function lengthEqual<
	GenericArray extends readonly unknown[],
	GenericLength extends number
>(
	array: GenericArray,
	length: GenericLength
): array is CreateTuple<GenericArray[number], GenericLength>
```

### Curried signature

```typescript
function lengthEqual<
	GenericArray extends readonly unknown[],
	GenericLength extends number
>(
	length: GenericLength
): (
	array: GenericArray
) => array is CreateTuple<GenericArray[number], GenericLength>
```

## Parameters

- `array`: Array for which you want to guarantee the exact length.
- `length`: Expected length.

## Return value

`true` if the array length equals `length`, otherwise `false`. When the function returns `true`, the array type is narrowed to a fixed length.

## See also

- [`minElements`](/en/v1/api/array/minElements) - Checks a minimum number of elements
- [`maxElements`](/en/v1/api/array/maxElements) - Checks a maximum number of elements
- [`length`](/en/v1/api/array/length) - Returns the exact size of an array

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
