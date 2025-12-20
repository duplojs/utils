---
outline: [2, 3]
prev:
  text: "Clean"
  link: "/en/v1/api/clean/"
next:
  text: "Constraints"
  link: "/fr/v1/api/clean/constraints"
---

# Primitives

Business primitives are an alternative to raw TypeScript strings and numbers.

Rather than manipulating bare values, each primitive is wrapped in a container.
Result: safer, more explicit data, better aligned with the domain.

## Example

a selected page is not a simple number, but a dedicated primitive, independent from any business entity.

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/first.doc.ts"
  majorVersion="v1"
  height="250px"
/>

Primitives have two goals:

Secure data by avoiding the use of raw values.

Unify types: when multiple NewTypes interact, their common point falls back to a simple primitive (number, string, etc.).

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/second.doc.ts"
  majorVersion="v1"
  height="320px"
/>

👉 In short: cleaner, more readable, and more robust types, without unnecessary complexity

## Available primitives
 
<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Methods and properties

### Methods

#### `create()`

```typescript
function create(
	value: RawType
): EitherRight<Primitive<RawType>> | EitherLeft<ParseError>
```

#### `createOrThrow()`

```typescript
function createOrThrow(
	value: RawType
): Primitive<RawType>
```

#### `createWithUnknown()`

```typescript
function createWithUnknown(
	value: unknown
): EitherRight<Primitive<RawType>> | EitherLeft<ParseError>
```

#### `createWithUnknownOrThrow()`

```typescript
function createWithUnknownOrThrow(
	value: unknown
): Primitive<RawType>
```

#### `is()`

```typescript
function is(
	value: unknown
): value is Primitive<RawType>
```

### Properties

#### `dataParser`

Corresponds to the [dataParser](/en/v1/api/dataParser/) that validates the primitive.

## Operators

### [equal](/fr/v1/api/clean/primitives/operators/equal)
Compares two wrapped primitives (or a primitive and a raw value) with a type guard.

### [add](/fr/v1/api/clean/primitives/operators/add)
Adds two `Number` (supports the curried version).

### [subtract](/fr/v1/api/clean/primitives/operators/subtract)
Subtracts a number from a `Number` (supports the curried version).

### [multiply](/fr/v1/api/clean/primitives/operators/multiply)
Multiplies a `Number` (supports the curried version).

### [divide](/fr/v1/api/clean/primitives/operators/divide)
Divides a `Number` (supports the curried version).

### [min](/fr/v1/api/clean/primitives/operators/min)
Returns the minimum of a `Number` tuple.

### [max](/fr/v1/api/clean/primitives/operators/max)
Returns the maximum of a `Number` tuple.

### [greaterThan](/fr/v1/api/clean/primitives/operators/greaterThan)
Checks whether a `Number` is strictly greater than a threshold.

### [lessThan](/fr/v1/api/clean/primitives/operators/lessThan)
Checks whether a `Number` is strictly less than a threshold.

### [concat](/fr/v1/api/clean/primitives/operators/concat)
Concatenates `String` (supports the curried version).

### [length](/fr/v1/api/clean/primitives/operators/length)
Returns the length of a `String` as a `Number`.

### [lengthEqual](/fr/v1/api/clean/primitives/operators/lengthEqual)
Checks whether the length of a `String` equals a value.

### [lengthGreaterThan](/fr/v1/api/clean/primitives/operators/lengthGreaterThan)
Checks whether the length of a `String` is greater than a value.

### [lengthLessThan](/fr/v1/api/clean/primitives/operators/lengthLessThan)
Checks whether the length of a `String` is less than a value.

### [dateGreaterThan](/fr/v1/api/clean/primitives/operators/dateGreaterThan)
Checks whether a `Date` is after a threshold.

### [dateLessThan](/fr/v1/api/clean/primitives/operators/dateLessThan)
Checks whether a `Date` is before a threshold.

### [dateMin](/fr/v1/api/clean/primitives/operators/dateMin)
Returns the smallest date in a list.

### [dateMax](/fr/v1/api/clean/primitives/operators/dateMax)
Returns the largest date in a list.

### [sort](/fr/v1/api/clean/primitives/operators/sort)
Sorts an array of primitives (`String`, `Number`, or `Date`) in `"ASC"` / `"DSC"`.
