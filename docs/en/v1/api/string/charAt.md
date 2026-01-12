---
outline: [2, 3]
description: "The charAt() method returns the character at the specified index in a string."
prev:
  text: 'matchAll'
  link: '/en/v1/api/string/matchAll'
next:
  text: 'at'
  link: '/en/v1/api/string/at'
---

# charAt

The **`charAt()`** method returns the character at the specified index in a string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/charAt/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function charAt(
	input: string,
	index: number
): string
```

### Curried signature

```typescript
function charAt<
	GenericInput extends string
>(
	index: number
): (input: GenericInput) => string
```

## Parameters

- `input`: The string from which to retrieve the character.
- `index`: The index of the character to return (starts at 0).

## Return value

A string representing the character at the specified index. If the index is out of bounds, returns an empty string (`""`).

## See also

- [`indexOf`](/en/v1/api/string/indexOf) - Finds the index of a substring
- [`lastIndexOf`](/en/v1/api/string/lastIndexOf) - Finds the last index of a substring

## Sources

- [MDN Web Docs - String.prototype.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
