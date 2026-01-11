---
outline: [2, 3]
description: "The includes() method checks whether a string contains a specified substring, returning true or false accordingly."
prev:
  text: "replaceAll"
  link: "/en/v1/api/string/replaceAll"
next:
  text: "startsWith"
  link: "/en/v1/api/string/startsWith"
---

# includes

The **`includes()`** method checks whether a string contains a specified substring, returning `true` or `false` accordingly.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/includes/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
  :foldLines="[11]"
/>

## Syntax

### Classic signature

```typescript
function includes<
	GenericInput extends string, 
	GenericSearchString extends string
>(
	input: GenericInput, 
	searchString: GenericSearchString
): input is Extract<GenericInput, `${string}${GenericSearchString}${string}`>;
```

### Curried signature

```typescript
function includes<
	GenericInput extends string,
	GenericSearchString extends string
>(
	searchString: GenericSearchString
): (
	input: GenericInput
) => input is Extract<GenericInput, `${string}${GenericSearchString}${string}`>;
```

## Parameters

- `input`: The string in which to perform the search.
- `searchString`: The substring to search for.

## Return value

A boolean indicating whether the substring `searchString` was found in the string `input`.

## See also

- [startsWith](/en/v1/api/string/startsWith): Checks whether a string starts with a specific substring.
- [endsWith](/en/v1/api/string/endsWith): Checks whether a string ends with a specific substring.
- [indexOf](/en/v1/api/string/indexOf): Returns the index of the first occurrence of a substring.
- [lastIndexOf](/en/v1/api/string/lastIndexOf): Returns the index of the last occurrence of a substring.


## Sources

- [MDN Web Docs: String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
