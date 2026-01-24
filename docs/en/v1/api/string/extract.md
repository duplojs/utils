---
outline: [2, 3]
description: "The extract() method returns details about the first match of a pattern in a string, or undefined when there is no match."
prev:
  text: "match"
  link: "/en/v1/api/string/match"
next:
  text: "matchAll"
  link: "/en/v1/api/string/matchAll"
---

# extract

The **`extract()`** method returns details about the first match of a pattern in a string, or `undefined` when there is no match.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/extract/tryout.doc.ts"
  majorVersion="v1"
  height="360px"
/>

## Syntax

### Classic signature

```typescript
function extract<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: string | RegExp
): ExtractResult | undefined;
```

### Curried signature

```typescript
function extract<
	GenericInput extends string
>(
	pattern: string | RegExp
): (input: GenericInput) => ExtractResult | undefined;
```

## Parameters

- `input`: The string to search in.
- `pattern`: The search pattern, which can be a string or a regular expression.

## Return value

An `ExtractResult` object when a match is found, or `undefined` when there is no match.

`ExtractResult` contains:
- `matchedValue`: The full matched substring.
- `groups`: An array of captured groups (excluding the full match).
- `namedGroups`: A record of named groups if present.
- `offset`: The start index of the match.
- `self`: The original input string.

## See also

- [extractAll](/en/v1/api/string/extractAll): Extracts details about all matches.
- [match](/en/v1/api/string/match): Searches for a match with a regular expression.
- [matchAll](/en/v1/api/string/matchAll): Searches for all matches with a regular expression.

## Sources

- [MDN Web Docs - String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
