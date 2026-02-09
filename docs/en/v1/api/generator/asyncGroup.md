---
outline: [2, 3]
description: "The asyncGroup() function groups values from an async iterable into an object of arrays with asynchronous grouping logic."
prev:
  text: "group"
  link: "/en/v1/api/generator/group"
next:
  text: "reduce"
  link: "/en/v1/api/generator/reduce"
---

# asyncGroup

The **`asyncGroup()`** function groups values from an async iterable into an object of arrays with asynchronous grouping logic.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncGroup/tryout.doc.ts"
  majorVersion="v1"
  height="712px"
  :foldLines="[2]"
/>

## Syntax

### Classic signature

```typescript
function asyncGroup<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	asyncIterator: AsyncIterable<GenericElement>,
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => MaybePromise<GenericOutput>,
): Promise<GroupResult<GenericOutput>>
```

### Curried signature

```typescript
function asyncGroup<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => MaybePromise<GenericOutput>,
): (asyncIterator: AsyncIterable<GenericElement>) => Promise<GroupResult<GenericOutput>>
```

## Parameters

- `asyncIterator`: The async iterable source to group.
- `theFunction`: Async grouping function that receives:
- `element`: The current element.
- `params.index`: The current index.
- `params.output(group, value)`: Helper to build a typed group output.

## Return value

A `Promise` resolving to an object where each key is a group name and each value is an array of grouped values.
Keys are optional because a group can be absent in the final result.

## See also

- [`group`](/en/v1/api/generator/group) - Synchronous version of asyncGroup
- [`asyncReduce`](/en/v1/api/generator/asyncReduce) - Reduces async iterables to a single value
