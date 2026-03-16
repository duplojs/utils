---
outline: [2, 3]
description: "The flat() function flattens nested iterables into a single generator. By default it expands one level, with configurable depth."
prev:
  text: "asyncMap"
  link: "/en/v1/api/generator/asyncMap"
next:
  text: "asyncFlat"
  link: "/en/v1/api/generator/asyncFlat"
---

# flat

The **`flat()`** function flattens nested iterables into a single generator. By default it expands one level, with configurable depth.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/flat/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntax

```typescript
function flat<
	const GenericValue extends unknown,
	const GenericDepth extends number = 1,
>(
	iterator: Iterable<GenericValue>,
	depth?: GenericDepth,
): Generator<FlatIterator<GenericValue, GenericDepth>, void, unknown>
```

## Parameters

- `iterator`: Iterable to flatten.
- `depth`: Number of levels to expand. Defaults to `1`.

## Return value

A lazy `Generator` emitting the flattened values. Non-iterable values are yielded as-is.

## See also

- [`asyncFlat`](/en/v1/api/generator/asyncFlat) - Async flattening version
- [`map`](/en/v1/api/generator/map) - Transforms the elements of a generator
- [`chunk`](/en/v1/api/generator/chunk) - Groups elements into blocks
