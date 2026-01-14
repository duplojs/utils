---
outline: [2, 3]
description: "The greaterThan() method checks whether a number is strictly greater (>) than a given threshold. It can be used in a curried way to ease functional composition."
prev:
  text: "greater"
  link: "/en/v1/api/number/greater"
next:
  text: "less"
  link: "/en/v1/api/number/less"
---

# greaterThan

The **`greaterThan()`** method checks whether a number is strictly greater (>) than a given threshold. It can be used in a curried way to ease functional composition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/greaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="166px"
/>

## Syntax

### Classic signature

```typescript
function greaterThan<
	GenericInput extends number
>(
	input: GenericInput,
	threshold: number
): boolean
```

### Curried signature

```typescript
function greaterThan<
	GenericInput extends number
>(
	threshold: number
): (input: GenericInput) => boolean
```

## Parameters

- `input`: The number to compare (classic signature only).
- `threshold`: The comparison threshold.

## Return value

returns `true` if the value is strictly greater than the threshold, `false` otherwise.

## See also

- [`greater`](/en/v1/api/number/greater) - Checks whether a number is greater than or equal (>=)
- [`less`](/en/v1/api/number/less) - Checks whether a number is less than or equal (<=)
- [`lessThan`](/en/v1/api/number/lessThan) - Checks whether a number is strictly less (<)

## Sources

- [MDN Web Docs - Greater than operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)
