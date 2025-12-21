---
outline: [2, 3]
next:
  text: "subtract"
  link: "/en/v1/api/number/subtract"
prev:
  text: "Number"
  link: "/en/v1/api/number/"
---

# add

The **`add()`** method adds two numbers or creates a partially applied addition function. It can be used in a curried way to ease functional composition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/number/add/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function add<
	GenericInput extends number
>(
	input: GenericInput,
	operand: number
): number
```

### Curried signature

```typescript
function add<
	GenericInput extends number
>(
	operand: number
): (input: GenericInput) => number
```

## Parameters

- `input`: The base number to which the operand is added (classic signature only).
- `operand`: The number to add to the value.

## Return value

**Classic signature**: returns the sum of the two numbers.

**Curried signature**: returns a function that takes a value and adds the operand to it.

## See also

- [`subtract`](/en/v1/api/number/subtract) - Subtracts two numbers
- [`multiply`](/en/v1/api/number/multiply) - Multiplies two numbers
- [`divide`](/en/v1/api/number/divide) - Divides two numbers

## Sources

- [MDN Web Docs - Addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
