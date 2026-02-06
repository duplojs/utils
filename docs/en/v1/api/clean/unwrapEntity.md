---
outline: [2, 3]
prev:
  text: "Entities"
  link: "/en/v1/api/clean/entity"
next:
  text: "Maybe"
  link: "/en/v1/api/clean/maybe"
description: "Unwraps an entity into a plain object and exposes its metadata."
---

# unwrapEntity

`unwrapEntity` turns an entity into a plain object by unwrapping `NewType` values and exposing its metadata.
By default, values are unwrapped as-is. You can provide a `transformer` (for example `toNative` or `toJSON`) to project values during unwrapping.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/unwrapEntity/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
  :foldLines="[3]"
/>

## Syntax

### Classic signature

```typescript
function unwrapEntity(
	entity: Entity,
	params?: { transformer?: TransformerFunction }
): UnwrapEntity<Entity, TransformerFunction>
```

## Parameters

- `entity`: The entity to unwrap.
- `params`: Optional parameters.
- `params.transformer`: Transformer applied to each unwrapped value.

## Return value

A readonly object containing unwrapped properties, plus `_entityName` and `_flags` when present.

## Utility type

```typescript
type UnwrappedUser = C.UnwrapEntity<UserEntity>;
type UnwrappedUserJSON = C.UnwrapEntity<UserEntity, TransformerFunction<"toJSON">>;
```

## See also

- [`entity`](/en/v1/api/clean/entity)
- [`maybe`](/en/v1/api/clean/maybe)
- [`flag`](/en/v1/api/clean/flag)
