---
outline: [2, 3]
description: "The replace() method returns a new string in which part of the original string is replaced by another string."
prev:
  text: "repeat"
  link: "/en/v1/api/string/repeat"
next:
  text: "replaceAll"
  link: "/en/v1/api/string/replaceAll"
---

# replace

The **`replace()`** method returns a new string in which part of the original string is replaced by another string.

:warning: This method replaces only the first occurrence found. To replace all occurrences, use the [replaceAll](/en/v1/api/string/replaceAll) method.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/replace/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

### Classic signature

```typescript
function replace<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: string | RegExp, 
	replacement: string
): string;
```

### Curried signature

```typescript
function replace<
	GenericInput extends string
>(
	pattern: string | RegExp, 
	replacement: string
): (input: GenericInput) => string;
```

## Parameters

- `input`: The string in which to perform the replacement.
- `pattern`: The string or regular expression to search for.
- `replacement`: The replacement string.

## Return value

A new string with the replacements applied.

## See also

- [repeat](/en/v1/api/string/repeat): Repeats a string a specified number of times.
- [replaceAll](/en/v1/api/string/replaceAll): Replaces all occurrences in a string.
- [trim](/en/v1/api/string/trim): Removes whitespace at the start and end of a string.

## Sources

- [MDN Web Docs - String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
