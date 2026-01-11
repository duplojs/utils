---
outline: [2, 3]
description: "The lessThan() method checks whether a number is strictly less (<) than a given threshold. It can be used in a curried way to ease functional composition."
prev:
  text: "less"
  link: "/en/v1/api/number/less"
next:
  text: "Number"
  link: "/en/v1/api/number/"
---

# lessThan

The **`lessThan()`** method checks whether a number is strictly less (<) than a given threshold. It can be used in a curried way to ease functional composition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/lessThan/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function lessThan<
	GenericInput extends number
>(
	input: GenericInput,
	threshold: number
): boolean
```

### Curried signature

```typescript
function lessThan<
	GenericInput extends number
>(
	threshold: number
): (input: GenericInput) => boolean
```

## Parameters

- `input`: The number to compare (classic signature only).
- `threshold`: The comparison threshold.

## Return value

returns `true` if the value is strictly less than the threshold, `false` otherwise.

## See also

- [`less`](/en/v1/api/number/less) - Checks whether a number is less than or equal (<=)
- [`greater`](/en/v1/api/number/greater) - Checks whether a number is greater than or equal (>=)
- [`greaterThan`](/en/v1/api/number/greaterThan) - Checks whether a number is strictly greater (>)

## Sources

- [MDN Web Docs - Less than operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
