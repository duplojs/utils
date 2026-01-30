---
outline: [2, 3]
description: "The memoPromise() function lazily evaluates a function that returns a value or a promise, then memoizes the resolved result."
prev:
  text: "memo"
  link: "/en/v1/api/common/memo"
next:
  text: "toJSON"
  link: "/en/v1/api/common/toJSON"
---

# memoPromise

The **`memoPromise()`** function lazily evaluates a function that returns a value or a promise, then memoizes the resolved result.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/memoPromise/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

```typescript
interface MemoizedPromise<
	GenericValue extends unknown
> {
	readonly value: MaybePromise<GenericValue>;
}

function memoPromise<
	GenericOutput extends unknown
>(
	theFunction: () => MaybePromise<GenericOutput>
): MemoizedPromise<GenericOutput>;
```

## Parameters

- `theFunction` : Function evaluated once on first access, returning a value or a promise.

## Return value

A `MemoizedPromise` object with a lazy `value` getter. The first access returns a promise; once resolved, the property holds the resolved value.

## See also

- [`memo`](/en/v1/api/common/memo) - Lazy memoization for synchronous values
- [`externalPromise`](/en/v1/api/common/externalPromise) - Controllable promise
- [`promiseObject`](/en/v1/api/common/promiseObject) - Resolves objects of promises
