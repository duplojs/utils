---
outline: [2, 3]
description: "Registers a final callback handled by the flow runner."
prev:
  text: "defer"
  link: "/en/v1/api/flow/defer"
next:
  text: "createDependence"
  link: "/en/v1/api/flow/createDependence"
---

# finalizer

The **`finalizer()`** function registers a final callback collected by the flow runner. It is designed for end-of-flow logic that should stay inside the flow effect system.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/finalizer/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

```typescript
function finalizer<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): Generator<Finalizer<GenericOutput>, undefined>
```

## Parameters

- `theFunction`: Callback collected by the runner and executed when the flow finishes.

## Return value

A generator yielding a finalizer effect. The callback result is handled by the runner, not by the flow body.

## See also

- [`defer`](/en/v1/api/flow/defer) - Registers a cleanup callback
- [`run`](/en/v1/api/flow/run) - Collects and executes finalizers
