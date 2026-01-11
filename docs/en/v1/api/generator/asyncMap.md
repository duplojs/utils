---
outline: [2, 3]
description: "The asyncMap() function transforms each element of a generator by applying an asynchronous transformation function. It returns an asynchronous generator with the transformed values."
prev:
  text: "map"
  link: "/en/v1/api/generator/map"
next:
  text: "filter"
  link: "/en/v1/api/generator/filter"
---

# asyncMap

The **`asyncMap()`** function transforms each element of a generator by applying an asynchronous transformation function. It returns an asynchronous generator with the transformed values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncMap/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Classic signature

```typescript
function asyncMap<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>,
	theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => Promise<GenericOutput>
): AsyncGenerator<GenericOutput, unknown, unknown>
```

### Curried signature

```typescript
function asyncMap<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => Promise<GenericOutput>
): (iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>) => AsyncGenerator<GenericOutput, unknown, unknown>
```

## Parameters

- `iterator`: The generator (synchronous or asynchronous) to transform
- `theFunction`: Asynchronous transformation function that receives:
  - `arg`: The current element
  - `params.index`: The element index

## Return value

An `AsyncGenerator` emitting the transformed values.

## See also

- [`map`](/en/v1/api/generator/map) - Synchronous version of asyncMap
- [`asyncFilter`](/en/v1/api/generator/asyncFilter) - Filters with an async function
- [`asyncReduce`](/en/v1/api/generator/asyncReduce) - Reduces with an async function

## Sources

- [MDN Web Docs - Async iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
