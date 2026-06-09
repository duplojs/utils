---
outline: [2, 3]
description: "A NewType is a type designed to meet business requirements, while being based on an existing primitive type (or data structure). It allows you to add constraints and specific rules, ensuring that values satisfy the conditions defined by the business."
prev:
  text: "toMapDataParser"
  link: "/en/v1/api/clean/toMapDataParser"
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
  height="565px"
  :foldLines="[2, 18]"
/>

## How it works

A `NewType` is a typed wrapper that:

- validates an input via a `DataParser` (`DP.string()`, `DP.number()`, etc.)
- optionally applies one or more [constraints](/en/v1/api/clean/constraints)
- “brands” the value with a name (e.g. `"userId"`) to avoid accidental mix-ups

You declare a `NewType` via `C.createNewType(...)`, which returns a **handler**. This handler is then used to create safe values at runtime, while keeping precise typing on the TypeScript side.

The second argument can be either a `DataParser` or a Clean primitive handler. Passing `C.String`, `C.Number`, `C.Boolean`, `C.BigInt`, `C.Date`, or `C.Time` reuses the DataParser already carried by that primitive handler.

## Create a `NewType`

Creating a `NewType` means defining:
- a name (e.g. `"userId"`)
- a `DataParser` (e.g. `DP.number()`) or a primitive handler (e.g. `C.Number`)
- optional constraints (e.g. `C.Positive`, `C.Email`, ...)

To retrieve the type of the generated `NewType`, use:

```typescript
type UserId = C.GetNewType<typeof UserId>;
```

## Syntax

```typescript
const UserId = C.createNewType(
	"userId",
	DP.number(),
	C.Positive,
);

const UserName = C.createNewType(
	"userName",
	C.String,
	C.StringMin(2),
);
```

Use the `DataParser` overload when the value is based on a parser shape or a custom schema. Use the primitive-handler overload when the `NewType` maps directly to a Clean primitive and should reuse its existing parser.

## Methods and Properties

A `NewTypeHandler` exposes the same creation/validation methods as other Clean handlers, as well as a few properties.

### Methods

#### `create()`

```typescript
function create(
	value: RawType | Primitive<RawType>
): Right<NewType<NewTypeName, RawType, ConstraintName>> | Left<DP.DataParserError>
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
): Right<NewType<NewTypeName, RawType, ConstraintName>> | Left<DP.DataParserError>
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

#### `getConstraint()`

```typescript
function getConstraint(
	name: ConstraintName
): ConstraintHandler<ConstraintName>
```

### Properties

#### `name`

The unique name of the `NewType` (e.g. `"userId"`).

## See also

- [Primitives](/en/v1/api/clean/primitives/)
- [Constraints](/en/v1/api/clean/constraints)
- [Entities](/en/v1/api/clean/entity)
