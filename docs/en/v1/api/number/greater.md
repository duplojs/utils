---
outline: [2, 3]
prev:
  text: "atan2"
  link: "/en/v1/api/number/atan2"
next:
  text: "greaterThan"
  link: "/en/v1/api/number/greaterThan"
---

# greater

The **`greater()`** method checks whether a number is greater than or equal to (>=) a given threshold. It can be used in a curried way to ease functional composition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/greater/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function greater<
	GenericInput extends number
>(
	input: GenericInput,
	threshold: number
): boolean
```

### Curried signature

```typescript
function greater<
	GenericInput extends number
>(
	threshold: number
): (input: GenericInput) => boolean
```

## Parameters

- `input`: The number to compare (classic signature only).
- `threshold`: The comparison threshold.

## Return value

**Classic signature**: returns `true` if the value is greater than or equal to the threshold, `false` otherwise.

**Curried signature**: returns a function that takes a value and checks whether it is >= the threshold.

## Description

The `greater` function performs an inclusive comparison (>=), meaning it returns `true` if the value is strictly greater OR equal to the threshold. This differs from `greaterThan`, which performs a strict comparison (>).

**Examples of the difference:**
- `greater(5, 5)` returns `true` (5 >= 5)
- `greaterThan(5, 5)` returns `false` (5 is not > 5)

## See also

- [`greaterThan`](/en/v1/api/number/greaterThan) - Checks whether a number is strictly greater (>)
- [`less`](/en/v1/api/number/less) - Checks whether a number is less than or equal (<=)
- [`lessThan`](/en/v1/api/number/lessThan) - Checks whether a number is strictly less (<)

## Sources

- [MDN Web Docs - Greater than or equal operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
