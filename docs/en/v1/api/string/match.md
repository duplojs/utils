---
outline: [2, 3]
description: "The match() method searches for a match between a string and a regular expression, and returns the results as an array or undefined if no match is found."
prev:
  text: "search"
  link: "/en/v1/api/string/search"
next:
  text: "matchAll"
  link: "/en/v1/api/string/matchAll"
---

# match

The **`match()`** method searches for a match between a string and a regular expression, and returns the results as an array or `undefined` if no match is found.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/match/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Classic signature

```typescript
function match<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: string | RegExp
): RegExpMatchArray | undefined;

```

### Curried signature

```typescript
function match<
	GenericInput extends string
>(
	pattern: string | RegExp
): (input: GenericInput) => RegExpMatchArray | undefined;
```

## Parameters

- `input`: The string to search in.
- `pattern`: The search pattern, which can be a string or a regular expression.

## Return value

A match array (`RegExpMatchArray`) if one or more matches are found, or `undefined` if no match is found.

## See also

- [search](/en/v1/api/string/search): Searches for a match with a regular expression.
- [indexOf](/en/v1/api/string/indexOf): Returns the index of the first occurrence of a substring.
- [lastIndexOf](/en/v1/api/string/lastIndexOf): Returns the index of the last occurrence of a substring.

## Sources

- [MDN Web Docs - String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
