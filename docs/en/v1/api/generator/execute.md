---
outline: [2, 3]
prev:
  text: "Generator"
  link: "/en/v1/api/generator/"
next:
  text: "loop"
  link: "/en/v1/api/generator/loop"
---

# execute

The **`execute()`** function fully consumes a generator by iterating over all its elements without returning a value. Used to end a chain of transformations on a generator.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/execute/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Synchronous signature

```typescript
function execute<
	GenericIterator extends Iterable<unknown>
>(
	iterator: GenericIterator
): void
```

### Asynchronous signature

```typescript
function execute<
	GenericIterator extends AsyncIterable<unknown>
>(
	iterator: GenericIterator
): Promise<void>
```

## Parameters

- `iterator`: The generator (synchronous or asynchronous) to execute fully.

## Return value

`void` for synchronous generators, `Promise<void>` for asynchronous generators.

## See also

- [`loop`](/en/v1/api/generator/loop) - Creates a generator with a custom loop
- [`map`](/en/v1/api/generator/map) - Transforms the elements of a generator

## Sources

- [MDN Web Docs - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
