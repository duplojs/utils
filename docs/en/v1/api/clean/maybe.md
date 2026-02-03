---
outline: [2, 3]
description: "Maybe defines an explicit business contract to represent a present entity (`some`) or an absent one (`none`) without exposing `null`/`undefined` in the domain."
prev:
  text: "unwrapEntity"
  link: "/en/v1/api/clean/unwrapEntity"
next:
  text: "Flag"
  link: "/en/v1/api/clean/flag"
---

# Maybe

`Maybe` defines an explicit business contract to represent a present entity (`some`) or an absent one (`none`) without exposing `null`/`undefined` in the domain.

## Example

<MonacoTSEditor
  src="/examples/v1/api/clean/maybe/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntax

### `Maybe` type

```typescript
type Maybe<Entity extends C.Entity> =
	| C.Some<Entity>
	| C.None<C.GetKindValue<typeof C.entityKind, Entity>>
```

### `some` constructor

```typescript
function some<Entity extends C.Entity>(
	entity: Entity
): C.Some<Entity>
```

### `none` constructor

```typescript
function none<EntityName extends string>(
	entityName: EntityName
): C.None<EntityName>
```

## Parameters

- `entity`: valid business entity to wrap in the "present" branch.
- `entityName`: business entity name used to build the typed "absent" branch.

## Return value

- `some(entity)` returns a `C.Some<Entity>`.
- `none(name)` returns a `C.None<name>`.
- both satisfy the `C.Maybe<Entity>` contract when the entity name matches.

## Why this matters in business code

The `Maybe` type lets you define a use-case contract before implementation details:
- found result is explicitly typed with `some(...)`
- missing result is explicitly typed with `none(...)`
- the domain contract stays readable and stable.

## See also

- [`entity`](/en/v1/api/clean/entity)
- [`unwrapEntity`](/en/v1/api/clean/unwrapEntity)
- [`useCase`](/en/v1/api/clean/useCase)
