Registers a cleanup callback that runs when the flow finishes.

**Supported call styles:**
- Classic: `defer(theFunction)` -> yields a defer effect

`defer` stores a callback that is executed after the flow has completed.
It is useful for releasing resources, closing handles, or running cleanup logic after a `break` or a normal return.
Use it inside `F.run(...)` or inside subflows executed by `F.exec(...)`.

```ts
{@include flow/defer/example.ts[3,25]}
```

@remarks
- Deferred callbacks run after the flow result has been computed

@see [`F.finalizer`](https://utils.duplojs.dev/en/v1/api/flow/finalizer) To register final logic in the same flow system
@see https://utils.duplojs.dev/en/v1/api/flow/defer

@namespace F
