---
outline: [2, 3]
description: "The createExternalAsyncGenerator() function creates an externally controlled async generator that can emit one value or stop explicitly."
prev:
  text: "asyncReduce"
  link: "/en/v1/api/generator/asyncReduce"
next:
  text: "Generator"
  link: "/en/v1/api/generator/"
---

# createExternalAsyncGenerator

The **`createExternalAsyncGenerator()`** function creates an externally controlled async generator that can emit one value or stop explicitly.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/generator/createExternalAsyncGenerator/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function createExternalAsyncGenerator<
	GenericValue extends unknown
>(): {
	asyncGenerator: AsyncGenerator<GenericValue, void, unknown>;
	next: (value: GenericValue) => void;
	exit: () => void;
}
```

## Parameters

This function does not take any parameter.

## Return value

An object containing:
- `asyncGenerator`: The async generator waiting for an external value.
- `next(value)`: Pushes a value to the generator.
- `exit()`: Stops the generator without yielding a value.

## See also

- [`execute`](/en/v1/api/generator/execute) - Consumes a generator
- [`asyncMap`](/en/v1/api/generator/asyncMap) - Applies async transformations on iterables
