---
outline: [2, 3]
description: "Creates a reusable flow object from a flow function."
prev:
  text: "Flow"
  link: "/en/v1/api/flow/"
next:
  text: "run"
  link: "/en/v1/api/flow/run"
---

# create

The **`create()`** function wraps a generator-based flow function into a reusable flow object that can later be executed with `F.run()` or composed with `F.exec()`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/create/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function create<
	GenericTheFlowFunction extends TheFlowFunction
>(
	theFunction: GenericTheFlowFunction
): TheFlow<GenericTheFlowFunction>
```

## Parameters

- `theFunction`: The generator or async generator function that defines the flow.

## Return value

A flow object that stores the provided function and can be executed many times with `F.run()` or `F.exec()`.

## See also

- [`run`](/en/v1/api/flow/run) - Executes a created flow
- [`exec`](/en/v1/api/flow/exec) - Executes a created flow inside another flow
