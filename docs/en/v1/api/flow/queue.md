---
outline: [2, 3]
description: "Reserves a queue slot to serialize or limit concurrent runs of the same flow."
prev:
  text: "calledByNext"
  link: "/en/v1/api/flow/calledByNext"
next:
  text: "throttling"
  link: "/en/v1/api/flow/throttling"
---

# queue

The **`queue()`** function reserves a slot for the current execution so you can serialize or limit concurrent runs of the same flow.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/queue/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntax

```typescript
function queue<
	GenericConcurrency extends number
>(
	params?: {
		concurrency?: GenericConcurrency;
	}
): AsyncGenerator
```

## Parameters

- `params.concurrency`: Maximum number of simultaneous runs allowed for the same flow reference. The default is `1`.

## Return value

An async generator yielding a queue effect and returning a `release` function that must be called when the execution can free its slot, usually from a `finally` block.

## Notes

- Internal state is stored in a `WeakMap` keyed by the executed flow reference.
- To share the same queue across calls, reuse the same flow created with `F.create(...)` or the same function returned by `F.toFunction(...)`.
- If `release()` is never called, later runs remain blocked in the queue.
- If the same execution yields `queue(...)` multiple times, only the first encountered effect is applied by the runner.

## See also

- [`calledByNext`](/en/v1/api/flow/calledByNext) - Calls a callback when a later run replaces the current one
- [`throttling`](/en/v1/api/flow/throttling) - Ignores or defers runs that happen too close together
- [`exec`](/en/v1/api/flow/exec) - Executes a nested flow inside the current flow
