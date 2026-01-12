---
outline: [2, 3]
description: "The startsWith() method checks whether a string starts with a specific substring."
prev:
  text: "includes"
  link: "/en/v1/api/string/includes"
next:
  text: "endsWith"
  link: "/en/v1/api/string/endsWith"
---

# startsWith

The **`startsWith()`** method checks whether a string starts with a specific substring.

## Interactive example

<MonacoTSEditor
  	src="/examples/v1/api/string/startsWith/tryout.doc.ts"
  	majorVersion="v1"
	height="320px"
	:foldLines="[11]"
/>

## Syntax

### Classic signature

```typescript
function startsWith<
	GenericString extends string, 
	GenericSearchString extends string
>(
	input: GenericInput, 
	searchString: GenericSearchString
): input is Extract<GenericInput, `${GenericSearchString}${string}`>
```

### Curried signature

```typescript
function startsWith<
	GenericInput extends string,
	GenericSearchString extends string
>(
	searchString: GenericSearchString
): (
	input: GenericInput
) => input is Extract<GenericInput, `${GenericSearchString}${string}`>;
```

## Parameters

- `input`: The string to check.
- `searchString`: The substring to look for at the start of `input`.

## Return value

Returns `true` if `input` starts with `searchString` and false otherwise.

## See also

- [includes](/en/v1/api/string/includes): Checks whether a string contains a substring.
- [indexOf](/en/v1/api/string/indexOf): Returns the index of the first occurrence of a substring.
- [lastIndexOf](/en/v1/api/string/lastIndexOf): Returns the index of the last occurrence of a substring.
- [search](/en/v1/api/string/search): Searches for a match with a regular expression.

## Sources

- [MDN Web Docs: String.prototype.startsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
