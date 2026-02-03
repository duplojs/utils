---
outline: [2, 3]
description: "A constraint lets you define a rule that typing alone cannot check. For example, a constraint can verify that a string matches a particular format (email, URL, …), or that a number is within a certain range. A constraint applies to a primitive."
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

## Constraints sets

When you need to apply several constraints together, you can build a reusable set with `C.createConstraintsSet(...)`.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/constraintsSet.doc.ts"
  majorVersion="v1"
  height="418px"
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
): Right<ConstrainedType<ConstraintName, RawType>> | Left<DP.DataParserError>
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
): Right<ConstrainedType<ConstraintName, RawType>> | Left<DP.DataParserError>
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

### `StringMin`

Validates a string with a minimum length (>= min).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/stringMin.doc.ts"
  majorVersion="v1"
  height="271px"
/>

### `StringMax`

Validates a string with a maximum length (<= max).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/stringMax.doc.ts"
  majorVersion="v1"
  height="271px"
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

### `PositiveInt`

Validates a strictly positive integer (>= 1).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/positiveInt.doc.ts"
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

### `NumberMin`

Validates a number greater than or equal to min.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/numberMin.doc.ts"
  majorVersion="v1"
  height="271px"
/>

### `NumberMax`

Validates a number less than or equal to max.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/numberMax.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## See also

- [Primitives](/en/v1/api/clean/primitives/)
- [NewType](/en/v1/api/clean/newType)
