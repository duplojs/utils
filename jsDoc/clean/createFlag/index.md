Creates a flag handler that can attach typed metadata to an entity.

**Supported call styles:**
- Classic: `createFlag(name)` -> returns a handler

Flags let you mark an entity after creation without changing its shape. The mark can optionally carry a value.

```ts
{@include clean/createFlag/example.ts[3,54]}
```

@remarks
A flag lets you add a marker on an entity after its creation. Its purpose is to indicate that a verification has taken place, or that a particular operation has been performed, without modifying the structure of the entity. If the flag carries a value, `append` requires it and `getValue` retrieves it.

@see https://utils.duplojs.dev/en/v1/api/clean/flag

@namespace C
