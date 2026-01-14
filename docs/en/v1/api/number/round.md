---
outline: [2, 3]
description: "The round() method rounds a number to the nearest integer. If the decimal part is exactly 0.5, the number is rounded to the next higher integer."
prev:
  text: "abs"
  link: "/en/v1/api/number/abs"
next:
  text: "ceil"
  link: "/en/v1/api/number/ceil"
---

# round

The **`round()`** method rounds a number to the nearest integer. If the decimal part is exactly 0.5, the number is rounded to the next higher integer.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/round/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntax

```typescript
function round<
	GenericInput extends number
>(
	input: GenericInput
): number
```

## Parameters

- `input`: The number to round.

## Return value

The number rounded to the nearest integer.

## See also

- [`floor`](/en/v1/api/number/floor) - Rounds down
- [`ceil`](/en/v1/api/number/ceil) - Rounds up
- [`trunc`](/en/v1/api/number/trunc) - Truncates the decimal part

## Sources

- [MDN Web Docs - Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
