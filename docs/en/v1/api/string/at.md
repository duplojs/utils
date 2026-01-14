---
outline: [2, 3]
description: "The at() method returns the character at the specified index in a string, with support for negative indexes."
prev:
  text: "charAt"
  link: "/en/v1/api/string/charAt"
next:
  text: "slice"
  link: "/en/v1/api/string/slice"
---

# at

The **`at()`** method returns the character at the specified index in a string, with support for negative indexes.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/at/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function at(
	input: string,
	index: number
): string | undefined
```

### Curried signature

```typescript
function at<
	GenericInput extends string
>(
	index: number
): (input: GenericInput) => string | undefined
```

## Parameters

- `input`: The string from which to get the character.
- `index`: The index of the character to return. Can be negative to count from the end (-1 for the last character).

## Return value

A string representing the character at the specified index, or `undefined` if the index is out of bounds.

## See also

- [`charAt`](/en/v1/api/string/charAt) - Returns the character at an index (without negative index support)
- [`indexOf`](/en/v1/api/string/indexOf) - Finds the index of a substring

## Sources

- [MDN Web Docs - String.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at)
