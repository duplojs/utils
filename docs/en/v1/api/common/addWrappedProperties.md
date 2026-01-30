---
outline: [2, 3]
description: "The addWrappedProperties() function dynamically adds derived properties to a wrapped value while keeping the original type and extending the new type."
prev:
  text: "unwrapGroup"
  link: "/en/v1/api/common/unwrapGroup"
next:
  text: "clone"
  link: "/en/v1/api/common/clone"
---

# addWrappedProperties

The **`addWrappedProperties()`** function dynamically adds derived properties to a wrapped value while keeping the original type and extending the new type.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/addWrappedProperties/tryout.doc.ts"
  majorVersion="v1"
  height="40px"
/>

## Syntax

```typescript
type GetWrappedProperties<
	GenericWrappedValue extends object = object,
	GenericProperties extends object = object
> = (params: {
	wrappedValue: GenericWrappedValue;
}) => GenericProperties;

function addWrappedProperties<
	GenericWrappedValue extends object,
	GenericGetWrappedProperties extends GetWrappedProperties<GenericWrappedValue>
>(
	wrappedValue: GenericWrappedValue,
	getProperties: GenericGetWrappedProperties
): GenericWrappedValue & ReturnType<GenericGetWrappedProperties>;
```

## Parameters

- `wrappedValue` : Wrapped value (object) to enrich.
- `getProperties` : Function that receives `wrappedValue` and returns the added properties.

## Return value

The wrapped value enriched with the additional properties, typed with the union of both.

## See also

- [`wrapValue`](/en/v1/api/common/wrapValue) - Wraps a value
