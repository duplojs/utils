---
outline: [2, 3]
description: "The getDeepProperty() method retrieves the value of a deep property via a path (path notation)."
prev:
  text: "getProperty"
  link: "/en/v1/api/object/getProperty"
next:
  text: "pick"
  link: "/en/v1/api/object/pick"
---

# getDeepProperty

The **`getDeepProperty()`** method retrieves the value of a deep property via a path (path notation).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/getDeepProperty/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
type ObjectProjection<
	GenericObject extends object,
> = FlatObject<GenericObject> extends infer InferredResult extends object
	? Omit<
		Pick<
			InferredResult,
			GetPropsWithValueExtends<
				InferredResult,
				EligibleEqual
			>
		>,
		`${string}[${string}]${string}`
	>
	: never;
```

### Classic signature

```typescript
function getDeepProperty<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection
>(
	input: GenericInput,
	path: GenericPath
): GenericObjectProjection[GenericPath]
```

### Curried signature

```typescript
function getDeepProperty<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection
>(
	path: GenericPath
): (input: GenericInput) => GenericObjectProjection[GenericPath]
```

## Parameters

- `input`: The source object.
- `path`: The path to the property (e.g. "user.address.city").

## Return value

The value of the specified deep property, with its exact type.

## See also

- [`getProperty`](/en/v1/api/object/getProperty) - Retrieves a top-level property
