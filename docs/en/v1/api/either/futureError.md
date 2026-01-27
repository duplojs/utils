---
outline: [2, 3]
description: "Creates a Future resolved with an Left<\"future\">, ideal for propagating a standardized rejection."
prev:
  text: "futureSuccess"
  link: "/en/v1/api/either/futureSuccess"
next:
  text: "Either"
  link: "/en/v1/api/either/"
---

# futureError

Creates a `Future` resolved with an `Left<"future">`, ideal for propagating a standardized rejection.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/futureError/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function futureError(value: unknown): Future<FutureError>;
```

## Parameters

- `input`: Error information to expose.

## Return value

A `Future` that resolves immediately with an `Left<"future">`.

## See also

- [`futureSuccess`](/en/v1/api/either/futureSuccess).
- [`future`](/en/v1/api/either/future).
