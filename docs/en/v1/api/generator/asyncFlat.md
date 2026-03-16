---
outline: [2, 3]
description: "The asyncFlat() function flattens nested synchronous or asynchronous iterables into a single async generator. The flattening depth is configurable."
prev:
  text: "flat"
  link: "/en/v1/api/generator/flat"
next:
  text: "filter"
  link: "/en/v1/api/generator/filter"
---

# asyncFlat

The **`asyncFlat()`** function flattens nested synchronous or asynchronous iterables into a single async generator. The flattening depth is configurable.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncFlat/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntax

```typescript
function asyncFlat<
	const GenericValue extends unknown,
	const GenericDepth extends number = 1,
>(
	iterator: AsyncIterable<GenericValue> | Iterable<GenericValue>,
	depth?: GenericDepth,
): AsyncGenerator<FlatAsyncIterator<GenericValue, GenericDepth>, void, unknown>
```

## Parameters

- `iterator`: Synchronous or asynchronous iterable to flatten.
- `depth`: Number of levels to expand. Defaults to `1`.

## Return value

A lazy `AsyncGenerator` emitting the flattened values. Synchronous iterables nested inside an async source are also supported.

## See also

- [`flat`](/en/v1/api/generator/flat) - Synchronous flattening version
- [`asyncMap`](/en/v1/api/generator/asyncMap) - Transforms a generator with an async function
- [`asyncFilter`](/en/v1/api/generator/asyncFilter) - Filters a generator with an async predicate
