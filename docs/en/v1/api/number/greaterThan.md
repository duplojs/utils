---
outline: [2, 3]
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
  height="200px"
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

**Classic signature**: returns `true` if the value is strictly greater than the threshold, `false` otherwise.

**Curried signature**: returns a function that takes a value and checks whether it is > the threshold.

## Description

The `greaterThan` function performs a strict comparison (>), meaning it returns `true` only if the value is strictly greater than the threshold (and not equal). This differs from `greater`, which performs an inclusive comparison (>=).

**Examples of the difference:**
- `greaterThan(5, 5)` returns `false` (5 is not > 5)
- `greater(5, 5)` returns `true` (5 >= 5)

## See also

- [`greater`](/en/v1/api/number/greater) - Checks whether a number is greater than or equal (>=)
- [`less`](/en/v1/api/number/less) - Checks whether a number is less than or equal (<=)
- [`lessThan`](/en/v1/api/number/lessThan) - Checks whether a number is strictly less (<)

## Sources

- [MDN Web Docs - Greater than operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)
