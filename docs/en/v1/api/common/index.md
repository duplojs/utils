---
outline: [2, 3]
description: "Cross-cutting utilities to compose functions, handle promises, manipulate wrappers/kinds, and apply runtime conversions shared by the whole library."
prev:
  text: "API Reference"
  link: "/en/v1/api/"
next:
  text: "Array"
  link: "/en/v1/api/array/"
---

# Common

Cross-cutting utilities to compose functions, handle promises, manipulate wrappers/kinds, and apply runtime conversions shared by the whole library.

## How to import?

All functions are exported from the main entry or via direct import (tree-shaking friendly).

```typescript
import { pipe, when, clone } from "@duplojs/utils";
import * as DCommon from "@duplojs/utils/common";
import * as C from "@duplojs/utils/common";
import { pipe, when, clone } from "@duplojs/utils/common";
```

## Composition and piping

### [pipe](/en/v1/api/common/pipe)
Composes synchronous functions by chaining a single input.

### [innerPipe](/en/v1/api/common/innerPipe)
Prepares a reusable pipe that returns a function to apply later.

### [asyncPipe](/en/v1/api/common/asyncPipe)
Composes promises or `FutureEither` sequentially and returns a `Promise`.

### [asyncInnerPipe](/en/v1/api/common/asyncInnerPipe)
Curried version of `asyncPipe` that returns a function ready to accept a value (sync or async).

### [forward](/en/v1/api/common/forward)
Convenient identity function in a chain to pass the value through unchanged.

### [forwardLog](/en/v1/api/common/forwardLog)
Logs the value (tap) then returns it to continue the flow.

### [justReturn](/en/v1/api/common/justReturn)
Builds a constant function that always returns the same value.

## Conditional control and predicates

### [when](/en/v1/api/common/when)
Applies a transformation if the predicate is true (or if the type guard passes), otherwise returns the input.

### [whenNot](/en/v1/api/common/whenNot)
Inverts the condition and runs a function only when the predicate fails.

### [whenElse](/en/v1/api/common/whenElse)
Two typed branches (if/else) that return distinct outputs without losing the input type.

### [and](/en/v1/api/common/and)
Combines multiple type guards / predicates into an intersection.

### [or](/en/v1/api/common/or)
Combines multiple predicates into a union, handy to filter discriminated unions.

### [equal](/en/v1/api/common/equal)
Compares to one or multiple literal values with support for type guards on primitives.

### [isType](/en/v1/api/common/isType)
Type guard based on `typeof`, `Array.isArray`, iterables, etc.

### [asserts](/en/v1/api/common/asserts)
Throws when a predicate fails and narrows the input type when it passes.

### [instanceOf](/en/v1/api/common/instanceOf)
Type guard based on one or more constructors (typed `instanceof`).

### [hasKinds](/en/v1/api/common/hasKinds)
Type guard that checks a value carries all expected kinds.

### [hasSomeKinds](/en/v1/api/common/hasSomeKinds)
Type guard that checks a value carries at least one expected kind.

### [truthy](/en/v1/api/common/truthy)
Type guard that keeps only truthy values.

### [falsy](/en/v1/api/common/falsy)
Type guard that keeps only falsy values.

## Loops

### [loop](/en/v1/api/common/loop)
Loop controlled by `next` / `exit` callbacks with access to the counter and the previous output.

### [asyncLoop](/en/v1/api/common/asyncLoop)
Async version of `loop` that accepts iterations returning promises.

## Promises

### [externalPromise](/en/v1/api/common/externalPromise)
Creates a promise with its `resolve`/`reject` methods exposed to be controlled from the outside.

### [promiseObject](/en/v1/api/common/promiseObject)
Transforms an object of promises into a promise of an object with resolved, typed values.

## Others

### [asyncRetry](/en/v1/api/common/asyncRetry)
Retries an async function until a condition is met (max retries, delay, optional logging).

### [sleep](/en/v1/api/common/sleep)
Async pause to wait for a certain time.

### [memo](/en/v1/api/common/memo)
Evaluates a function only once and reuses the result (lazy memoization).

### [memoPromise](/en/v1/api/common/memoPromise)
Lazy memoization for functions returning a value or a promise.

### [toJSON](/en/v1/api/common/toJSON)
Prepares a value for JSON serialization.

### [toTransform](/en/v1/api/common/toTransform)
Recursively applies `toTransform` methods to obtain a model ready to be transported.

### [toString](/en/v1/api/common/toString)
Converts a literal (number, boolean, bigint, etc.) into a typed template string.

### [stringToMillisecond](/en/v1/api/common/stringToMillisecond)
Parses durations (`"10s"`, `"2h"`, `"1.5d"`, etc.) into milliseconds, with typed errors.

### [stringToBytes](/en/v1/api/common/stringToBytes)
Converts sizes (`"10mb"`, `"2gb"`, …) into a number of bytes.

### [escapeRegExp](/en/v1/api/common/escapeRegExp)
Escapes special characters to build a regex from a safe string.

### [mimeType](/en/v1/api/common/mimeType)
Extension-to-MIME map (key without the dot).

### [interpolation](/en/v1/api/common/interpolation)
Generates typed templates with `{id}` placeholders and a strict mapping of replacements.

### [wrapValue](/en/v1/api/common/wrapValue)
Wraps a value in a marked container to identify it or avoid collisions.

### [isWrappedValue](/en/v1/api/common/isWrappedValue)
Type guard to check whether a value is a `WrappedValue`.

### [isRuntimeWrappedValueKey](/en/v1/api/common/isRuntimeWrappedValueKey)
Checks whether a string key matches the runtime marker of a `WrappedValue`.

### [toWrappedValue](/en/v1/api/common/toWrappedValue)
Ensures a value is wrapped (idempotent if already wrapped).

### [unwrap](/en/v1/api/common/unwrap)
Retrieves the inner value of a wrapper.

### [unwrapGroup](/en/v1/api/common/unwrapGroup)
Unwraps every value of an object.

### [addWrappedProperties](/en/v1/api/common/addWrappedProperties)
Dynamically adds derived properties to a wrapped value.

### [clone](/en/v1/api/common/clone)
Deep, typed clone of a value (objects, arrays, etc.).

### [simpleClone](/en/v1/api/common/simpleClone)
Light clone to quickly duplicate a value without advanced logic.

### [createEnum](/en/v1/api/common/createEnum)
Creates an immutable string enum with `has` and `toTuple` helpers.

### [globalStore](/en/v1/api/common/globalStore)
Typed global store (singleton per key) with read/write access.

### [builder](/en/v1/api/common/builder)
Helper to create immutable builders with typed accumulation and missing-method checks.

### [override](/en/v1/api/common/override)
Defines named overrides (methods or default values) and applies them to an interface.

## Path

### [Path](/en/v1/api/common/path/)
Mini-domain for POSIX path utilities (resolution, extraction).

### [Path.isAbsolute](/en/v1/api/common/path/isAbsolute)
Checks whether a path is absolute.

### [Path.resolveFrom](/en/v1/api/common/path/resolveFrom)
Resolves a list of segments from an origin.

### [Path.getParentFolderPath](/en/v1/api/common/path/getParentFolderPath)
Returns the parent folder of a path.

### [Path.getBaseName](/en/v1/api/common/path/getBaseName)
Returns the last segment of a path, with optional extension removal.

### [Path.getExtensionName](/en/v1/api/common/path/getExtensionName)
Returns the extension of a path, including the dot.
