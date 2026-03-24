Creates a reusable flow object from a flow function.

**Supported call styles:**
- Classic: `create(theFunction)` -> returns a flow instance that can be passed to `F.run(...)` or `F.exec(...)`

`create` wraps a generator-based flow function into a flow object understood by the flow runtime.
The returned flow can be executed multiple times with different inputs and can be composed with `F.exec(...)`.
Use it to name, share, and reuse flow definitions without executing them immediately.

```ts
{@include flow/create/example.ts[4,34]}
```

@remarks
- `create` does not execute the flow, it only wraps it for later use

@see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) To execute a created flow
@see [`F.exec`](https://utils.duplojs.dev/en/v1/api/flow/exec) To execute a created flow inside another flow
@see https://utils.duplojs.dev/en/v1/api/flow/create

@namespace F
