---
outline: [2, 3]
description: "Executes a nested flow inside the current flow."
prev:
  text: "run"
  link: "/en/v1/api/flow/run"
next:
  text: "calledByNext"
  link: "/en/v1/api/flow/calledByNext"
---

# exec

The **`exec()`** function runs a nested flow from inside the current flow. It lets you compose flows while forwarding steps, exits, finalizers, and dependency injection to the outer runner.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/exec/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

```typescript
function exec<
	GenericFlow extends TheFlowFunction | TheFlow | TheFlowGenerator
>(
	theFlow: GenericFlow,
	params?: {
		input?: unknown;
		dependencies?: Record<string, unknown>;
	}
): Generator | AsyncGenerator
```

## Parameters

- `theFlow`: A flow function, a created flow, or an existing generator to execute.
- `params.input`: Optional input passed to the nested flow.
- `params.dependencies`: Optional dependency overrides for the nested execution.

## Return value

A generator compatible with the current flow. When the nested flow breaks, `exec()` returns the break value locally. Other supported effects continue to propagate outward.

## See also

- [`run`](/en/v1/api/flow/run) - Executes the root flow
- [`create`](/en/v1/api/flow/create) - Creates a reusable flow
- [`exitIf`](/en/v1/api/flow/exitIf) - Exits a flow from any nested depth
