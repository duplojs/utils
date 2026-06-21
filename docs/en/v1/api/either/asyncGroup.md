---
outline: [2, 3]
description: "The asyncGroup() function aggregates synchronous or asynchronous Right values from an object, array, or tuple, or returns the first Left encountered."
prev:
  text: "group"
  link: "/en/v1/api/either/group"
next:
  text: "hasInformation"
  link: "/en/v1/api/either/hasInformation"
---

# asyncGroup

The **`asyncGroup()`** function aggregates synchronous or asynchronous `Right` values from an object, array, or tuple into a `Success`. It awaits entries in order and returns the first `Left` encountered.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/asyncGroup/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

The `const` generic parameter automatically infers an array literal as a tuple, without an `as const` assertion.

## Syntax

```typescript
await E.asyncGroup(group)
```

## Parameters

- `group`: Object, array, or tuple containing `Either`, `Promise`, or `Future` values, or functions returning any of these types.

## Return value

- A `Promise` of a `Success` containing an object, array, or tuple of unwrapped values when every entry produces a `Right`.
- Otherwise, a `Promise` of the first `Left` in declaration order. Functions placed after that `Left` are not called.

## See also

- [`group`](/en/v1/api/either/group) - Synchronous version
- [`rightAsyncPipe`](/en/v1/api/either/rightAsyncPipe) - Async pipeline on `Right`
- [`future`](/en/v1/api/either/future) - Compatible async wrapper
