---
outline: [2, 3]
description: "Ignores or defers runs that happen too close together for the same flow."
prev:
  text: "queue"
  link: "/en/v1/api/flow/queue"
next:
  text: "breakIf"
  link: "/en/v1/api/flow/breakIf"
---

# throttling

The **`throttling()`** function prevents multiple runs of the same flow from happening too close together. It can either return a fallback value immediately or keep only the last skipped call with `keepLast: true`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/throttling/tryout.doc.ts"
  majorVersion="v1"
  height="418px"
/>

## Syntax

```typescript
function throttling<
	GenericValue extends unknown = undefined,
	GenericKeepLast extends boolean = false
>(
	time: number,
	params?: {
		returnValue?: GenericValue;
		keepLast?: GenericKeepLast;
	}
): Generator | AsyncGenerator
```

## Parameters

- `time`: Minimum time window between two runs of the same flow.
- `params.returnValue`: Value returned when a run is skipped during the throttling window.
- `params.keepLast`: When set to `true`, only the last skipped call is replayed after the wait.

## Return value

By default, `throttling()` returns a synchronous generator. With `keepLast: true`, it returns an async generator that waits before resuming the last preserved call.

## Notes

- Internal state is stored in a `WeakMap` keyed by the executed flow reference.
- To share the same throttling window across calls, reuse the same flow created with `F.create(...)` or the same function returned by `F.toFunction(...)`.
- An inline `F.run(function *() { ... })` does not share that window with later calls.
- If the same execution yields `throttling(...)` multiple times, only the first encountered effect is applied by the runner.

## See also

- [`queue`](/en/v1/api/flow/queue) - Serializes runs instead of skipping them
- [`calledByNext`](/en/v1/api/flow/calledByNext) - Triggers a callback when a later run replaces the current one
- [`run`](/en/v1/api/flow/run) - Executes the flow and applies throttling effects
