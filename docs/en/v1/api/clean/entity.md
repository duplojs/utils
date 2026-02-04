---
outline: [2, 3]
description: "An entity represents a business data structure, composed of several properties. Each property is typed via a NewType."
prev:
  text: "NewType"
  link: "/en/v1/api/clean/newType"
next:
  text: "unwrapEntity"
  link: "/en/v1/api/clean/unwrapEntity"
---

# Entities

An entity represents a business data structure, composed of several properties. Each property is typed via a `NewType`.

## Example

<MonacoTSEditor
  src="/examples/v1/api/clean/entity/tryout.doc.ts"
  majorVersion="v1"
  height="680px"
/>

:::info
In general, it is preferable to define a `create()` function rather than using the `new()` function to prevent default value cases.
:::

## How it works

`C.createEntity(...)` returns an **entity handler**.

This handler gives you two ways to build an entity:

- `map(...)` / `mapOrThrow(...)`: from raw properties (e.g. HTTP payload, DB, etc.). Values go through the `DataParser` of each `NewType` and the associated constraints.

<MonacoTSEditor
  src="/examples/v1/api/clean/entity/second.doc.ts"
  majorVersion="v1"
  height="350px"
  :foldLines="[2]"
/>

- `new(...)`: from already typed properties (useful when you are already in business code).

The created entity can then be identified with `is(...)` (type guard), which makes narrowing in unions easier.

## Define properties

Property definition is done via a callback: you return an object where each key is a business property, and each value is a `NewTypeHandler` (or an advanced definition).

The callback receives `params`, which exposes helpers to enrich the definition:

### `nullable(definition)`

Allows `null` on a property.

### `array(definition, { min?, max? })`

Declares a property as an array, with optional min/max (runtime validation + typing).

### `union(...definitions)`

Declares a union of several `NewTypeHandler` for the same property.

These helpers are combinable (e.g. `nullable(array(...))`), and they serve both runtime (validation) and typing.

## Methods and Properties

An `EntityHandler` exposes:

### Methods

#### `new()`

Builds the entity from already typed properties.

```typescript
function new(
	properties: Properties
): Entity<EntityName> & Properties
```

#### `map()`

Validates and transforms raw properties into typed properties, then builds the entity.

```typescript
function map(
	rawProperties: PropertiesToMapOfEntity
): Right<Entity<EntityName> & Properties> | Left<DP.DataParserError>
```

`rawProperties` is intentionally permissive: some constraints (for example `array(..., { min })`) are enforced at validation time.

#### `mapOrThrow()`

```typescript
function mapOrThrow(
	rawProperties: PropertiesToMapOfEntity
): Entity<EntityName> & Properties
```

Throws `C.CreateEntityError` if validation fails.

#### `is()`

```typescript
function is(
	value: unknown
): value is Entity<EntityName>
```

#### `update()`

Updates an existing entity by merging typed properties.

```typescript
function update(
	entity: Entity<EntityName>,
	properties: Partial<Properties>
): Entity<EntityName> & Properties
```

### Properties

#### `name`

The unique name of the entity (e.g. `"User"`), used as a runtime identifier.

#### `propertiesDefinition`

The properties definition (as declared in `createEntity`).

#### `mapDataParser`

The `DataParser` generated from `propertiesDefinition` (handy if you want to reuse validation/transform elsewhere). It accepts `unknown` input and produces typed entity properties.

## Get the type

To retrieve the type of the generated entity:

```typescript
type User = C.GetEntity<typeof User>;
```

## See also

- [`newType`](/en/v1/api/clean/newType)
- [`unwrapEntity`](/en/v1/api/clean/unwrapEntity)
- [`flag`](/en/v1/api/clean/flag)
