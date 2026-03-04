---
outline: [2, 3]
description: "The betweenThan() method checks whether a number is inside an exclusive interval. It can be used in a curried way to ease functional composition."
prev:
  text: "between"
  link: "/en/v1/api/number/between"
next:
  text: "Number"
  link: "/en/v1/api/number/"
---

# betweenThan

The **`betweenThan()`** method checks whether a number is inside an exclusive interval. It can be used in a curried way to ease functional composition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/betweenThan/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

### Classic signature

```typescript
function betweenThan<
	GenericInput extends number
>(
	input: GenericInput,
	greaterThan: number,
	lessThan: number
): boolean
```

### Curried signature

```typescript
function betweenThan<
	GenericInput extends number
>(
	greaterThan: number,
	lessThan: number
): (input: GenericInput) => boolean
```

## Parameters

- `input`: The number to evaluate (classic signature only).
- `greaterThan`: The exclusive lower bound.
- `lessThan`: The exclusive upper bound.

## Return value

returns `true` if `input` is within the interval `]greaterThan, lessThan[`, `false` otherwise.

## See also

- [`between`](/en/v1/api/number/between) - Checks whether a number is inside an inclusive interval
- [`greaterThan`](/en/v1/api/number/greaterThan) - Checks whether a number is strictly greater (>)
- [`lessThan`](/en/v1/api/number/lessThan) - Checks whether a number is strictly less (<)
