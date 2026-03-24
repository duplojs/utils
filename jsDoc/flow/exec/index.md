Executes a nested flow inside the current flow.

**Supported call styles:**
- Classic with a flow function: `exec(theFlow, params?)` -> runs the provided flow function
- Classic with a flow instance: `exec(theFlow, params?)` -> runs a flow created with `F.create(...)`
- Classic with a generator: `exec(theGenerator, params?)` -> runs an existing generator directly

`exec` lets a parent flow call another flow while staying in the same execution model.
Break values are converted into the local return value of `exec`, while exit, step, injection, and finalizer effects are forwarded to the outer flow.
It can be used in synchronous and asynchronous flows.

```ts
{@include flow/exec/example.ts[3,38]}
```

@remarks
- `exec` is useful for composing small flows into larger ones

@see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) To execute the root flow
@see https://utils.duplojs.dev/en/v1/api/flow/exec

@namespace F
