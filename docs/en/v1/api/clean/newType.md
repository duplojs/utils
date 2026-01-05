---
outline: [2, 3]
description: "A NewType is a type designed to meet business requirements, while being based on an existing primitive type (or data structure). It allows you to add constraints and specific rules, ensuring that values satisfy the conditions defined by the business."
prev:
  text: "Constraints"
  link: "/en/v1/api/clean/constraints"
next:
  text: "Entities"
  link: "/en/v1/api/clean/entity"
---

# NewType

A `NewType` is a type designed to meet business requirements, while being based on an existing primitive type (or data structure). It allows you to add constraints and specific rules, ensuring that values satisfy the conditions defined by the business.

## Example

<MonacoTSEditor
  src="/examples/v1/api/clean/newType/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## How it works

A `NewType` is a typed wrapper that:

- validates an input via a `DataParser` (`DP.string()`, `DP.number()`, etc.)
- optionally applies one or more [constraints](/en/v1/api/clean/constraints)
- “brands” the value with a name (e.g. `"userId"`) to avoid accidental mix-ups

You declare a `NewType` via `C.createNewType(...)`, which returns a **handler**. This handler is then used to create safe values at runtime, while keeping precise typing on the TypeScript side.

## Create a `NewType`

Creating a `NewType` means defining:
- a name (e.g. `"userId"`)
- a `DataParser` (e.g. `DP.number()`)
- optional constraints (e.g. `C.Positive`, `C.Email`, ...)

To retrieve the type of the generated `NewType`, use:

```typescript
type UserId = C.GetNewType<typeof UserId>;
```

## Methods and Properties

A `NewTypeHandler` exposes the same creation/validation methods as other Clean handlers, as well as a few properties.

### Methods

#### `create()`

```typescript
function create(
	value: RawType | Primitive<RawType>
): EitherRight<NewType<NewTypeName, RawType, ConstraintName>> | EitherLeft<DP.DataParserError>
```

#### `createOrThrow()`

```typescript
function createOrThrow(
	value: RawType | Primitive<RawType>
): NewType<NewTypeName, RawType, ConstraintName>
```

Throws `C.CreateNewTypeError` if validation fails.

#### `createWithUnknown()`

```typescript
function createWithUnknown(
	value: unknown
): EitherRight<NewType<NewTypeName, RawType, ConstraintName>> | EitherLeft<DP.DataParserError>
```

#### `createWithUnknownOrThrow()`

```typescript
function createWithUnknownOrThrow(
	value: unknown
): NewType<NewTypeName, RawType, ConstraintName>
```

Throws `C.CreateNewTypeError` if validation fails.

#### `is()`

```typescript
function is(
	value: unknown
): value is NewType<NewTypeName, RawType, ConstraintName>
```

### Properties

#### `name`

The unique name of the `NewType` (e.g. `"userId"`).

#### `dataParser`

The `DataParser` used to validate the data (including checkers added by constraints).

#### `constrains`

The list of constraints applied to the `NewType`.

## See also

- [Primitives](/en/v1/api/clean/primitives/)
- [Constraints](/en/v1/api/clean/constraints)
- [Entities](/en/v1/api/clean/entity)
