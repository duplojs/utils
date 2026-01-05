---
outline: [2, 3]
description: "The search() method searches for a match with a substring or a regular expression in a string and returns the index of the first occurrence found. If no match is found, it returns undefined."
prev:
  text: "lastIndexOf"
  link: "/en/v1/api/string/lastIndexOf"
next:
  text: "match"
  link: "/en/v1/api/string/match"
---

# search

The **`search()`** method searches for a match with a substring or a regular expression in a string and returns the index of the first occurrence found. If no match is found, it returns `undefined`.

## Interactive example

<MonacoTSEditor
	src="/examples/v1/api/string/search/tryout.doc.ts"
	majorVersion="v1"
	height="200px"
/>

## Syntax

### Classic signature

```typescript
function search<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: string | RegExp
): number | undefined;
```

### Curried signature

```typescript
function search<
	GenericInput extends string
>(
	pattern: string | RegExp
): (input: GenericInput) => number | undefined;
```

## Parameters

- `input`: The string in which to perform the search.
- `pattern`: The search pattern, which can be a string or a regular expression.

## Return value

The index of the first occurrence of the pattern in the string, or `undefined` if no match is found.

## See also

- [indexOf](/en/v1/api/string/indexOf): Returns the index of the first occurrence of a substring.
- [lastIndexOf](/en/v1/api/string/lastIndexOf): Returns the index of the last occurrence of a substring.
- [includes](/en/v1/api/string/includes): Checks whether a string contains a substring.

## Sources

- [MDN Web Docs: String.prototype.search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
