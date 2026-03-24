Creates an initializer that returns a value and automatically registers flow cleanup effects.

**Supported call styles:**
- Classic: `createInitializer(initializer, params)` -> returns a function that can be yielded inside a flow

`createInitializer` wraps an initializer function and turns its result into a flow-friendly generator.
Depending on the provided options, it can register a `defer` callback, a `finalizer` callback, or both, using the produced value.
The returned initializer can then be executed inside `F.run(...)` like any other flow generator.

```ts
{@include flow/createInitializer/example.ts[4,42]}
```

@remarks
- `createInitializer` is useful when a setup step should also declare matching cleanup logic

@see [`F.defer`](https://utils.duplojs.dev/en/v1/api/flow/defer) For cleanup callbacks
@see [`F.finalizer`](https://utils.duplojs.dev/en/v1/api/flow/finalizer) For final callbacks
@see https://utils.duplojs.dev/en/v1/api/flow/createInitializer

@namespace F
