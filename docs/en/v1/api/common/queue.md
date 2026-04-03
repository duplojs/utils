---
outline: [2, 3]
description: "The createQueue() function creates a FIFO queue that limits how many tasks run in parallel and exposes their results through promises."
prev:
  text: "promiseObject"
  link: "/en/v1/api/common/promiseObject"
next:
  text: "asyncRetry"
  link: "/en/v1/api/common/asyncRetry"
---

# queue

The **`createQueue()`** function creates a FIFO queue that limits how many tasks run in parallel and exposes their results through promises.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/queue/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
interface Queue {
	add<GenericOutput extends unknown>(
		theFunction: () => GenericOutput
	): Promise<
		| Awaited<GenericOutput>
		| DEither.Left<"execution-error", unknown>
	>;
	addExternal(): Promise<() => void>;
}

interface CreateQueueParams {
	concurrency?: number;
}

function createQueue(
	params?: CreateQueueParams
): Queue;
```

## Parameters

- `params.concurrency` : Maximum number of tasks executed in parallel. Values lower than `1` fall back to `1`.

## Return value

A `Queue` object with:
- `add` : adds a task to the queue and returns a promise resolved with its result or with `DEither.left("execution-error", error)` when execution fails.
- `addExternal` : reserves one execution slot and returns a `release` function to free that slot later.

## See also

- [`externalPromise`](/en/v1/api/common/externalPromise) - Creates a promise controllable from the outside
- [`callThen`](/en/v1/api/common/callThen) - Normalizes sync and async value handling
- [`asyncRetry`](/en/v1/api/common/asyncRetry) - Retries an async operation with a retry strategy
