---
outline: [2, 3]
description: "Creates a Future resolved with an Right<\"future\">."
prev:
  text: "future"
  link: "/en/v1/api/either/future"
next:
  text: "futureError"
  link: "/en/v1/api/either/futureError"
---

# futureSuccess

Creates a `Future` resolved with an `Right<"future">`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/futureSuccess/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function futureSuccess<
	const GenericInput extends unknown
>(
  input: GenericInput
): Future<FutureSuccess<GenericInput>>;
```

## Parameters

- `input`: Value to expose in the future.

## Return value

A `Future` that resolves immediately with `Right<"future">` containing the value.

## See also

- [`futureError`](/en/v1/api/either/futureError).
- [`future`](/en/v1/api/either/future).
