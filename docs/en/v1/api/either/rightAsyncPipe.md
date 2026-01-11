---
outline: [2, 3]
description: "Asynchronous version of rightPipe. Automatically handles promises, Future, and Either, and short-circuits on the first Left."
prev:
  text: "rightPipe"
  link: "/en/v1/api/either/rightPipe"
next:
  text: "group"
  link: "/en/v1/api/either/group"
---

# rightAsyncPipe

Asynchronous version of `rightPipe`. Automatically handles promises, `Future`, and `Either`, and short-circuits on the first `Left`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/rightAsyncPipe/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Syntax

```typescript
function rightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>, 
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>
>(
  input: GenericInput,
  pipe1: EitherRightAsyncPipeFunction<GenericInput, GenericOutputPipe1>
): Future<EitherRightAsyncPipeResult<GenericInput | GenericOutputPipe1, GenericOutputPipe1>>;
// ... overloads up to 15 steps
```

`EitherRightAsyncPipeFunction` receives the unwrapped value of a `Right` (after `await`) and can return a raw value, an `Either`, or a promise/Future of these values.

## Parameters

- `input`: Starting `Either`, promise, or `Future`.
- `pipeX`: Async or sync functions executed sequentially. The pipeline stops on the first `Left`.

## Return value

A `Future` resolved with the last `Right` if everything succeeds, or the `Left` that interrupted the pipeline.

## Best practices

- Prefix your information with a clear namespace (`"user.fetch"`, `"user.validate"`) to track progress.
- Combine `rightAsyncPipe` and `rightPipe` depending on whether your steps are sync/async.
- In a `Promise`/`Future` mix, let `rightAsyncPipe` handle the normalization.

## See also

- [`rightPipe`](/en/v1/api/either/rightPipe).
- [`future`](/en/v1/api/either/future) – To create `Future` values to chain.
