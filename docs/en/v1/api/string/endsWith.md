---
outline: [2, 3]
description: "The endsWith() method checks whether a string ends with a specific substring, taking an optional position into account."
prev:
  text: "startsWith"
  link: "/en/v1/api/string/startsWith"
next:
  text: "indexOf"
  link: "/en/v1/api/string/indexOf"
---

# endsWith

The **`endsWith()`** method checks whether a string ends with a specific substring, taking an optional position into account.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/endsWith/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
  :foldLines="[11]"
/>

## Syntax

### Classic signature

```typescript
function endsWith<
	GenericInput extends string, 
	GenericSearchString extends string
>(
	input: GenericInput, 
	searchString: GenericSearchString
): input is Extract<GenericInput, `${string}${GenericSearchString}`>;
```

### Curried signature

```typescript
function endsWith<
	GenericSearchString extends string, 
	GenericInput extends string
>(
	searchString: GenericSearchString
): (
	input: GenericInput
) => input is Extract<GenericInput, `${string}${GenericSearchString}`>;
```

## Parameters

- `input`: The string to check.
- `searchString`: The substring to look for at the end of `input`.


## Return value

A boolean indicating whether `input` ends with `searchString`. The return type uses a conditional type assertion to narrow the type of `input` when the condition is true.

## See also

- [matchAll](/en/v1/api/string/matchAll): Retrieves all matches of a regular expression with their groups.
- [match](/en/v1/api/string/match): Retrieves matches of a regular expression.
- [search](/en/v1/api/string/search): Searches for a match with a regular expression.
- [lastIndexOf](/en/v1/api/string/lastIndexOf): Returns the index of the last occurrence of a substring.

## Sources

- [MDN Web Docs - String.prototype.endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
