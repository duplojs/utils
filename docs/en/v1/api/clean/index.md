---
outline: [2, 3]
prev:
  text: "Array"
  link: "/en/v1/api/array/"
next:
  text: "DataParser"
  link: "/en/v1/api/dataParser/"
---

# Clean

Essential building blocks of Clean Architecture: creation of business entities, business types (`NewType`), use cases, repositories, and more. Makes it easier to structure your code according to Clean Architecture principles for better maintainability and testability.

## How to import?

The library exposes the `DClean` and `C` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DClean, C } from "@duplojs/utils";
import * as DClean from "@duplojs/utils/clean";
import * as C from "@duplojs/utils/clean";
```
## [Primitives](/en/v1/api/clean/primitives/)
Primitives let you handle base types (`String`, `Number`, `Date`, …) in business code.

## [Constraints](/en/v1/api/clean/constraints)
Constraints allow adding additional rules on primitives.

## [NewType](/en/v1/api/clean/newType)
Creates a `NewType` (brand) backed by a `DataParser`, with optional constraints.

## [Entities](/en/v1/api/clean/entity)
Represents business data structures.

## [Flag](/en/v1/api/clean/flag)
Dynamically adds information (flag) on an entity, with strict typing.

## [Repository](/en/v1/api/clean/repository)
Declares a repository (contract) and type-checks the implementation.

## [UseCase](/en/v1/api/clean/useCase)
Declares a use case with dependencies (repositories or other use cases).

## Operations on primitives

### [equal](/en/v1/api/clean/primitives/operators/equal)
Compares two wrapped primitives (or a primitive and a raw value) with a type guard.

### [add](/en/v1/api/clean/primitives/operators/add)
Adds two `Number` (supports the curried version).

### [subtract](/en/v1/api/clean/primitives/operators/subtract)
Subtracts a number from a `Number` (supports the curried version).

### [multiply](/en/v1/api/clean/primitives/operators/multiply)
Multiplies a `Number` (supports the curried version).

### [divide](/en/v1/api/clean/primitives/operators/divide)
Divides a `Number` (supports the curried version).

### [min](/en/v1/api/clean/primitives/operators/min)
Returns the minimum of a `Number` tuple.

### [max](/en/v1/api/clean/primitives/operators/max)
Returns the maximum of a `Number` tuple.

### [greaterThan](/en/v1/api/clean/primitives/operators/greaterThan)
Checks whether a `Number` is strictly greater than a threshold.

### [lessThan](/en/v1/api/clean/primitives/operators/lessThan)
Checks whether a `Number` is strictly less than a threshold.

### [concat](/en/v1/api/clean/primitives/operators/concat)
Concatenates `String` (supports the curried version).

### [length](/en/v1/api/clean/primitives/operators/length)
Returns the length of a `String` as a `Number`.

### [lengthEqual](/en/v1/api/clean/primitives/operators/lengthEqual)
Checks whether the length of a `String` equals a value.

### [lengthGreaterThan](/en/v1/api/clean/primitives/operators/lengthGreaterThan)
Checks whether the length of a `String` is greater than a value.

### [lengthLessThan](/en/v1/api/clean/primitives/operators/lengthLessThan)
Checks whether the length of a `String` is less than a value.

### [dateGreaterThan](/en/v1/api/clean/primitives/operators/dateGreaterThan)
Checks whether a `Date` is after a threshold.

### [dateLessThan](/en/v1/api/clean/primitives/operators/dateLessThan)
Checks whether a `Date` is before a threshold.

### [dateMin](/en/v1/api/clean/primitives/operators/dateMin)
Returns the smallest date in a list.

### [dateMax](/en/v1/api/clean/primitives/operators/dateMax)
Returns the largest date in a list.

### [sort](/en/v1/api/clean/primitives/operators/sort)
Sorts an array of primitives (`String`, `Number`, or `Date`) in `"ASC"` / `"DSC"`.
