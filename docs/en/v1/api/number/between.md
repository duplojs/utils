---
outline: [2, 3]
description: "The between() method checks whether a number is inside an inclusive interval. It can be used in a curried way to ease functional composition."
prev:
  text: "lessThan"
  link: "/en/v1/api/number/lessThan"
next:
  text: "betweenThan"
  link: "/en/v1/api/number/betweenThan"
---

# between

The **`between()`** method checks whether a number is inside an inclusive interval. It can be used in a curried way to ease functional composition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/between/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

### Classic signature

```typescript
function between<
	GenericInput extends number
>(
	input: GenericInput,
	greater: number,
	less: number
): boolean
```

### Curried signature

```typescript
function between<
	GenericInput extends number
>(
	greater: number,
	less: number
): (input: GenericInput) => boolean
```

## Parameters

- `input`: The number to evaluate (classic signature only).
- `greater`: The inclusive lower bound.
- `less`: The inclusive upper bound.

## Return value

returns `true` if `input` is within the interval `[greater, less]`, `false` otherwise.

## See also

- [`betweenThan`](/en/v1/api/number/betweenThan) - Checks whether a number is inside an exclusive interval
- [`greater`](/en/v1/api/number/greater) - Checks whether a number is greater than or equal (>=)
- [`less`](/en/v1/api/number/less) - Checks whether a number is less than or equal (<=)
