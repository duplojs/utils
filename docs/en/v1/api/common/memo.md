---
outline: [2, 3]
description: "The memo() function evaluates a function only once then memorizes the result. Subsequent calls return the same value without recalculation."
prev:
  text: "sleep"
  link: "/en/v1/api/common/sleep"
next:
  text: "toJSON"
  link: "/en/v1/api/common/toJSON"
---

# memo

The **`memo()`** function evaluates a function only once then memorizes the result. Subsequent calls return the same value without recalculation.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/memo/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntax

```typescript
interface Memoized<
	GenericInput extends unknown
> {
	readonly input: GenericInput;
}

function memo<
	GenericOutput extends AnyValue
>(
	theFunction: () => GenericOutput
): Memoized<GenericOutput>;
```

## Parameters

- `theFunction` : Function evaluated only once to produce the memorized value.

## Return value

A `Memoized` object with the `input` property containing the single result.

## See also

- [`promiseObject`](/en/v1/api/common/promiseObject) - Resolution of asynchronous objects
- [`externalPromise`](/en/v1/api/common/externalPromise) - Controllable promise
