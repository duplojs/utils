---
outline: [2, 3]
description: "The group() function groups iterable elements into an object of arrays using a group name returned by your callback."
prev:
  text: "chunk"
  link: "/en/v1/api/generator/chunk"
next:
  text: "asyncGroup"
  link: "/en/v1/api/generator/asyncGroup"
---

# group

The **`group()`** function groups iterable elements into an object of arrays using a group name returned by your callback.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/group/tryout.doc.ts"
  majorVersion="v1"
  height="691px"
  :foldLines="[2]"
/>

## Syntax

### Classic signature

```typescript
function group<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	iterator: Iterable<GenericElement>,
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => GenericOutput,
): GroupResult<GenericOutput>
```

### Curried signature

```typescript
function group<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => GenericOutput,
): (iterator: Iterable<GenericElement>) => GroupResult<GenericOutput>
```

## Parameters

- `iterator`: The iterable source to group.
- `theFunction`: Grouping function that receives:
- `element`: The current element.
- `params.index`: The current index.
- `params.output(group, value)`: Helper to build a typed group output.

## Return value

An object where each key is a group name and each value is an array of grouped values.
Keys are optional because a group can be absent in the final result.

## See also

- [`asyncGroup`](/en/v1/api/generator/asyncGroup) - Asynchronous version of group
- [`reduce`](/en/v1/api/generator/reduce) - Reduces a generator to a single value
