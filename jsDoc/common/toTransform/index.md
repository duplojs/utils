The toTransform() function recursively applies objects' toTransform methods and traverses arrays/tuples to produce a value ready to be transported (DTO).

Signature: `toTransform(value)` → returns a value

The input value is not mutated.

```ts
{@include common/toTransform/example.ts[3,28]}
```

@see https://utils.duplojs.dev/en/v1/api/common/toTransform
