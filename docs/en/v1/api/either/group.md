---
outline: [2, 3]
description: "The group() function aggregates Right values from an object, array, or tuple into a Success, or returns the first Left encountered."
prev:
  text: "rightAsyncPipe"
  link: "/en/v1/api/either/rightAsyncPipe"
next:
  text: "asyncGroup"
  link: "/en/v1/api/either/asyncGroup"
---

# group

The **`group()`** function aggregates `Right` values from an object, array, or tuple into a `Success`. If a value is a `Left`, it returns the first one encountered in declaration order.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/group/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

The `const` generic parameter automatically infers an array literal as a tuple, without an `as const` assertion.

## Syntax

```typescript
E.group(group)
```

## Parameters

- `group`: Object, array, or tuple containing `Either` values or functions returning an `Either`.

## Return value

- A `Success` containing an object, array, or tuple of unwrapped values when every entry is a `Right`.
- Otherwise, the first `Left` in declaration order. Functions placed after that `Left` are not called.

## See also

- [`asyncGroup`](/en/v1/api/either/asyncGroup) - Async version accepting promises or `Future`
- [`rightPipe`](/en/v1/api/either/rightPipe) - Synchronous pipeline on `Right`
- [`rightAsyncPipe`](/en/v1/api/either/rightAsyncPipe) - Async pipeline on `Right`
