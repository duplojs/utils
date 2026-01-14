---
outline: [2, 3]
description: "The trunc() method truncates the decimal part of a number, returning only the integer part. Unlike floor(), it behaves the same for positive and negative numbers by simply removing the decimals."
prev:
  text: "floor"
  link: "/en/v1/api/number/floor"
next:
  text: "max"
  link: "/en/v1/api/number/max"
---

# trunc

The **`trunc()`** method truncates the decimal part of a number, returning only the integer part. Unlike `floor()`, it behaves the same for positive and negative numbers by simply removing the decimals.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/trunc/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function trunc<
	GenericInput extends number,
>(input: GenericInput): number
```

## Parameters

- `input`: The number whose decimal part you want to truncate.

## Return value

The integer part of the given number (removes decimals without rounding).

## See also

- [`round`](/en/v1/api/number/round) - Rounds to the nearest integer
- [`floor`](/en/v1/api/number/floor) - Rounds down
- [`ceil`](/en/v1/api/number/ceil) - Rounds up

## Sources

- [MDN Web Docs - Math.trunc()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
