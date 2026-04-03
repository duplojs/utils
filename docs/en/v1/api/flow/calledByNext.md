---
outline: [2, 3]
description: "Registers a callback executed when the same flow is called again before the previous execution finishes."
prev:
  text: "exec"
  link: "/en/v1/api/flow/exec"
next:
  text: "queue"
  link: "/en/v1/api/flow/queue"
---

# calledByNext

The **`calledByNext()`** function registers a callback executed when a new run of the same flow replaces a previous asynchronous run that is still active. A common use case is aborting a previous `fetch` with `AbortController`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/calledByNext/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntax

```typescript
function calledByNext<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): AsyncGenerator
```

## Parameters

- `theFunction`: Callback called when a later run of the same flow arrives before the current run finishes.

## Return value

An async generator yielding a `calledByNext` effect. The callback return value is not returned by the flow.

## Notes

- Internal state is stored in a `WeakMap` keyed by the executed flow reference.
- To share this behavior across calls, reuse the same flow created with `F.create(...)` or the same function returned by `F.toFunction(...)`.
- An inline `F.run(async function *() { ... })` creates a new reference on every call, so it does not share the `calledByNext()` state.

## See also

- [`queue`](/en/v1/api/flow/queue) - Serializes or limits concurrent runs of the same flow
- [`throttling`](/en/v1/api/flow/throttling) - Ignores or defers runs that happen too close together
- [`exec`](/en/v1/api/flow/exec) - Executes a nested flow inside the current flow
