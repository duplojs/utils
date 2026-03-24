Creates a typed dependency handler for the flow system.

**Supported call styles:**
- Classic: `createDependence(name)` -> returns a typed dependence handler definition

`createDependence` creates a dependency descriptor identified by a string name.
The returned handler is used with `inject(...)` and lets `run(...)` or `exec(...)` map a dependency bag to strongly typed values.
At runtime, the handler also behaves like an identity function for the injected implementation.

```ts
{@include flow/createDependence/example.ts[3,23]}
```

@remarks
- Use the returned dependence handler together with `inject(...)`

@see [`F.inject`](https://utils.duplojs.dev/en/v1/api/flow/inject) To request the dependency inside a flow
@see https://utils.duplojs.dev/en/v1/api/flow/createDependence

@namespace F
