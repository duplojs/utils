The truthy() function is a type guard that keeps only truthy values (false, 0, "", null, undefined are excluded).

Signature: `truthy(input)` → returns a value

Acts as a type guard and narrows the input type when true.

```ts
{@include common/truthy/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/common/truthy
