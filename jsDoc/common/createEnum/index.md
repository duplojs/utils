The createEnum() function creates an immutable, typed string enum. The returned object exposes the keys/values, the has method, and toTuple.

Signature: `createEnum(values)` → returns a value

The input value is not mutated.

```ts
{@include common/createEnum/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/common/createEnum
