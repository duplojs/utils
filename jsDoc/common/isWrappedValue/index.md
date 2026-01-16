The isWrappedValue() function is a type guard that checks whether a value is a WrappedValue created via wrapValue/toWrappedValue.

Signature: `isWrappedValue(input)` → returns a value

Acts as a type guard and narrows the input type when true.

```ts
{@include common/isWrappedValue/example.ts[3,7]}
```

@see https://utils.duplojs.dev/en/v1/api/common/isWrappedValue
