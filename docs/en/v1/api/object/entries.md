---
outline: [2, 3]
description: "The entries() method returns an array of an object's key-value pairs with strict typing."
prev:
  text: "values"
  link: "/en/v1/api/object/values"
next:
  text: "entry"
  link: "/en/v1/api/object/entry"
---

# entries

The **`entries()`** method returns an array of an object's key-value pairs with strict typing.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/entries/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
type GetEntry<
	GenericKey extends ObjectKey,
	GenericInput extends unknown,
> = GenericInput extends any
	? GenericKey extends string | number
		? [`${GenericKey}`, GenericInput]
		: never
	: never;

type GetEntries<
	GenericObject extends object,
> = (
	{
		[Prop in keyof GenericObject]-?: GetEntry<Prop, GenericObject[Prop]>
	}[keyof GenericObject]
) extends infer InferredResult extends ObjectEntry
	? IsEqual<InferredResult, never> extends true
		? []
		: InferredResult[]
	: never;

function entries<
	GenericInput extends object
>(
	input: GenericInput
): SimplifyTopLevel<GetEntries<GenericInput>>
```

## Parameters

- `input`: The object whose key-value pairs you want to retrieve.

## Return value

An array of tuples `[key, value]` with strict typing that preserves the exact types of each property.

## See also

- [`keys`](/en/v1/api/object/keys) - Returns an array of an object's keys
- [`values`](/en/v1/api/object/values) - Returns an array of an object's values
- [`entry`](/en/v1/api/object/entry) - Creates a typed key-value pair
- [`fromEntries`](/en/v1/api/object/fromEntries) - Builds an object from entries

## Sources

- [MDN Web Docs - Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
