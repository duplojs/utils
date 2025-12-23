---
outline: [2, 3]
prev:
  text: "transformProperties"
  link: "/en/v1/api/object/transformProperties"
next:
  text: "hasKeys"
  link: "/en/v1/api/object/hasKeys"
---

# to

The **`to()`** method transforms a value into a new object according to a transformation schema.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/to/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Classic signature

```typescript
function to<
	GenericInput extends unknown,
	GenericShapeObject extends ShapeObject<GenericInput>
>(
	input: GenericInput,
	shapeObject: FixDeepFunctionInfer<ShapeObject<GenericInput>, GenericShapeObject>
): ComputesResult<GenericShapeObject>
```

### Curried signature

```typescript
function to<
	GenericInput extends unknown,
	GenericShapeObject extends ShapeObject<NoInfer<GenericInput>>
>(
	shapeObject: ShapeObject<NoInfer<GenericInput>> & GenericShapeObject
): (input: GenericInput) => ComputesResult<NoInfer<GenericShapeObject>>
```

## Parameters

- `input`: The source value to transform.
- `shapeObject`: An object defining the shape of the result, where each property is a function that takes the input and returns a value.

## Return value

A new object built according to the transformation schema.

## See also

- [`transformProperties`](/en/v1/api/object/transformProperties) - Transforms multiple properties of an existing object
