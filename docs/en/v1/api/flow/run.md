---
outline: [2, 3]
description: "Executes a flow and returns its final value."
prev:
  text: "create"
  link: "/en/v1/api/flow/create"
next:
  text: "exec"
  link: "/en/v1/api/flow/exec"
---

# run

The **`run()`** function is the entry point of the flow system. It executes a synchronous or asynchronous flow, handles effects such as breaks, exits, finalizers, steps, and injections, then returns the final value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/run/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

```typescript
function run<
	GenericFlow extends TheFlowFunction | TheFlow
>(
	theFlow: GenericFlow,
	params?: {
		input?: unknown;
		includeDetails?: boolean;
		dependencies?: Record<string, unknown>;
	}
): unknown
```

## Parameters

- `theFlow`: The flow function or created flow to execute.
- `params.input`: Optional input passed to the flow.
- `params.includeDetails`: When `true`, returns an object with the final result and collected step names.
- `params.dependencies`: Dependency bag used to satisfy `F.inject()` requests.

## Return value

The final flow result, or a `Promise` when the executed flow is asynchronous. When `includeDetails` is enabled, the return value becomes `{ result, steps }`.

## See also

- [`create`](/en/v1/api/flow/create) - Creates a reusable flow
- [`exec`](/en/v1/api/flow/exec) - Executes a nested flow from inside another flow
- [`inject`](/en/v1/api/flow/inject) - Requests a dependency from the runner
