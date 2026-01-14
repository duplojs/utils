---
outline: [2, 3]
description: "The padStart() method pads the current string with a given string to reach a fixed length. The padding is applied at the start of the current string."
prev:
  text: "split"
  link: "/en/v1/api/string/split"
next:
  text: "padEnd"
  link: "/en/v1/api/string/padEnd"
---

# padStart

The **`padStart()`** method pads the current string with a given string to reach a fixed length. The padding is applied at the start of the current string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/padStart/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function padStart<
	GenericInput extends string
>(
	input: GenericInput,
	targetLength: number,
	padString: string
): string
```

### Curried signature

```typescript
function padStart<
	GenericInput extends string
>(
	targetLength: number,
	padString: string
): (input: GenericInput) => string
```

## Parameters

- `input`: The string to pad.
- `targetLength`: The length of the resulting string once padded.
- `padString`: The string to use to pad the current string.

## Return value

A new string of the specified length, padded with the provided string from the start.

## See also

- [`padEnd`](/en/v1/api/string/padEnd) - Pads the string at the end
- [`repeat`](/en/v1/api/string/repeat) - Repeats a string a given number of times

## Sources

- [MDN Web Docs - String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
