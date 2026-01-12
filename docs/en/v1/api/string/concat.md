---
outline: [2, 3]
description: "The concat() method combines the text of multiple strings and returns a new string."
prev:
  text: "sortCompare"
  link: "/en/v1/api/string/sortCompare"
next:
  text: "isKeyof"
  link: "/en/v1/api/string/isKeyof"
---

# concat

The **`concat()`** method combines the text of multiple strings and returns a new string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/concat/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function concat(
	input: string,
	...textsRest: string[]
): string
```

### Curried signature

```typescript
function concat<
	GenericInput extends string
>(
	text: string
): (input: GenericInput) => string
```

## Parameters

- `input`: The base string.
- `textsRest`: One or more strings to concatenate with `input`.

## Return value

A new string containing the combined text of the provided strings.

## See also

- [`repeat`](/en/v1/api/string/repeat) - Repeats a string a given number of times
- [`padStart`](/en/v1/api/string/padStart) - Pads the string at the start
- [`padEnd`](/en/v1/api/string/padEnd) - Pads the string at the end

## Sources

- [MDN Web Docs - String.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
