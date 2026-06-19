---
outline: [2, 3]
description: "A flag describes a business state of an entity and builds precise type contracts without multiplying variations of that entity."
prev:
  text: "Maybe"
  link: "/en/v1/api/clean/maybe"
next:
  text: "Evidence"
  link: "/en/v1/api/clean/evidence"
---

# Flag

A `flag` describes a **business state** of an entity. This state can be acquired after a validation or an operation, and can carry its own data.

A function can then require precisely `Entity & MyFlag` instead of a plain `Entity`. The type guarantees that the function receives an entity in the expected state.

Flags avoid creating a new entity variation for every state, such as `MajorUserEntity`, and then duplicating its repositories, mappers, and other related functions. A single entity can accumulate several independent states while retaining its existing structure and ecosystem.

## Example

<MonacoTSEditor
  src="/examples/v1/api/clean/flag/tryout.doc.ts"
  majorVersion="v1"
  height="1279px"
/>

## How it works

`C.createFlag(...)` returns a **flag handler**. This handler allows:

- adding the flag to an entity via `append(...)`
- retrieving the associated value (optional) via `getValue(...)`
- checking if the flag is present via `has(...)`

`append(...)` returns the entity enriched with the flag type. Its business properties remain unchanged, but the new state is now part of the type contract. Several flags can be combined on the same entity to express a contract as precisely as needed.

In the example, `drinkAlcohol` only accepts a `User.Entity & User.MajorFlag`. There is no need to declare a second entity dedicated to adult users or copy the code that already handles `User.Entity`.

## Create a `flag`

Creating a flag means defining:

- the entity to which this state can apply;
- the state's unique name;
- optionally, the data associated with this state.

The optional value preserves the result that justifies or characterizes the state. In the example, `MajorFlag` carries the age that was validated when the user entered the adult state in the type contract.

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

#### `has()`

Checks whether the flag is present on the entity. This method is a TypeScript predicate: when it returns `true`, the entity type is narrowed with the flag.

```typescript
function has(
	entity: Entity
): boolean
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
