Throttles repeated runs of the same flow and can return a fallback value when a run happens too early.

**Supported call styles:**
- Classic: `throttling(time)` -> yields a throttling effect
- Classic with options: `throttling(time, params)` -> yields a throttling effect with a fallback return value and optional `keepLast`

`throttling` lets the runner decide whether the current run should continue or stop early depending on the previous execution time of the same flow.
When a run happens inside the throttling window, the runner can return `params.returnValue`.
With `keepLast: true`, the runner keeps the last skipped async run and resumes it after the delay.

```ts
{@include flow/throttling/example.ts[3,31]}
```

@remarks
- `keepLast: true` changes the helper to an async generator because the runner may resume the latest skipped run later
- Throttling state is attached to the flow reference, so examples should reuse the same created flow or wrapped function

@see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For the throttling behavior implemented by the runner
@see https://utils.duplojs.dev/en/v1/api/flow/throttling

@namespace F
