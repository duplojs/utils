---
outline: [2, 3]
prev:
  text: "endsWith"
  link: "/en/v1/api/string/endsWith"
next:
  text: "lastIndexOf"
  link: "/en/v1/api/string/lastIndexOf"
---

# indexOf

The **`indexOf()`** method returns the index of the first occurrence of a substring in a string, or undefined if the substring is not found.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/indexOf/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function indexOf(
	input: string, 
	searchString: string, 
	position?: number
): number | undefined;
```

### Curried signature

```typescript
function indexOf<
	GenericInput extends string
>(
	searchString: string
): (input: GenericInput) => number | undefined;
```

## Parameters

- `input`: The string in which to search.
- `searchString`: The substring to search for.
- `position` (optional): The position in the string from which to start searching. Defaults to 0.

## Return value

The index of the first occurrence of the substring, or undefined if the substring is not found.

## See also

- [includes](/en/v1/api/string/includes): Checks whether a string contains a substring.
- [search](/en/v1/api/string/search): Searches for a match with a regular expression.
- [match](/en/v1/api/string/match): Retrieves matches of a string with a regular expression.

## Sources

- [MDN Web Docs: String.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
