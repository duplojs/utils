---
outline: [2, 3]
description: "The group() function runs several Either values (or functions returning an Either) and returns the first Left encountered. If all are Right, it aggregates their values into a typed object."
prev:
  text: "rightAsyncPipe"
  link: "/en/v1/api/either/rightAsyncPipe"
next:
  text: "asyncGroup"
  link: "/en/v1/api/either/asyncGroup"
---

# group

The **`group()`** function runs several `Either` values (or functions returning an `Either`) and returns the first `Left` encountered. If all are `Right`, it aggregates their values into a typed object.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/group/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Parameters

- `group`: Object where each property is an `Either` or a function returning an `Either`.

## Return value

- `Right` with an object gathering all values when they are all `Right`.
- Otherwise the first `Left` that fails in the order of declaration of the group.

## See also

- [`asyncGroup`](/en/v1/api/either/asyncGroup) - Async version accepting promises or `Future`
- [`rightPipe`](/en/v1/api/either/rightPipe) - Synchronous pipeline on `Right`
- [`rightAsyncPipe`](/en/v1/api/either/rightAsyncPipe) - Async pipeline on `Right`
