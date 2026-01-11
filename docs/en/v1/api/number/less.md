---
outline: [2, 3]
description: "The less() method checks whether a number is less than or equal to (<=) a given threshold. It can be used in a curried way to ease functional composition."
prev:
  text: "greaterThan"
  link: "/en/v1/api/number/greaterThan"
next:
  text: "lessThan"
  link: "/en/v1/api/number/lessThan"
---

# less

The **`less()`** method checks whether a number is less than or equal to (<=) a given threshold. It can be used in a curried way to ease functional composition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/less/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function less<
	GenericInput extends number
>(
	input: GenericInput,
	threshold: number
): boolean
```

### Curried signature

```typescript
function less<
	GenericInput extends number
>(
	threshold: number
): (input: GenericInput) => boolean
```

## Parameters

- `input`: The number to compare (classic signature only).
- `threshold`: The comparison threshold.

## Return value

returns `true` if the value is less than or equal to the threshold, `false` otherwise.

## See also

- [`lessThan`](/en/v1/api/number/lessThan) - Checks whether a number is strictly less (<)
- [`greater`](/en/v1/api/number/greater) - Checks whether a number is greater than or equal (>=)
- [`greaterThan`](/en/v1/api/number/greaterThan) - Checks whether a number is strictly greater (>)

## Sources

- [MDN Web Docs - Less than or equal operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
