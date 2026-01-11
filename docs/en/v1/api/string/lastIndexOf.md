---
outline: [2, 3]
description: "The lastIndexOf() method returns the index of the last occurrence of a substring in a string, or undefined if the substring is not found."
prev:
  text: "indexOf"
  link: "/en/v1/api/string/indexOf"
next:
  text: "search"
  link: "/en/v1/api/string/search"
---

# lastIndexOf

The **`lastIndexOf()`** method returns the index of the last occurrence of a substring in a string, or undefined if the substring is not found.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/lastIndexOf/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function lastIndexOf<
	GenericInput extends string
>(
	input: GenericInput, 
	searchString: string, 
	position?: number
): number | undefined;
```

### Curried signature

```typescript
function lastIndexOf<
	GenericInput extends string
>(
	searchString: string
): (input: GenericInput) => number | undefined;
```

## Parameters

- `input`: The string in which to search.
- `searchString`: The substring to search for.
- `position` (optional): The position in the string from which to start searching backward. By default, the search starts at the end of the string.

## Return value

The index of the last occurrence of the substring, or undefined if the substring is not found.

## See also

- [match](/en/v1/api/string/match): Retrieves matches of a string against a regular expression.
- [endsWith](/en/v1/api/string/endsWith): Checks whether a string ends with a specific substring.
- [includes](/en/v1/api/string/includes): Checks whether a string contains a substring.

## Sources

- [MDN Web Docs: String.prototype.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
