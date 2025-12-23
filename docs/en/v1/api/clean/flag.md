---
outline: [2, 3]
prev:
  text: "Entities"
  link: "/en/v1/api/clean/entity"
next:
  text: "Repository"
  link: "/en/v1/api/clean/repository"
---

# Flag

A `flag` lets you add a marker on an entity after its creation.
Its purpose is to indicate that a verification has taken place, or that a particular operation has been performed, without modifying the structure of the entity.

## Example

<MonacoTSEditor
  src="/examples/v1/api/clean/flag/tryout.doc.ts"
  majorVersion="v1"
  height="1200px"
/>

## How it works

`C.createFlag(...)` returns a **flag handler**. This handler allows:

- adding the flag to an entity via `append(...)`
- retrieving the associated value (optional) via `getValue(...)`

Once the flag is added, the entity typing is enriched: you can require `Entity & MyFlag` in a function, to ensure that a business step has indeed been performed.

## Create a `flag`

Creating a flag means defining:
- which entity it applies to
- its name (key stored on the entity)
- an optional value associated with the flag (useful to carry a computed piece of data)

## Methods and Properties

A `FlagHandler` exposes:

### Methods

#### `append()`

Adds the flag to the entity and returns an entity enriched with the flag type.

```typescript
function append(
	entity: Entity
): Entity & Flag<FlagName>
```

If the flag carries a value, `append` also expects this value:

```typescript
function append(
	entity: Entity,
	value: FlagValue
): Entity & Flag<FlagName, FlagValue>
```

#### `getValue()`

Retrieves the value associated with the flag.

```typescript
function getValue(
	entity: Entity & Flag<FlagName, FlagValue>
): FlagValue
```

### Properties

#### `name`

The unique name of the flag (the key stored on the entity).

## Get the type

```typescript
type MajorFlag = C.GetFlag<typeof MajorFlag>;
```

## See also

- [`entity`](/en/v1/api/clean/entity)
- [`newType`](/en/v1/api/clean/newType)
