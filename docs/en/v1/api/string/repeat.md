---
outline: [2, 3]
description: "The repeat() method returns a new string that is the original string repeated a specified number of times."
prev:
  text: "normalize"
  link: "/en/v1/api/string/normalize"
next:
  text: "replace"
  link: "/en/v1/api/string/replace"
---

# repeat

The **`repeat()`** method returns a new string that is the original string repeated a specified number of times.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/repeat/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function repeat<
	GenericInput extends string
>(
	input: GenericInput, 
	count: number
): string;
```

### Curried signature

```typescript
function repeat<
	GenericInput extends string
>(
	count: number
): (input: GenericInput) => string;
```

## Parameters

- `input`: The string to repeat.
- `count`: The number of times the string must be repeated. Must be a non-negative integer. If `count` is 0, an empty string is returned.

## Return value

A new string resulting from repeating the original string `count` times.

## See also 

- [normalize](/en/v1/api/string/normalize): Normalizes a string according to a specified Unicode form.
- [replace](/en/v1/api/string/replace): Replaces occurrences in a string.
- [trim](/en/v1/api/string/trim): Removes whitespace at the start and end of a string.

## Sources

- [MDN Web Docs - String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
