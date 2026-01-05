---
outline: [2, 3]
description: "Future<T> class: an enhanced promise capable of carrying Either values and exposing helpers like Future.all."
prev:
  text: "whenIsOptionalFilled"
  link: "/en/v1/api/either/whenIsOptionalFilled"
next:
  text: "futureSuccess"
  link: "/en/v1/api/either/futureSuccess"
---

# future

`Future<T>` class: an enhanced promise capable of carrying `Either` values and exposing helpers like `Future.all`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/future/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

```typescript
function future<
	GenericEither extends AnyValue
>(value: GenericEither): Future<GenericEither>;
```

## Parameters

- `input`: Can be an `Either`, a promise, or any value. `Future` normalizes everything to return an `Either` in an async context.

## Return value

An instance of `Future`, subclass of `Promise`, whose `await` automatically returns an `Either` (`FutureSuccess`, `FutureError`, or any provided `Either`).

## Best practices

- `Future` automatically propagates the first `Left` encountered: combine it with `E.rightAsyncPipe` for your async pipelines.
- Use `Future.all([...])` to wait for multiple typed operations.
- Prefer `futureSuccess` / `futureError` to create base cases.

## See also

- [`futureSuccess`](/en/v1/api/either/futureSuccess).
- [`futureError`](/en/v1/api/either/futureError).
- [`rightAsyncPipe`](/en/v1/api/either/rightAsyncPipe) – To chain async operations.
