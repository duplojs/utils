---
outline: [2, 3]
description: "The matchAll() method takes a regular expression as an argument and returns an iterator of all matches found in a string."
prev:
  text: "match"
  link: "/en/v1/api/string/match"
next:
  text: "charAt"
  link: "/en/v1/api/string/charAt"
---

# matchAll

The **`matchAll()`** method takes a regular expression as an argument and returns an iterator of all matches found in a string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/matchAll/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntax

### Classic signature

```typescript
function matchAll<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: RegExp
): RegExpStringIterator<RegExpMatchArray>;
```

### Curried signature

```typescript
function matchAll<
	GenericInput extends string
>(
	pattern: RegExp
): (input: GenericInput) => RegExpStringIterator<RegExpMatchArray>;
```

## Parameters

- `input`: The string to analyze.
- `pattern`: The regular expression to use to find matches. It must have the `g` (global) flag to find all matches.

## Return value

An iterator (`RegExpStringIterator<RegExpMatchArray>`) that lets you iterate over all matches found in the `input` string.

## See also

- [match](/en/v1/api/string/match): Searches for a match with a regular expression.
- [search](/en/v1/api/string/search): Searches for a match with a regular expression.
- [indexOf](/en/v1/api/string/indexOf): Returns the index of the first occurrence of a substring.
- [lastIndexOf](/en/v1/api/string/lastIndexOf): Returns the index of the last occurrence of a substring.

## Sources

- [MDN Web Docs - String.prototype.matchAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
