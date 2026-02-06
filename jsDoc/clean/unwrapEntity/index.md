Unwraps a `Clean` entity into a readonly plain object.

Signature: `unwrapEntity(entity, params?)` → unwrapped object

By default, wrapped values are unwrapped as-is. You can pass a transformer (for example `toNative` or `toJSON`) to project values during unwrapping.

```ts
{@include clean/unwrapEntity/example.ts[3,29]}
```

@remarks
- The result always contains `_entityName`.
- If the entity has flags, `_flags` is also included.

@see https://utils.duplojs.dev/en/v1/api/clean/unwrapEntity

@namespace C
