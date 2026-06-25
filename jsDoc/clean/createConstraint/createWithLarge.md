Creates a constrained value from the handler's wider input type and returns an Either.

This is useful when the output type is refined, but the source data is only known as the primitive input type.

```ts
{@include clean/createConstraint/example.ts[31,33]}
```
