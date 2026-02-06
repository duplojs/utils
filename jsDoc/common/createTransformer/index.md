Creates a recursive transformer function based on a method name.

Signature: `createTransformer(methodName)` → `TransformerFunction`

The returned function walks through nested objects and arrays, and calls `methodName()` on values that implement it.

```ts
{@include common/createTransformer/example.ts[3,17]}
```

@remarks
- Two default transformers are provided out of the box: `toNative` and `toJSON`.

@see https://utils.duplojs.dev/en/v1/api/common/createTransformer

@namespace C
