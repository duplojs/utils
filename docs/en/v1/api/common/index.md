---
outline: [2, 3]
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

### [pipe](/fr/v1/api/common/pipe)
Composes synchronous functions by chaining a single input.

### [innerPipe](/fr/v1/api/common/innerPipe)
Prepares a reusable pipe that returns a function to apply later.

### [asyncPipe](/fr/v1/api/common/asyncPipe)
Composes promises or `FutureEither` sequentially and returns a `Promise`.

### [asyncInnerPipe](/fr/v1/api/common/asyncInnerPipe)
Curried version of `asyncPipe` that returns a function ready to accept a value (sync or async).

### [forward](/fr/v1/api/common/forward)
Convenient identity function in a chain to pass the value through unchanged.

### [forwardLog](/fr/v1/api/common/forwardLog)
Logs the value (tap) then returns it to continue the flow.

### [justReturn](/fr/v1/api/common/justReturn)
Builds a constant function that always returns the same value.

## Conditional control and predicates

### [when](/fr/v1/api/common/when)
Applies a transformation if the predicate is true (or if the type guard passes), otherwise returns the input.

### [whenNot](/fr/v1/api/common/whenNot)
Inverts the condition and runs a function only when the predicate fails.

### [whenElse](/fr/v1/api/common/whenElse)
Two typed branches (if/else) that return distinct outputs without losing the input type.

### [and](/fr/v1/api/common/and)
Combines multiple type guards / predicates into an intersection.

### [or](/fr/v1/api/common/or)
Combines multiple predicates into a union, handy to filter discriminated unions.

### [equal](/fr/v1/api/common/equal)
Compares to one or multiple literal values with support for type guards on primitives.

### [isType](/fr/v1/api/common/isType)
Type guard based on `typeof`, `Array.isArray`, iterables, etc.

### [instanceOf](/fr/v1/api/common/instanceOf)
Type guard based on one or more constructors (typed `instanceof`).

## Loops

### [loop](/fr/v1/api/common/loop)
Loop controlled by `next` / `exit` callbacks with access to the counter and the previous output.

### [asyncLoop](/fr/v1/api/common/asyncLoop)
Async version of `loop` that accepts iterations returning promises.

## Promises

### [externalPromise](/fr/v1/api/common/externalPromise)
Creates a promise with its `resolve`/`reject` methods exposed to be controlled from the outside.

### [promiseObject](/fr/v1/api/common/promiseObject)
Transforms an object of promises into a promise of an object with resolved, typed values.

## Others

### [asyncRetry](/fr/v1/api/common/asyncRetry)
Retries an async function until a condition is met (max retries, delay, optional logging).

### [sleep](/fr/v1/api/common/sleep)
Async pause to wait for a certain time.

### [memo](/fr/v1/api/common/memo)
Evaluates a function only once and reuses the result (lazy memoization).

### [toJSON](/fr/v1/api/common/toJSON)
Prepares a value for JSON serialization.

### [toTransform](/fr/v1/api/common/toTransform)
Recursively applies `toTransform` methods to obtain a model ready to be transported.

### [toString](/fr/v1/api/common/toString)
Converts a literal (number, boolean, bigint, etc.) into a typed template string.

### [stringToMillisecond](/fr/v1/api/common/stringToMillisecond)
Parses durations (`"10s"`, `"2h"`, `"1.5d"`, etc.) into milliseconds, with typed errors.

### [stringToBytes](/fr/v1/api/common/stringToBytes)
Converts sizes (`"10mb"`, `"2gb"`, …) into a number of bytes.

### [escapeRegExp](/fr/v1/api/common/escapeRegExp)
Escapes special characters to build a regex from a safe string.

### [interpolation](/fr/v1/api/common/interpolation)
Generates typed templates with `{id}` placeholders and a strict mapping of replacements.

### [wrapValue](/fr/v1/api/common/wrapValue)
Wraps a value in a marked container to identify it or avoid collisions.

### [isWrappedValue](/fr/v1/api/common/isWrappedValue)
Type guard to check whether a value is a `WrappedValue`.

### [isRuntimeWrappedValueKey](/fr/v1/api/common/isRuntimeWrappedValueKey)
Checks whether a string key matches the runtime marker of a `WrappedValue`.

### [toWrappedValue](/fr/v1/api/common/toWrappedValue)
Ensures a value is wrapped (idempotent if already wrapped).

### [unwrap](/fr/v1/api/common/unwrap)
Retrieves the inner value of a wrapper.

### [addWrappedProperties](/fr/v1/api/common/addWrappedProperties)
Dynamically adds derived properties to a wrapped value.

### [clone](/fr/v1/api/common/clone)
Deep, typed clone of a value (objects, arrays, etc.).

### [simpleClone](/fr/v1/api/common/simpleClone)
Light clone to quickly duplicate a value without advanced logic.

### [createEnum](/fr/v1/api/common/createEnum)
Creates an immutable string enum with `has` and `toTuple` helpers.

### [globalStore](/fr/v1/api/common/globalStore)
Typed global store (singleton per key) with read/write access.

### [builder](/fr/v1/api/common/builder)
Helper to create immutable builders with typed accumulation and missing-method checks.

### [override](/fr/v1/api/common/override)
Defines named overrides (methods or default values) and applies them to an interface.
