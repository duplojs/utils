Creates a constrained value from an unknown input and returns an Either.

On error, returns `Left<"createConstraintsSetError", ConstraintError<...>>`. The `constraintName` is resolved from the failing checker; if primitive parsing fails before a constraint checker is responsible, it falls back to the first constraint name in the set.

```ts
{@include clean/createConstraintsSet/example.ts[20,21]}
```
