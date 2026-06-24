Creates a constrained value from an unknown input and throws on error.

Throws `CreateConstraintsSetError` with the received data, the `dataParserError`, and the resolved `constraintName`. If primitive parsing fails before a constraint checker is responsible, `constraintName` falls back to the first constraint name in the set.

```ts
{@include clean/createConstraintsSet/example.ts[22,22]}
```
