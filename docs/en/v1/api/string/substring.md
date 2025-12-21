---
outline: [2, 3]
prev:
  text: "slice"
  link: "/en/v1/api/string/slice"
next:
  text: "split"
  link: "/en/v1/api/string/split"
---

# substring

The **`substring()`** method returns a substring between two indexes without modifying the original string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/substring/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function substring<
	GenericInput extends string
>(
	input: GenericInput,
	start: number,
	end?: number
): string
```

### Curried signature

```typescript
function substring<
	GenericInput extends string
>(
	start: number,
	end?: number
): (input: GenericInput) => string
```

## Parameters

- `input`: The string to extract from.
- `start`: The index of the first character to include in the returned substring.
- `end` (optional): The index of the first character to exclude from the returned substring. If omitted, extracts to the end of the string.

## Return value

A new string containing the specified section of the original string.

## See also

- [`slice`](/en/v1/api/string/slice) - Extracts a section of a string with negative index support
- [`charAt`](/en/v1/api/string/charAt) - Returns the character at an index
- [`indexOf`](/en/v1/api/string/indexOf) - Finds the index of a substring

## Sources

- [MDN Web Docs - String.prototype.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
