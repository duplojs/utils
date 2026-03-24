---
outline: [2, 3]
description: "Registers a cleanup callback executed when the flow finishes."
prev:
  text: "exitIf"
  link: "/en/v1/api/flow/exitIf"
next:
  text: "finalizer"
  link: "/en/v1/api/flow/finalizer"
---

# defer

The **`defer()`** function registers a cleanup callback that the flow runtime executes after the flow ends. It is useful to release resources or run side effects after a return or a break.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/defer/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

```typescript
function defer<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): Generator<Defer<GenericOutput>, undefined>
```

## Parameters

- `theFunction`: Cleanup callback to run when the flow finishes.

## Return value

A generator yielding a defer effect. The callback result itself is not returned by the flow.

## See also

- [`finalizer`](/en/v1/api/flow/finalizer) - Registers another end-of-flow callback
- [`run`](/en/v1/api/flow/run) - Executes deferred callbacks when the flow completes
