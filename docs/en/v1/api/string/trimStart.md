---
outline: [2, 3]
prev:
  text: "trim"
  link: "/en/v1/api/string/trim"
next:
  text: "trimEnd"
  link: "/en/v1/api/string/trimEnd"
---

# trimStart

The **`trimStart()`** method removes whitespace at the start of a string. Whitespace includes spaces, tabs, line breaks, and other Unicode whitespace characters.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/trimStart/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function trimStart<
	GenericInput extends string
>(input: GenericInput): string
```

## Parameters

- `input`: The string from which to remove leading whitespace.

## Return value

A new string representing the calling string without leading whitespace.

## See also

- [`trim`](/en/v1/api/string/trim) - Removes whitespace at the start and end
- [`trimEnd`](/en/v1/api/string/trimEnd) - Removes whitespace at the end only

## Sources

- [MDN Web Docs - String.prototype.trimStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)
