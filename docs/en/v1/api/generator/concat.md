---
outline: [2, 3]
description: "The concat() function concatenates multiple iterables into a single generator, preserving the order of inputs."
prev:
  text: "asyncMap"
  link: "/en/v1/api/generator/asyncMap"
next:
  text: "asyncConcat"
  link: "/en/v1/api/generator/asyncConcat"
---

# concat

The **`concat()`** function concatenates multiple iterables into a single generator, preserving the order of inputs.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/concat/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function concat<
	const GenericElement extends unknown,
>(
	elements: Iterable<GenericElement>,
): (
	iterator: Iterable<GenericElement>
) => Generator<GenericElement, unknown, unknown>;

function concat<
	const GenericElement extends unknown,
>(
	iterator: Iterable<GenericElement>,
	elements: Iterable<GenericElement>,
	...elementsRest: Iterable<GenericElement>[]
): Generator<GenericElement, unknown, unknown>;
```

## Parameters

- `iterator`: Source iterable (classic style only).
- `elements`: Iterable to append at the end.
- `elementsRest`: Additional iterables appended in order.

## Return value

A lazy `Generator` emitting values from `iterator`, then `elements`, then `elementsRest` in order.

## See also

- [`asyncConcat`](/en/v1/api/generator/asyncConcat) - Async version supporting `AsyncIterable`
- [`flat`](/en/v1/api/generator/flat) - Flattens nested iterables
- [`map`](/en/v1/api/generator/map) - Transforms each emitted value
