Creates a constrained value from the set handler's wider input type and throws on error.

This is useful when one of the set constraints refines the output type, but the source data is only known as the primitive input type.

```ts
{@include clean/createConstraintsSet/example.ts[42,42]}
```
