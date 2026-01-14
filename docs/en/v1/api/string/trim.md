---
outline: [2, 3]
description: "The trim() method removes whitespace from the start and end of a string. Whitespace includes spaces, tabs, line breaks, and other Unicode whitespace characters."
prev:
  text: "padEnd"
  link: "/en/v1/api/string/padEnd"
next:
  text: "trimStart"
  link: "/en/v1/api/string/trimStart"
---

# trim

The **`trim()`** method removes whitespace from the start and end of a string. Whitespace includes spaces, tabs, line breaks, and other Unicode whitespace characters.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/trim/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function trim<
	GenericInput extends string
>(input: GenericInput): string
```

## Parameters

- `input`: The string from which to remove leading and trailing whitespace.

## Return value

A new string representing the calling string without leading and trailing whitespace.

## See also

- [`trimStart`](/en/v1/api/string/trimStart) - Removes whitespace at the start only
- [`trimEnd`](/en/v1/api/string/trimEnd) - Removes whitespace at the end only

## Sources

- [MDN Web Docs - String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
