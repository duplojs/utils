---
outline: [2, 3]
description: "The chunk() function splits an iterable (generator or array) into fixed-size blocks and returns a generator of arrays. The last block can be shorter if the size does not evenly divide the input."
prev:
  text: "filter"
  link: "/en/v1/api/generator/filter"
next:
  text: "reduce"
  link: "/en/v1/api/generator/reduce"
---

# chunk

The **`chunk()`** function splits an iterable (generator or array) into fixed-size blocks and returns a generator of arrays. The last block can be shorter if the size does not evenly divide the input.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/chunk/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function chunk<
	const GenericElement extends unknown
>(
  input: Iterable<GenericElement>,
  size: number,
): Generator<GenericElement[], unknown, unknown>
```

### Curried signature

```typescript
function chunk<
	const GenericElement extends unknown
>(
  size: number,
): (input: Iterable<GenericElement>) => Generator<GenericElement[], unknown, unknown>
```

## Parameters

- `input`: Iterable (generator or array) to split.
- `size`: Size of each block.

## Return value

A generator producing arrays containing the input blocks. The input is consumed lazily.

## See also

- [`filter`](/en/v1/api/generator/filter) - Filters the elements of a generator
- [`map`](/en/v1/api/generator/map) - Transforms the elements of a generator
- [`reduce`](/en/v1/api/generator/reduce) - Reduces a generator to a value
