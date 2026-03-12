The createEnum() function creates an immutable, typed string enum. The returned object exposes each value as a key, plus `toTuple()`, `has()`, and `contract()`.

Supported call style:
- Classic: `createEnum(values)` -> returns an enum object

Behavior:
- each string value is exposed as both key and value
- `toTuple()` returns the original tuple
- `has(value)` narrows a string to the enum union
- `contract<...>()` validates that the enum matches an expected union at type level
- the input tuple is not mutated

```ts
{@include common/createEnum/example.ts[3,27]}
```

@see https://utils.duplojs.dev/en/v1/api/common/createEnum
