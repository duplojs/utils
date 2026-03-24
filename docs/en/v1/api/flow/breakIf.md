---
outline: [2, 3]
description: "Stops the current flow branch when a predicate matches."
prev:
  text: "exec"
  link: "/en/v1/api/flow/exec"
next:
  text: "exitIf"
  link: "/en/v1/api/flow/exitIf"
---

# breakIf

The **`breakIf()`** function tests a value with a predicate and breaks the current flow branch when the predicate returns `true`. If the predicate fails, the value is returned and the flow continues.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/breakIf/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function breakIf<
	GenericValue extends unknown
>(
	value: GenericValue,
	thePredicate: (value: GenericValue) => boolean
): Generator<Break<GenericValue>, GenericValue>
```

## Parameters

- `value`: The value to test.
- `thePredicate`: Predicate used to decide whether the current branch must stop.

## Return value

A generator that yields a break effect when the predicate returns `true`, otherwise returns the original value.

## See also

- [`exitIf`](/en/v1/api/flow/exitIf) - Exits the whole running flow instead of only breaking locally
- [`run`](/en/v1/api/flow/run) - Executes a flow and handles break effects
