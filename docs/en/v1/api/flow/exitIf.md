---
outline: [2, 3]
description: "Exits the running flow when a predicate matches, even from nested flows."
prev:
  text: "breakIf"
  link: "/en/v1/api/flow/breakIf"
next:
  text: "defer"
  link: "/en/v1/api/flow/defer"
---

# exitIf

The **`exitIf()`** function tests a value with a predicate and exits the running flow when the predicate returns `true`. Because exit effects are forwarded through `F.exec()`, it can stop a flow from deep nested levels.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/exitIf/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntax

```typescript
function exitIf<
	GenericValue extends unknown
>(
	value: GenericValue,
	thePredicate: (value: GenericValue) => boolean
): Generator<Exit<GenericValue>, GenericValue>
```

## Parameters

- `value`: The value to test.
- `thePredicate`: Predicate used to decide whether the running flow must exit.

## Return value

A generator that yields an exit effect when the predicate returns `true`, otherwise returns the original value.

## See also

- [`breakIf`](/en/v1/api/flow/breakIf) - Stops only the current local branch
- [`exec`](/en/v1/api/flow/exec) - Forwards exit effects across nested flows
