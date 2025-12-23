---
outline: [2, 3]
prev:
  text: "trimStart"
  link: "/en/v1/api/string/trimStart"
next:
  text: "sort"
  link: "/en/v1/api/string/sort"
---

# trimEnd

The **`trimEnd()`** method removes whitespace at the end of a string. Whitespace includes spaces, tabs, line breaks, and other Unicode whitespace characters.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/trimEnd/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function trimEnd<
	GenericInput extends string
>(input: GenericInput): string
```

## Parameters

- `input`: The string from which to remove trailing whitespace.

## Return value

A new string representing the calling string without trailing whitespace.

## See also

- [`trim`](/en/v1/api/string/trim) - Removes whitespace at the start and end
- [`trimStart`](/en/v1/api/string/trimStart) - Removes whitespace at the start only

## Sources

- [MDN Web Docs - String.prototype.trimEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)
