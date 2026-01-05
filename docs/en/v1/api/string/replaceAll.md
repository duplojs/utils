---
outline: [2, 3]
description: "The replaceAll() method returns a new string in which all occurrences of a specified pattern are replaced by a replacement string."
prev:
  text: "replace"
  link: "/en/v1/api/string/replace"
next:
  text: "includes"
  link: "/en/v1/api/string/includes"
---

# replaceAll

The **`replaceAll()`** method returns a new string in which all occurrences of a specified pattern are replaced by a replacement string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/replaceAll/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

### Classic signature

```typescript
function replaceAll(
	input: string, 
	pattern: string | RegExp, 
	replacement: string
): string;
```

### Curried signature

```typescript
function replaceAll<
	GenericInput extends string
>(
	pattern: string | RegExp, 
	replacement: string
): (input: GenericInput) => string;
```

## Parameters

- `input`: The string in which to perform the replacements.
- `pattern`: The pattern to search for. It can be a string or a regular expression.
- `replacement`: The replacement string.

## Return value

A new string with all occurrences of the pattern replaced by the replacement string.

## See also

- [replace](/en/v1/api/string/replace): Replaces the first occurrence of a pattern in a string.
- [includes](/en/v1/api/string/includes): Checks whether a string contains a given pattern.
- [indexOf](/en/v1/api/string/indexOf): Returns the index of the first occurrence of a pattern in a string.
- [toLowerCase](/en/v1/api/string/toLowerCase): Converts the entire string to lowercase.


## Sources

- [MDN Web Docs - String.prototype.replaceAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
