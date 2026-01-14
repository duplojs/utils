---
outline: [2, 3]
description: "The padEnd() method pads the current string with a given string to obtain a fixed-length string. The padding is applied at the end of the current string."
prev:
  text: "padStart"
  link: "/en/v1/api/string/padStart"
next:
  text: "trim"
  link: "/en/v1/api/string/trim"
---

# padEnd

The **`padEnd()`** method pads the current string with a given string to obtain a fixed-length string. The padding is applied at the end of the current string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/padEnd/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

### Classic signature

```typescript
function padEnd<
	GenericInput extends string
>(
	input: GenericInput,
	targetLength: number,
	padString: string
): string
```

### Curried signature

```typescript
function padEnd<
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

A new string of the specified length, padded with the provided string from the end.

## See also

- [`padStart`](/en/v1/api/string/padStart) - Pads the string at the start
- [`repeat`](/en/v1/api/string/repeat) - Repeats a string a given number of times

## Sources

- [MDN Web Docs - String.prototype.padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
