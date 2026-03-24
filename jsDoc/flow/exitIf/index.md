Exits a flow when a predicate matches a value.

**Supported call styles:**
- Classic boolean predicate: `exitIf(value, thePredicate)` -> yields an exit effect or returns the value
- Classic predicate overload: `exitIf(value, thePredicate)` -> narrows the matched value type before exiting

`exitIf` is designed to be used inside `F.run(...)` or a nested flow executed by `F.exec(...)`.
When the predicate returns `true`, the current flow exits with the provided value.
When the predicate returns `false`, the original value is returned and the flow continues normally.
Because the exit effect is forwarded through nested `exec(...)` calls, it can stop a deeply nested flow from any depth.

```ts
{@include flow/exitIf/example.ts[3,41]}
```

@remarks
- Use `exitIf` when the whole running flow should stop with a value

@see [`F.breakIf`](https://utils.duplojs.dev/en/v1/api/flow/breakIf) To stop only the current local flow branch
@see https://utils.duplojs.dev/en/v1/api/flow/exitIf

@namespace F
