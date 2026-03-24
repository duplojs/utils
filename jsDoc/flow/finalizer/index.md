Registers a final callback handled by the flow runner.

**Supported call styles:**
- Classic: `finalizer(theFunction)` -> yields a finalizer effect

`finalizer` registers logic that is executed by the flow runner when the flow completes.
It is useful for cleanup or post-processing that should stay inside the flow effect system.
Use it inside `F.run(...)` or inside subflows executed by `F.exec(...)`.

```ts
{@include flow/finalizer/example.ts[3,25]}
```

@remarks
- Finalizers are collected by the flow runner and executed after the flow ends

@see [`F.defer`](https://utils.duplojs.dev/en/v1/api/flow/defer) For another cleanup-oriented effect
@see https://utils.duplojs.dev/en/v1/api/flow/finalizer

@namespace F
