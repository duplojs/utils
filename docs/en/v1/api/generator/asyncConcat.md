---
outline: [2, 3]
description: "The asyncConcat() function concatenates synchronous or asynchronous iterables into one async generator, in input order."
prev:
  text: "concat"
  link: "/en/v1/api/generator/concat"
next:
  text: "flat"
  link: "/en/v1/api/generator/flat"
---

# asyncConcat

The **`asyncConcat()`** function concatenates synchronous or asynchronous iterables into one async generator, in input order.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncConcat/tryout.doc.ts"
  majorVersion="v1"
  height="380px"
/>

## Syntax

```typescript
function asyncConcat<
	const GenericElement extends unknown,
>(
	elements: AsyncIterable<GenericElement> | Iterable<GenericElement>,
): (
	iterator: AsyncIterable<GenericElement> | Iterable<GenericElement>
) => AsyncGenerator<GenericElement, void, unknown>;

function asyncConcat<
	const GenericElement extends unknown,
>(
	iterator: AsyncIterable<GenericElement> | Iterable<GenericElement>,
	elements: AsyncIterable<GenericElement> | Iterable<GenericElement>,
	...elementsRest: (AsyncIterable<GenericElement> | Iterable<GenericElement>)[]
): AsyncGenerator<GenericElement, void, unknown>;
```

## Parameters

- `iterator`: Source iterable or async iterable (classic style only).
- `elements`: Iterable or async iterable to append at the end.
- `elementsRest`: Additional iterables or async iterables appended in order.

## Return value

A lazy `AsyncGenerator` emitting values from all inputs in order.

## See also

- [`concat`](/en/v1/api/generator/concat) - Sync iterable version
- [`asyncFlat`](/en/v1/api/generator/asyncFlat) - Flattens async/sync nested iterables
- [`asyncMap`](/en/v1/api/generator/asyncMap) - Transforms values asynchronously
