---
outline: [2, 3]
description: "The slice() method extracts a section of a string and returns a new string without modifying the original string."
prev:
  text: "at"
  link: "/en/v1/api/string/at"
next:
  text: "substring"
  link: "/en/v1/api/string/substring"
---

# slice

The **`slice()`** method extracts a section of a string and returns a new string without modifying the original string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/slice/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function slice<
	GenericInput extends string
>(
	input: GenericInput,
	start: number,
	end: number
): string
```

### Curried signature

```typescript
function slice<
	GenericInput extends string
>(
	start: number,
	end: number
): (input: GenericInput) => string
```

## Parameters

- `input`: The string to extract from.
- `start`: The start index of the extraction (inclusive). If negative, counts from the end.
- `end`: The end index of the extraction (exclusive). If negative, counts from the end.

## Return value

A new string containing the section extracted from the original string.

## See also

- [`substring`](/en/v1/api/string/substring) - Extracts a substring between two indexes
- [`charAt`](/en/v1/api/string/charAt) - Returns the character at an index
- [`at`](/en/v1/api/string/at) - Returns the character at an index with negative index support

## Sources

- [MDN Web Docs - String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
