---
outline: [2, 3]
description: "The maxElements() function checks that an array contains at most a certain number of elements. It is handy for rejecting a list that is too long before an expensive process."
prev:
  text: "minElements"
  link: "/en/v1/api/array/minElements"
next:
  text: "set"
  link: "/en/v1/api/array/set"
---

# maxElements

The **`maxElements()`** function checks that an array contains at most a certain number of elements. It is handy for rejecting a list that is too long before an expensive process.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/maxElements/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

### Classic signature

```typescript
function maxElements<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput,
	maxLength: number
): boolean
```

### Curried signature

```typescript
function maxElements<
	GenericInput extends readonly unknown[]
>(
	maxLength: number
): (input: GenericInput) => boolean
```

## Parameters

- `input`: Array whose size you want to limit.
- `maxLength`: Maximum allowed number.

## Return value

`true` if the number of elements is less than or equal to `maxLength`, otherwise `false`.

## See also

- [`minElements`](/en/v1/api/array/minElements) - Checks a minimum number of elements
- [`set`](/en/v1/api/array/set) - Modifies an element at a specific index

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
