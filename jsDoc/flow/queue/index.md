Reserves execution through the async flow queue and returns a resolver that releases the reserved slot.

**Supported call styles:**
- Classic: `queue()` -> yields a queue effect with concurrency `1`
- Classic with options: `queue({ concurrency })` -> yields a queue effect with the provided concurrency

`queue` is an async flow helper consumed by the runner.
It asks the runner to serialize or limit concurrent executions of the same flow.
When the slot is granted, the helper returns a `release` function that should be called once the protected section is finished.

```ts
{@include flow/queue/example.ts[3,20]}
```

@remarks
- `queue` is meaningful only in asynchronous flows handled by `F.run(...)`
- Reuse the same flow reference to share the same queue across runs

@see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For queue-aware execution
@see https://utils.duplojs.dev/en/v1/api/flow/queue

@namespace F
