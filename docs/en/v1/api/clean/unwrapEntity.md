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

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/unwrapEntity/tryout.doc.ts"
  majorVersion="v1"
  height="480px"
  :foldLines="[3]"
/>

## Syntax

### Classic signature

```typescript
function unwrapEntity(
	entity: Entity
): UnwrapEntity<Entity>
```

## Parameters

- `entity`: The entity to unwrap.

## Return value

A plain object containing raw properties, plus `_entityName` and `_flags` when present.

## Utility type

```typescript
type UnwrappedUser = C.UnwrapEntity<User>;
```

## See also

- [`entity`](/en/v1/api/clean/entity)
- [`maybe`](/en/v1/api/clean/maybe)
- [`flag`](/en/v1/api/clean/flag)
