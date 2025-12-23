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

returns `true` if the value is greater than or equal to the threshold, `false` otherwise.

## See also

- [`greaterThan`](/en/v1/api/number/greaterThan) - Checks whether a number is strictly greater (>)
- [`less`](/en/v1/api/number/less) - Checks whether a number is less than or equal (<=)
- [`lessThan`](/en/v1/api/number/lessThan) - Checks whether a number is strictly less (<)

## Sources

- [MDN Web Docs - Greater than or equal operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
