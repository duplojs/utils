---
outline: [2, 3]
prev:
  text: 'Date'
  link: '/en/v1/api/date/'
next:
  text: 'Generator'
  link: '/en/v1/api/generator/'
---

# Either

`Either` monad for functional, type-safe error handling. It represents a value that can be either a success (`Right`) or an error (`Left`), avoiding the use of exceptions.

## How to import?

The library exposes the `DEither` and `E` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

```typescript
import { DEither, E } from "@duplojs/utils";
import * as DEither from "@duplojs/utils/either";
import * as E from "@duplojs/utils/either";
```

### What is an Either monad? {.toc-hidden}
<details>
<summary>What is an Either monad?</summary>

::: info
An `Either` monad is a container that represents a value that can be in one of two states: **`success`** or **`error`**. It enables elegant, type-safe error handling without throwing exceptions.
:::

The `Either` monad has two constructors:
- **`E.left`**: represents an error (the "bad" side)
- **`E.right`**: represents a valid value (the "good" side)

```typescript
if (result > 0) {
  return E.right("success", result);
} else {
  return E.left("error", result);
}
```

::: warning
Order matters: `Left` is conventionally used for errors and `Right` for successes. Do not invert them in your business logic.
:::

**Advantages**:
- **Type-safe**: TypeScript forces you to handle both cases
- **No exceptions**: Avoids try-catch and unpredictable behavior
- **Composable**: Either operations can be chained with `map`, `flatMap`, etc.
- **Readable**: Code becomes more explicit about error paths

::: tip
You can chain Either operations for elegant error handling without nested conditionals.
:::

</details>


### The power of contextualization with Info {.toc-hidden}
<details>
<summary>The power of contextualization with Info</summary>

::: info
The real strength of this library lies in the **mandatory addition of an info** to every state (success or error). This info stays both on the monad AND in the TypeScript typing, enabling precise, type-safe pattern matching.
:::

**The problem without info**:

A monad can contain multiple different errors and multiple different successes. Without contextualization, you are forced to do generic pattern matching or re-validate to know what the monad really contains.

```typescript
// Without info: ambiguous, what do we really have?
const result = someFunction();
if (E.isRight(result)) {
  // But which success? We don't really know
  const value = unwrap(result);
}
```

**The solution with info**:

The info is a **literal string** that contextualizes the output. It stays in the type, so TypeScript can help you during pattern matching.

```typescript
const result = someFunction();

if (E.isRight(result) && E.hasInformation(result, "user.created")) {
	// TypeScript knows exactly which success!
	const newUser = unwrap(result);
} else if (E.isRight(result) && E.hasInformation(result, "user.updated")) {
	// Another success, completely different
	const updatedUser = unwrap(result);
} else if (E.isLeft(result) && E.hasInformation(result, "emailAlreadyExists")) {
	// A specific error, easy to handle
	const conflict = unwrap(result);
	...
}

```

**Advantages of this approach**:
- **No extra validation**: The info is enough to precisely identify the state
- **Guaranteed exhaustiveness**: TypeScript forces you to handle all possible cases
- **Clear semantics**: The code documents itself about what happens
- **Avoids generic errors**: No need for generic monads anymore, each case is explicit

::: warning
The info must be explicit and representative. Use clear names like `"emailAlreadyExists"`, `"validationFailed"`, `"user.created"` rather than generic codes.
:::

</details>

## `Right` constructors

### [right](/en/v1/api/either/right)
Builds a typed `EitherRight` with mandatory business information (optional payload).

### [success](/en/v1/api/either/success)
Shortcut to return a success `right("success", value)` in an expressive way.

### [ok](/en/v1/api/either/ok)
Returns a `Right` without a value (`void`) tagged with the literal information `"ok"`.

## `Left` constructors

### [left](/en/v1/api/either/left)
Builds an `EitherLeft` by providing business information and optionally a value.

### [error](/en/v1/api/either/error)
Shortcut to signal a typed error `left("error", value)`.

### [fail](/en/v1/api/either/fail)
Returns a `Left` without payload tagged `"fail"` for generic failure cases.

## `Right` checks

### [isRight](/en/v1/api/either/isRight)
Type guard that checks whether a value is an `EitherRight`.

### [whenIsRight](/en/v1/api/either/whenIsRight)
Runs a function only when the input is `Right`, otherwise forwards the original value.

## `Left` checks

### [isLeft](/en/v1/api/either/isLeft)
Type guard that detects an `EitherLeft`.

### [whenIsLeft](/en/v1/api/either/whenIsLeft)
Allows applying a function when receiving a `Left` and then continuing the flow.

## `Right`-oriented pipelines

### [rightPipe](/en/v1/api/either/rightPipe)
Chains synchronous transformations as long as results are `Right`, and stops at the first `Left`.

### [rightAsyncPipe](/en/v1/api/either/rightAsyncPipe)
Async version that accepts promises, `Future`, or `Either` and automatically stops on a `Left`.

### [group](/en/v1/api/either/group)
Aggregates multiple synchronous `Either` and returns the first `Left` or an object of `Right` values.

### [asyncGroup](/en/v1/api/either/asyncGroup)
Async version of `group` that accepts promises and `Future`.

## Other

### [hasInformation](/en/v1/api/either/hasInformation)
Type guard based on the literal information to precisely target a business case.

### [whenHasInformation](/en/v1/api/either/whenHasInformation)
Pattern matching that triggers a function when the information (or a list of infos) matches.

### [safeCallback](/en/v1/api/either/safeCallback)
Runs a callback and captures exceptions into a `Left<"callback">`.

## Boolean helpers

### [bool](/en/v1/api/either/bool)
Converts any value into a boolean `Either` (`Right` if truthy, `Left` if falsy) while preserving typing.

### [boolTruthy](/en/v1/api/either/boolTruthy)
Forces the creation of a `Right<"bool">` by explicitly marking a truthy value.

### [boolFalsy](/en/v1/api/either/boolFalsy)
Builds a `Left<"bool">` from a falsy value (`undefined`, `null`, `""`, `0`, `false`).

### [isBoolTruthy](/en/v1/api/either/isBoolTruthy)
Specialized type guard for `boolTruthy`.

### [whenIsBoolTruthy](/en/v1/api/either/whenIsBoolTruthy)
Triggers a function only when a value (or the result of `bool`) is truthy.

### [isBoolFalsy](/en/v1/api/either/isBoolFalsy)
Specialized type guard for `boolFalsy`.

### [whenIsBoolFalsy](/en/v1/api/either/whenIsBoolFalsy)
Triggers a function only when a value (or the result of `bool`) is falsy.

## Handling nullish values

### [nullish](/en/v1/api/either/nullish)
Transforms a potentially `null`/`undefined` value into an `Either`, filled on the right if the value exists.

### [nullishEmpty](/en/v1/api/either/nullishEmpty)
Explicitly builds a `Left<"nullish">` with a `null` or `undefined` value.

### [nullishFilled](/en/v1/api/either/nullishFilled)
Builds a `Right<"nullish">` from a defined value.

### [isNullishEmpty](/en/v1/api/either/isNullishEmpty)
Type guard to detect a `nullishEmpty`.

### [whenIsNullishEmpty](/en/v1/api/either/whenIsNullishEmpty)
Applies a function only for the `nullishEmpty` case.

### [isNullishFilled](/en/v1/api/either/isNullishFilled)
Type guard to detect a `nullishFilled`.

### [whenIsNullishFilled](/en/v1/api/either/whenIsNullishFilled)
Applies a function when the nullish value is actually defined (`Right`).

## Handling nullable values

### [nullable](/en/v1/api/either/nullable)
Wraps a possible `null` in an `Either`, which forces handling the absence of a value.

### [nullableEmpty](/en/v1/api/either/nullableEmpty)
Builds a `Left<"nullable">` containing `null`.

### [nullableFilled](/en/v1/api/either/nullableFilled)
Builds a `Right<"nullable">` with a non-null value.

### [isNullableEmpty](/en/v1/api/either/isNullableEmpty)
Type guard for `nullableEmpty`.

### [whenIsNullableEmpty](/en/v1/api/either/whenIsNullableEmpty)
Callback triggered only when the value is `null`.

### [isNullableFilled](/en/v1/api/either/isNullableFilled)
Type guard for `nullableFilled`.

### [whenIsNullableFilled](/en/v1/api/either/whenIsNullableFilled)
Callback triggered when the nullable value is present (`Right`).

## Handling optional values

### [optional](/en/v1/api/either/optional)
Wraps a possibly `undefined` value in an `Either`, useful for optional fields.

### [optionalEmpty](/en/v1/api/either/optionalEmpty)
Builds a `Left<"optional">` containing `undefined`.

### [optionalFilled](/en/v1/api/either/optionalFilled)
Builds a `Right<"optional">` with a defined value.

### [isOptionalEmpty](/en/v1/api/either/isOptionalEmpty)
Type guard for `optionalEmpty`.

### [whenIsOptionalEmpty](/en/v1/api/either/whenIsOptionalEmpty)
Callback triggered only when an optional is empty.

### [isOptionalFilled](/en/v1/api/either/isOptionalFilled)
Type guard for `optionalFilled`.

### [whenIsOptionalFilled](/en/v1/api/either/whenIsOptionalFilled)
Callback triggered when an optional contains a value.

## Futures and asynchronism

### [future](/en/v1/api/either/future)
Converts a value (or an `Either`) into a `Future`, a class derived from `Promise` with `Future.all` support.

### [futureSuccess](/en/v1/api/either/futureSuccess)
Builds an `EitherRight<"future">` to explicitly signal a successful resolution.

### [futureError](/en/v1/api/either/futureError)
Builds an `EitherLeft<"future">` to represent a standardized async error.
