---
outline: [2, 3]
prev:
  text: "ceil"
  link: "/en/v1/api/number/ceil"
next:
  text: "trunc"
  link: "/en/v1/api/number/trunc"
---

# floor

The **`floor()`** method rounds a number down to the nearest integer less than or equal to it. This function is useful to ensure a number never exceeds a certain integer value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/floor/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function floor<
	GenericInput extends number,
>(input: GenericInput): number
```

## Parameters

- `input`: The number to round down.

## Return value

The largest integer less than or equal to the given number.

## See also

- [`round`](/en/v1/api/number/round) - Rounds to the nearest integer
- [`ceil`](/en/v1/api/number/ceil) - Rounds up
- [`trunc`](/en/v1/api/number/trunc) - Truncates the decimal part

## Sources

- [MDN Web Docs - Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
