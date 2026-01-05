---
outline: [2, 3]
description: "The asyncFilter() function filters the elements of a generator according to an asynchronous predicate. It returns an asynchronous generator containing only the elements that satisfy the condition."
prev:
  text: "filter"
  link: "/en/v1/api/generator/filter"
next:
  text: "chunk"
  link: "/en/v1/api/generator/chunk"
---

# asyncFilter

The **`asyncFilter()`** function filters the elements of a generator according to an asynchronous predicate. It returns an asynchronous generator containing only the elements that satisfy the condition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncFilter/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Syntax

### Classic signature with type guard

```typescript
function asyncFilter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	predicate: (
		item: GenericElement, 
		params: AsyncGeneratorFilterParams
	) => item is GenericOutput
): AsyncGenerator<GenericOutput, unknown, unknown>
```

### Classic signature with boolean

```typescript
function asyncFilter<
	GenericElement extends unknown,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	predicate: (
		item: GenericElement, 
		params: AsyncGeneratorFilterParams
	) => boolean
): AsyncGenerator<GenericElement, unknown, unknown>
```

### Curried signature

```typescript
function asyncFilter<
	GenericElement extends unknown,
>(
	predicate: (
		item: GenericElement, 
		params: AsyncGeneratorFilterParams
	) => boolean
): (
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>
) => AsyncGenerator<GenericElement, unknown, unknown>
```

## Parameters

- `iterator`: The generator (synchronous or asynchronous) to filter
- `predicate`: Asynchronous filtering function that receives:
  - `item`: The current element
  - `params.index`: The element index

## Return value

An `AsyncGenerator` containing the filtered elements.

## See also

- [`filter`](/en/v1/api/generator/filter) - Synchronous version of asyncFilter
- [`asyncMap`](/en/v1/api/generator/asyncMap) - Transforms with an async function
- [`asyncReduce`](/en/v1/api/generator/asyncReduce) - Reduces with an async function

## Sources

- [MDN Web Docs - Async iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
