---
outline: [2, 3]
description: "The group() method groups the elements of an array according to a computed key and returns an object indexed by group name with the associated elements."
prev:
  text: "join"
  link: "/en/v1/api/array/join"
next:
  text: "sum"
  link: "/en/v1/api/array/sum"
---

# group

The **`group()`** method groups the elements of an array according to a computed key and returns an object indexed by group name with the associated elements.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/group/tryout.doc.ts"
  majorVersion="v1"
  height="439px"
  :foldLines="[2]"
/>

## Syntax

### Classic signature

```typescript
function group<
	GenericInput extends readonly unknown[],
	GenericOutput extends ArrayGroupFunctionOutput
>(
	input: GenericInput,
	theFunction: (
		element: GenericInput[number], 
		params: ArrayGroupFunctionParams
	) => GenericOutput
): ArrayGroupResult<GenericOutput>
```

### Curried signature

```typescript
function group<
	GenericInput extends readonly unknown[],
	GenericOutput extends ArrayGroupFunctionOutput
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayGroupFunctionParams
	) => GenericOutput
): (input: GenericInput) => ArrayGroupResult<GenericOutput>
```

### Auxiliary parameters

```typescript
interface ArrayGroupFunctionOutput<
	GenericGroupName extends string = string, 
	GenericGroupValue extends unknown = unknown
> {
	group: GenericGroupName;
	value: GenericGroupValue;
}

interface ArrayGroupFunctionParams {
	index: number;
	output: typeof groupOutput;
}

function groupOutput<
	GenericGroupValue extends unknown, 
	GenericGroupName extends string
>(
	group: GenericGroupName
): (
	value: GenericGroupValue
) => ArrayGroupFunctionOutput<GenericGroupName, GenericGroupValue>;

function groupOutput<
	GenericGroupValue extends unknown, 
	GenericGroupName extends string
>(
	group: GenericGroupName,
	value: GenericGroupValue
): ArrayGroupFunctionOutput<GenericGroupName, GenericGroupValue>;
```

## Parameters

- `input`: The array to traverse to create groups.
- `theFunction`: Function applied to each element. It returns an object `{ group, value }` describing the target group name and the value to add.
- `params.index`: Current index in the input array.
- `params.output`: Shortcut to build an output object via `groupOutput`, which guarantees typing consistency.

## Return value

An object in which each property corresponds to a computed group. Each key contains an array of the values produced for that group. Missing keys correspond to groups never encountered.

## See also

- [`reduce`](/en/v1/api/array/reduce) - Aggregates an array into a single value
- [`sum`](/en/v1/api/array/sum) - Adds all values of an array

## Sources

- [MDN Web Docs - Array.prototype.group()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group)
