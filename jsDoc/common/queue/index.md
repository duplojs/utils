The createQueue() function creates a FIFO queue object that limits how many tasks run at the same time and resolves each task result as a promise.

Supported call styles:
- Classic: `createQueue()` → returns a queue object
- Classic with options: `createQueue({ concurrency })` → returns a queue object

Behavior:
- `queue.add(callback)` starts the callback immediately when a slot is available, otherwise it enqueues it
- task results are always exposed through a promise
- thrown errors and rejected promises are converted to `DEither.left("execution-error", error)`
- `queue.addExternal()` reserves one slot and resolves with a release function

```ts
{@include common/queue/example.ts[3,18]}
```

@see https://utils.duplojs.dev/en/v1/api/common/queue
