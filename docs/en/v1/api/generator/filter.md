---
outline: [2, 3]
prev:
  text: "asyncMap"
  link: "/en/v1/api/generator/asyncMap"
next:
  text: "chunk"
  link: "/en/v1/api/generator/chunk"
---

# filter

The **`filter()`** function filters the elements of a generator according to a predicate. It returns a new generator containing only the elements that satisfy the condition.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/filter/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Classic signature with type guard

```typescript
function filter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	iterator: Iterable<GenericElement>,
	predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput
): Generator<GenericOutput, unknown, unknown>
```

### Classic signature with boolean

```typescript
function filter<
	GenericElement extends unknown,
>(
	iterator: Iterable<GenericElement>,
	predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean
): Generator<GenericElement, unknown, unknown>
```

### Curried signature

```typescript
function filter<
	GenericElement extends unknown,
>(
	predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean
): (iterator: Iterable<GenericElement>) => Generator<GenericElement, unknown, unknown>
```

## Parameters

- `iterator`: The generator to filter
- `predicate`: Filtering function that receives:
  - `item`: The current element
  - `params.index`: The element index

## Return value

A new `Generator` containing the filtered elements.

## See also

- [`asyncFilter`](/en/v1/api/generator/asyncFilter) - Asynchronous version of filter
- [`map`](/en/v1/api/generator/map) - Transforms the elements of a generator
- [`reduce`](/en/v1/api/generator/reduce) - Reduces a generator to a value

## Sources

- [MDN Web Docs - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
