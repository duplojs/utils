---
outline: [2, 3]
prev:
  text: "addWrappedProperties"
  link: "/en/v1/api/common/addWrappedProperties"
next:
  text: "simpleClone"
  link: "/en/v1/api/common/simpleClone"
---

# clone

The **`clone()`** function performs a typed deep copy of a value while preserving its structure and types.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/clone/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntax

```typescript
type SimplifyTypeForce<
	GenericInput extends unknown
> = GenericInput extends object 
	? {
    	[Prop in keyof GenericInput]: SimplifyTypeForce<GenericInput[Prop]>;
	} 
	: GenericInput;

function clone<
	GenericInput extends unknown = unknown
>(
	input: GenericInput
): SimplifyTypeForce<GenericInput>;
```

## Parameters

- `input` : Value to deep clone.

## Return value

A new value structurally identical to the original, with the simplified type (`SimplifyTypeForce`).

## See also

- [`simpleClone`](/en/v1/api/common/simpleClone) - Light clone without advanced logic
