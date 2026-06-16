---
outline: [2, 3]
description: "Asynchronous version of rightPipe. Automatically handles promises and Either, and short-circuits on the first Left."
prev:
  text: "rightPipe"
  link: "/en/v1/api/either/rightPipe"
next:
  text: "group"
  link: "/en/v1/api/either/group"
---

# rightAsyncPipe

Asynchronous version of `rightPipe`. Automatically handles promises and `Either`, and short-circuits on the first `Left`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/rightAsyncPipe/tryout.doc.ts"
  majorVersion="v1"
  height="523px"
/>

## Syntax

```typescript
function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown
>(
  input: GenericInput,
  pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>
): Promise<
  Extract<
    RightAsyncPipeResult<GenericInput | GenericOutputPipe1, GenericOutputPipe1>,
    any
  >
>;
// ... overloads up to 15 steps
```

`RightAsyncPipeFunction` receives the unwrapped value of a `Right` (after `await`) and can return a raw value, an `Either`, or a promise of these values.

## Parameters

- `input`: Starting value, `Either`, or promise.
- `pipeX`: Async or sync functions executed sequentially. The pipeline stops on the first `Left`.

## Return value

A `Promise` resolved with the last `Right` if everything succeeds, or the `Left` that interrupted the pipeline.

## Best practices

- Prefix your information with a clear namespace (`"user.fetch"`, `"user.validate"`) to track progress.
- Combine `rightAsyncPipe` and `rightPipe` depending on whether your steps are sync/async.
- Let `rightAsyncPipe` await each step instead of manually unwrapping intermediate promises.

## See also

- [`rightPipe`](/en/v1/api/either/rightPipe).
- [`safeCallback`](/en/v1/api/either/safeCallback) – To convert thrown errors into `Either` values.
