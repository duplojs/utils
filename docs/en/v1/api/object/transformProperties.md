---
outline: [2, 3]
prev:
  text: "transformProperty"
  link: "/en/v1/api/object/transformProperty"
next:
  text: "to"
  link: "/en/v1/api/object/to"
---

# transformProperties

The **`transformProperties()`** method transforms multiple properties of an object via functions.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/transformProperties/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

### Classic signature

```typescript
function transformProperties<
	GenericObjectInput extends object,
	GenericTransformObject extends TransformObject<GenericObjectInput>
>(
	input: GenericObjectInput,
	transformObject: FixDeepFunctionInfer<TransformObject<GenericObjectInput>, GenericTransformObject>
): ComputesResult<GenericObjectInput, GenericTransformObject>
```

### Curried signature

```typescript
function transformProperties<
	GenericObjectInput extends object,
	GenericTransformObject extends TransformObject<NoInfer<GenericObjectInput>>
>(
	transformObject: TransformObject<NoInfer<GenericObjectInput>> & GenericTransformObject
): (input: GenericObjectInput) => ComputesResult<NoInfer<GenericObjectInput>, NoInfer<GenericTransformObject>>
```

## Parameters

- `input`: The source object.
- `transformObject`: An object where each key corresponds to a property to transform and the value is a transformation function.

## Return value

A new object with the transformed properties.

## See also

- [`transformProperty`](/en/v1/api/object/transformProperty) - Transforms a single property
- [`to`](/en/v1/api/object/to) - Transforms a value into a new object
