Runs a flow and resolves its final result.

**Supported call styles:**
- Classic with a flow function: `run(theFlow, params?)` -> executes the provided flow function
- Classic with a flow instance: `run(theFlow, params?)` -> executes a flow created with `F.create(...)`

`run` is the entry point of the flow system.
It executes synchronous or asynchronous flows, handles break and exit effects, collects steps when `includeDetails` is enabled, runs deferred and finalizer callbacks, and injects declared dependencies.
Use `run` to start a top-level flow and get its final value.

```ts
{@include flow/run/example.ts[4,29]}
```

@remarks
- `run` returns a `Promise` when the executed flow is asynchronous

@see [`F.exec`](https://utils.duplojs.dev/en/v1/api/flow/exec) To run a nested flow from inside another flow
@see https://utils.duplojs.dev/en/v1/api/flow/run

@namespace F
