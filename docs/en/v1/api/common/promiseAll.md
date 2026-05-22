---
outline: [2, 3]
description: "The promiseAll() function resolves all values from a tuple or an iterable, with precise tuple typing."
prev:
  text: "callThen"
  link: "/en/v1/api/common/callThen"
next:
  text: "promiseObject"
  link: "/en/v1/api/common/promiseObject"
---

# promiseAll

The **`promiseAll()`** function resolves all values from a tuple or an iterable, while preserving precise tuple typing for tuple inputs.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/promiseAll/tryout.doc.ts"
  majorVersion="v1"
  height="607px"
/>

## Syntax

```typescript
function promiseAll<
	const GenericInput extends AnyTuple | Iterable<unknown>
>(
	input: GenericInput,
): GenericInput extends AnyTuple
	? Promise<{ -readonly [Prop in keyof GenericInput]: Awaited<GenericInput[Prop]>; }>
	: GenericInput extends Iterable<infer InferredValue>
		? Promise<Awaited<InferredValue>>[]
		: never;
```

## Parameters

- `input`: Tuple or iterable containing promises, direct values, or both.

## Return value

- If `input` is a tuple, returns a `Promise` of a resolved tuple with preserved structure.
- If `input` is an iterable, returns the resolved `Promise.all(...)` result typed from iterable items.

## See also

- [`callThen`](/en/v1/api/common/callThen) - Applies a callback on a sync or async value
- [`promiseObject`](/en/v1/api/common/promiseObject) - Resolves an object of promises
- [`asyncPipe`](/en/v1/api/common/asyncPipe) - Chains asynchronous transformations
