The toWrappedValue() function ensures a value is wrapped: if it is already a WrappedValue, it is returned as is, otherwise it is wrapped.

Signature: `toWrappedValue(value)` → returns a value

The input value is not mutated.

```ts
{@include common/toWrappedValue/example.ts[3,9]}
```

@see https://utils.duplojs.dev/en/v1/api/common/toWrappedValue
