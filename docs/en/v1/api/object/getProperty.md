---
outline: [2, 3]
prev:
  text: "fromEntries"
  link: "/en/v1/api/object/fromEntries"
next:
  text: "getDeepProperty"
  link: "/en/v1/api/object/getDeepProperty"
---

# getProperty

The **`getProperty()`** method retrieves the value of a property from an object.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/getProperty/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

```typescript
type MergeTopLevelUnionObject<
	GenericObject extends object,
	GenericFullObjectKeys extends keyof UnionObjectToIntersection<GenericObject>
	= keyof UnionObjectToIntersection<GenericObject>,
> = PartialKeys<
	{
		[Prop in GenericFullObjectKeys]: (
			GenericObject extends object
				? Prop extends keyof GenericObject
					? GenericObject[Prop]
					: never
				: never
		)
	},
	Exclude<
		GenericFullObjectKeys,
		keyof GenericObject
	>
>;
```

### Classic signature

```typescript
function getProperty<
	GenericInput extends object,
	GenericFullObject extends MergeTopLevelUnionObject<GenericInput>,
	GenericKey extends keyof GenericFullObject
>(
	input: GenericInput,
	key: GenericKey
): GenericFullObject[GenericKey]
```

### Curried signature

```typescript
function getProperty<
	GenericInput extends object,
	GenericFullObject extends MergeTopLevelUnionObject<GenericInput>,
	GenericKey extends keyof GenericFullObject
>(
	key: GenericKey
): (input: GenericInput) => GenericFullObject[GenericKey]
```

## Parameters

- `input`: The source object.
- `key`: The key of the property to retrieve.

## Return value

The value of the specified property, with its exact type.

## See also

- [`getDeepProperty`](/en/v1/api/object/getDeepProperty) - Retrieves a property via a deep path
