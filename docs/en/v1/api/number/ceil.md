---
outline: [2, 3]
prev:
  text: "round"
  link: "/en/v1/api/number/round"
next:
  text: "floor"
  link: "/en/v1/api/number/floor"
---

# ceil

The **`ceil()`** method rounds a number up to the next integer greater than or equal to it. This function is useful to ensure you always have enough resources (boxes, pages, etc.).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/ceil/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function ceil<
	GenericInput extends number,
>(input: GenericInput): number
```

## Parameters

- `input`: The number to round up.

## Return value

The smallest integer greater than or equal to the given number.

## See also

- [`round`](/en/v1/api/number/round) - Rounds to the nearest integer
- [`floor`](/en/v1/api/number/floor) - Rounds down
- [`trunc`](/en/v1/api/number/trunc) - Truncates the decimal part

## Sources

- [MDN Web Docs - Math.ceil()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
