---
outline: [2, 3]
description: "The callThen() function applies a callback directly to a value, or waits for a Promise before running the same callback."
prev:
  text: "externalPromise"
  link: "/en/v1/api/common/externalPromise"
next:
  text: "promiseObject"
  link: "/en/v1/api/common/promiseObject"
---

# callThen

The **`callThen()`** function applies a callback directly to a value, or waits for a `Promise` before running the same callback.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/callThen/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntax

```typescript
function callThen<
	GenericInput extends unknown,
	GenericOutput extends unknown,
>(
	input: GenericInput,
	TheFunction: (
		input: Awaited<GenericInput>
	) => GenericOutput,
): GenericInput extends Promise<unknown>
	? Promise<Awaited<GenericOutput>>
	: GenericOutput;
```

## Parameters

- `input` : Direct value or `Promise` to transform.
- `TheFunction` : Callback executed with the resolved value of `input`.

## Return value

- If `input` is a direct value, returns the callback output.
- If `input` is a `Promise`, returns a `Promise` resolved with the callback output.

## See also

- [`externalPromise`](/en/v1/api/common/externalPromise) - Creates a promise controllable from the outside
- [`promiseObject`](/en/v1/api/common/promiseObject) - Resolves an object of promises
- [`asyncPipe`](/en/v1/api/common/asyncPipe) - Chains asynchronous transformations
