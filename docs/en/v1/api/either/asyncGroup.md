---
outline: [2, 3]
description: "The asyncGroup() function runs synchronous or asynchronous Either values in parallel (promises, Future) and returns the first Left encountered. If all are Right, it aggregates their values into a typed object."
prev:
  text: "group"
  link: "/en/v1/api/either/group"
next:
  text: "hasInformation"
  link: "/en/v1/api/either/hasInformation"
---

# asyncGroup

The **`asyncGroup()`** function runs synchronous or asynchronous `Either` values in parallel (promises, `Future`) and returns the first `Left` encountered. If all are `Right`, it aggregates their values into a typed object.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/asyncGroup/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Parameters

- `group`: Object where each property is an `Either`/`Promise`/`Future` or a function returning any of them.

## Return value

- `Right` with an object gathering all values when they are all `Right`.
- Otherwise the first `Left` that fails in the order of the group's declaration (including synchronous and asynchronous).

## See also

- [`group`](/en/v1/api/either/group) - Synchronous version
- [`rightAsyncPipe`](/en/v1/api/either/rightAsyncPipe) - Async pipeline on `Right`
- [`future`](/en/v1/api/either/future) - Compatible async wrapper
