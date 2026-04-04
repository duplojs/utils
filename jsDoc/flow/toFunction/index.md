Converts a flow into a plain callable function that delegates to `F.run(...)`.

**Supported call styles:**
- Classic with a flow function: `toFunction(flow, params?)` -> returns a callable function
- Classic with a flow instance: `toFunction(flow, params?)` -> returns a callable function

`toFunction` wraps a flow function or a flow created with `F.create(...)` and returns a regular function that accepts only the flow input.
The provided options are forwarded to `F.run(...)`, which means you can preconfigure `includeDetails` and `dependencies`.
Use it when a flow should be exposed as a reusable application function instead of being run manually each time.

```ts
{@include flow/toFunction/example.ts[3,23]}
```

@remarks
- `toFunction` keeps the same sync or async return shape as `F.run(...)` for the wrapped flow

@see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For the execution behavior used internally
@see https://utils.duplojs.dev/en/v1/api/flow/toFunction

@namespace F
