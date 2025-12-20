---
outline: [2, 3]
prev:
  text: "asyncLoop"
  link: "/en/v1/api/generator/asyncLoop"
next:
  text: "asyncMap"
  link: "/en/v1/api/generator/asyncMap"
---

# map

The **`map()`** function transforms each element of a generator by applying a transformation function. It returns a new generator with the transformed values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/map/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Classic signature

```typescript
function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	iterator: Iterable<GenericInput>,
	theFunction: (
		arg: GenericInput, 
		params: GeneratorMapParams
	) => GenericOutput
): Generator<GenericOutput, unknown, unknown>
```

### Curried signature

```typescript
function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (
		arg: GenericInput, 
		params: GeneratorMapParams
	) => GenericOutput
): (iterator: Iterable<GenericInput>) => Generator<GenericOutput, unknown, unknown>
```

## Parameters

- `iterator`: The generator to transform
- `theFunction`: Transformation function that receives:
  - `arg`: The current element
  - `params.index`: The element index

## Return value

A new `Generator` emitting the transformed values.

## See also

- [`asyncMap`](/en/v1/api/generator/asyncMap) - Asynchronous version of map
- [`filter`](/en/v1/api/generator/filter) - Filters the elements of a generator
- [`reduce`](/en/v1/api/generator/reduce) - Reduces a generator to a value

## Sources

- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
