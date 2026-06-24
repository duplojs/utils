Creates a constrained value and throws on error. Works with raw values or primitives.

Throws `CreateConstraintsSetError` with the received data, the `dataParserError`, and the resolved `constraintName`. If primitive parsing fails before a constraint checker is responsible, `constraintName` falls back to the first constraint name in the set.

```ts
{@include clean/createConstraintsSet/example.ts[14,18]}
```
