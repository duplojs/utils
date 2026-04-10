Adds compatible constraint markers to an already constrained value without re-validating it.

**Supported call styles:**
- Classic: `castConstraint(value, handler)` -> returns a value with added constraints (supports handler arrays)

It returns a new constrained value that carries the same wrapped value and the additional constraint markers. TypeScript prevents invalid casts.

```ts
{@include clean/castConstraint/example.ts[3,19]}
```

@remarks
- The function does not run constraint checkers at runtime.
- Use it to widen constraints you already know are compatible.

@see https://utils.duplojs.dev/en/v1/api/clean/castConstraint

@namespace C
