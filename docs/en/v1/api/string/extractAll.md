---
outline: [2, 3]
description: "The extractAll() method returns an iterator of all match details found in a string for a given regular expression."
prev:
  text: "matchAll"
  link: "/en/v1/api/string/matchAll"
next:
  text: "charAt"
  link: "/en/v1/api/string/charAt"
---

# extractAll

The **`extractAll()`** method returns an iterator of all match details found in a string for a given regular expression.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/extractAll/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Syntax

### Classic signature

```typescript
function extractAll<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: RegExp
): Generator<ExtractResult>;
```

### Curried signature

```typescript
function extractAll<
	GenericInput extends string
>(
	pattern: RegExp
): (input: GenericInput) => Generator<ExtractResult>;
```

## Parameters

- `input`: The string to analyze.
- `pattern`: The regular expression to use to find matches. It must have the `g` (global) flag to find all matches.

## Return value

An iterator (`Generator<ExtractResult>`) that lets you iterate over all matches found in the `input` string.

`ExtractResult` contains:
- `matchedValue`: The full matched substring.
- `groups`: An array of captured groups (excluding the full match).
- `namedGroups`: A record of named groups if present.
- `offset`: The start index of the match.
- `self`: The original input string.

## See also

- [extract](/en/v1/api/string/extract): Extracts details about the first match.
- [match](/en/v1/api/string/match): Searches for a match with a regular expression.
- [matchAll](/en/v1/api/string/matchAll): Searches for all matches with a regular expression.

## Sources

- [MDN Web Docs - String.prototype.matchAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
