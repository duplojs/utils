---
outline: [2, 3]
prev:
  text: "from"
  link: "/en/v1/api/array/from"
next:
  text: "at"
  link: "/en/v1/api/array/at"
---

# toTuple

The **`toTuple()`** method converts a value into a tuple by applying a series of transformation functions.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/toTuple/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntax

### Classic signature

```typescript
function toTuple<
	GenericInput extends unknown, 
	GenericShapeTuple extends ShapeTuple<GenericInput>
>(
	input: GenericInput, 
	shapeObject: ShapeTuple<GenericInput> & GenericShapeTuple
): ComputesResult<GenericShapeTuple>
```

### Curried signature

```typescript
function toTuple<
	GenericInput extends unknown, 
	GenericShapeTuple extends ShapeTuple<NoInfer<GenericInput>>
>(
	shapeObject: ShapeTuple<NoInfer<GenericInput>> & GenericShapeTuple
): (input: GenericInput) => ComputesResult<NoInfer<GenericShapeTuple>>
```

## Parameters

- `input`: The input value to transform into a tuple.
- `shapeObject`: An array of functions to apply to the input to build the tuple.

## Return value

A tuple containing the results of each function applied to the input, with strict typing.

## See also

- [`from`](/en/v1/api/array/from) - Creates an array from an iterable

## Sources

- [MDN Web Docs - Tuple](https://developer.mozilla.org/en-US/docs/Glossary/Tuple)
