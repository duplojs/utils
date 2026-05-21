Declares a typed aggregate of pure linked business actions that must run in order.

**Supported call styles:**
- Classic: `chainedFunction(firstFunction, secondFunction, ...functions)` -> returns an implementation function driven by generator links

Use it inside a Clean Architecture use case when several pure domain operations that update different entities must belong to the same business consistency boundary. Each link exposes exactly one named action, yields `Left` values to short-circuit the implementation, and provides the next link until the last step returns `chainEnd(value)`. Repository calls stay in the use case through the library repository system; functions passed to `chainedFunction` remain pure domain functions.

You can also declare typed `requirements` on a link (`C.chainedFunction.requirements<[...args]>()`). These values are mandatory when calling that link, not to feed runtime computation directly, but to prove that prerequisite lifecycle information was obtained earlier in the flow.

```ts
{@include clean/chainedFunction/example.ts[31,145]}
```

@remarks `chainedFunction` expects at least two functions in the chain. It does not catch thrown exceptions or rejected promises; model handled business errors with `Either.Left`.
The callback receives `(firstLink, { breakIfLeft })`. `breakIfLeft` is synchronous and narrows `value | Left` to `value`, yielding the `Left` branch to short-circuit when needed.
`requirements` act as compile-time guards for flow invariants: they can enforce that a step cannot run unless specific typed markers are provided, even when those markers are not useful as runtime arguments for the next function.

@see https://utils.duplojs.dev/en/v1/api/clean/chainedFunction
@see [`C.createUseCase`](https://utils.duplojs.dev/en/v1/api/clean/useCase)
@see [`E.Left`](https://utils.duplojs.dev/en/v1/api/either/left)

@namespace C
