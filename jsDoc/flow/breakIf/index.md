Breaks a flow when a predicate matches a value.

**Supported call styles:**
- Classic boolean predicate: `breakIf(value, thePredicate)` -> yields a break effect or returns the value
- Classic predicate overload: `breakIf(value, thePredicate)` -> narrows the matched value type before breaking

`breakIf` is designed to be used inside `F.run(...)` or a nested flow executed by `F.exec(...)`.
When the predicate returns `true`, the current flow stops with the provided value as a break result.
When the predicate returns `false`, the original value is returned and the flow continues normally.

```ts
{@include flow/breakIf/example.ts[3,25]}
```

@remarks
- Use `breakIf` to stop the current flow without exiting outer flows

@see [`F.exitIf`](https://utils.duplojs.dev/en/v1/api/flow/exitIf) To exit a flow instead of breaking it
@see https://utils.duplojs.dev/en/v1/api/flow/breakIf

@namespace F
