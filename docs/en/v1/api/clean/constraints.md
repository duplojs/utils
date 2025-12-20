---
outline: [2, 3]
prev:
  text: "Primitives"
  link: "/en/v1/api/clean/primitives"
next:
  text: "NewType"
  link: "/en/v1/api/clean/newType"
---

# Constraints

A constraint lets you define a rule that typing alone cannot check. For example, a constraint can verify that a string matches a particular format (email, URL, …), or that a number is within a certain range.
A constraint applies to a [primitive](/en/v1/api/clean/primitives/).

## How it works

A constraint is created from:
- a primitive (e.g. `C.String`, `C.Number`)
- one or more `DDataParser` checkers (`DP.checkerEmail()`, `DP.checkerInt()`, ...)

At runtime, a constraint validates the value, then adds an internal marking (by constraint name).
On the TypeScript side, this marking is reflected in the type: you can then write functions that accept “any value carrying this constraint”, whether it is a constrained primitive or a `NewType` that embeds the same constraint.

## Example

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/tryout.doc.ts"
  majorVersion="v1"
  height="480px"
/>

## Create a constraint

To create a constraint, use `C.createConstraint(name, primitive, checker)` then get its type via `C.GetConstraint`.

This type (e.g. `SlugConstraint`) is then used:
- as a “contract” (e.g. function parameter)
- as a constraint to apply when creating a `NewType` (`C.createNewType(..., SlugConstraint)`)

## Methods and Properties

A constraint is a *handler* (like a primitive). It therefore exposes creation/validation methods and a few properties.

### Methods

#### `create()`

```typescript
function create(
	value: RawType | Primitive<RawType>
): EitherRight<ConstrainedType<ConstraintName, RawType>> | EitherLeft<DP.DataParserError>
```

#### `createOrThrow()`

```typescript
function createOrThrow(
	value: RawType | Primitive<RawType>
): ConstrainedType<ConstraintName, RawType>
```

Throws `C.CreateConstrainedTypeError` if validation fails.

#### `createWithUnknown()`

```typescript
function createWithUnknown(
	value: unknown
): EitherRight<ConstrainedType<ConstraintName, RawType>> | EitherLeft<DP.DataParserError>
```

#### `createWithUnknownOrThrow()`

```typescript
function createWithUnknownOrThrow(
	value: unknown
): ConstrainedType<ConstraintName, RawType>
```

Throws `C.CreateConstrainedTypeError` if validation fails.

#### `is()`

```typescript
function is(
	value: unknown
): value is ConstrainedType<ConstraintName, RawType>
```

### Properties

#### `name`

The unique name of the constraint (e.g. `"email"`, `"int"`, ...).

#### `checkers`

The list of `DDataParser` checkers used to validate the value.

#### `primitiveHandler`

The primitive to which the constraint applies (e.g. `C.String`, `C.Number`).

## Constraints provided by the library

The library exports a few ready-to-use constraints via `C.*`:

### `Email`

Validates a string in email format.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/email.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `Url`

Validates a string in URL format.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/url.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `Int`

Validates an integer.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/int.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `Positive`

Validates a strictly positive number (>= 1).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/positive.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `Negative`

Validates a strictly negative number (<= -1).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/negative.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## See also

- [Primitives](/en/v1/api/clean/primitives/)
- [NewType](/en/v1/api/clean/newType)
