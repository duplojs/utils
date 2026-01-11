---
outline: [2, 3]
description: "Creates a Future resolved with an EitherLeft<\"future\">, ideal for propagating a standardized rejection."
prev:
  text: "futureSuccess"
  link: "/en/v1/api/either/futureSuccess"
next:
  text: "Either"
  link: "/en/v1/api/either/"
---

# futureError

Creates a `Future` resolved with an `EitherLeft<"future">`, ideal for propagating a standardized rejection.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/futureError/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

```typescript
function futureError(value: unknown): Future<EitherFutureError>;
```

## Parameters

- `input`: Error information to expose.

## Return value

A `Future` that resolves immediately with an `EitherLeft<"future">`.

## See also

- [`futureSuccess`](/en/v1/api/either/futureSuccess).
- [`future`](/en/v1/api/either/future).
