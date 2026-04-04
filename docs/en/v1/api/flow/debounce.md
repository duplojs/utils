---
outline: [2, 3]
description: "Delays a flow execution and cancels the previous run when a new one arrives before the delay ends."
prev:
  text: "throttling"
  link: "/en/v1/api/flow/throttling"
next:
  text: "breakIf"
  link: "/en/v1/api/flow/breakIf"
---

# debounce

The **`debounce()`** function delays a flow execution. If a new run of the same flow arrives before the delay ends, the previous run is cancelled and returns `params.returnValue`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/debounce/tryout.doc.ts"
  majorVersion="v1"
  height="418px"
/>

## Syntax

```typescript
function debounce<
	GenericValue extends unknown = undefined
>(
	time: number,
	params?: {
		returnValue?: GenericValue;
	}
): AsyncGenerator
```

## Parameters

- `time`: Delay to wait before allowing the current execution to continue.
- `params.returnValue`: Value returned when a previous run is replaced during the debounce delay.

## Return value

`debounce()` returns an async generator. The runner waits for the delay before continuing the last preserved run, and completes replaced runs with `params.returnValue`.

## Notes

- Internal state is stored in a `WeakMap` keyed by the executed flow reference.
- To share the same debounce window across calls, reuse the same flow created with `F.create(...)` or the same function returned by `F.toFunction(...)`.
- An inline `F.run(async function *() { ... })` creates a new reference on every call, so it does not share the `debounce()` state.
- If the same execution yields `debounce(...)` multiple times, only the first encountered effect is applied by the runner.

## See also

- [`throttling`](/en/v1/api/flow/throttling) - Ignores or defers runs that happen too close together without waiting for the latest run
- [`queue`](/en/v1/api/flow/queue) - Serializes runs instead of cancelling the previous one
- [`run`](/en/v1/api/flow/run) - Executes the flow and applies debounce effects
