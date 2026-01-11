---
description: "An Either represents a value in one of two states: Left (failure) or Right (success)."
prev:
  text: "Pipe"
  link: "/en/v1/guide/pipe"
---

# Either

[[toc]]

## The idea

An `Either` represents a value in one of two states:
- `Left`: a failure (often a business error)
- `Right`: a success

The goal is to express error paths **in the type**, without exceptions, and compose steps without piling up `if` and `try/catch`.

## Imports

The library exposes the `E` namespace (alias of `DEither`) from the main entry point, or via direct import.

```ts
import { E, unwrap } from "@duplojs/utils";
// or (tree-shaking friendly)
import * as E from "@duplojs/utils/either";
```

## The @duplojs/utils twist: required information

In this library, both `Left` and `Right` carry **information** (a string literal) that contextualizes the business case, for example:
- `"user.created"`
- `"emailAlreadyExists"`
- `"validationFailed"`

This information is available at runtime and **in the type**, which enables precise matching with `E.hasInformation`.

```ts
import { E } from "@duplojs/utils";

const created = E.right(
	"user.created",
	{
		userId: "usr_1",
	},
);

const conflict = E.left(
	"emailAlreadyExists",
	{
		email: "taken@example.com",
	},
);
```

## Create an `Either`

Base constructors:
- `E.right(info, value)` / `E.left(info, value)`
- shortcuts: `E.success(value)`, `E.ok()`, `E.error(value)`, `E.fail()`

## Read / match an `Either`

Most used helpers:
- `E.isRight` / `E.isLeft` to branch
- `E.hasInformation(info)` to target a specific case
- `unwrap` to extract the payload

A typical example: filter a union of errors/successes using the information.

```ts
import { E, unwrap } from "@duplojs/utils";

const result = E.left(
	"emailAlreadyExists",
	{
		email: "taken@example.com",
	},
);

if (E.isLeft(result) && E.hasInformation(result, "emailAlreadyExists")) {
	const payload = unwrap(result);
	// payload.email -> string
}
```

## Compose success-oriented pipelines

When you want to chain transformations **as long as it stays a `Right`**:
- `E.rightPipe` for sync
- `E.rightAsyncPipe` for async (promises and `Future`)

To aggregate multiple `Either`:
- `E.group` returns the first `Left`, otherwise a `Right` with all values
- `E.asyncGroup` does the same while accepting promises / `Future`

## Variants and tools around Either

The library provides wrappers that directly produce specialized `Either`:
- `E.bool(value)`: `Right` if truthy, otherwise `Left`
- `E.nullish(value)`: handles `null | undefined`
- `E.nullable(value)`: handles `null`
- `E.optional(value)`: handles `undefined`
- `E.future(value)`: wraps a value / promise / either in a `Future` (Either-typed Promise)

Each variant comes with its own helpers (`E.isNullishEmpty`, `E.whenIsOptionalFilled`, `E.whenIsBoolFalsy`, etc.) to match without losing typing.

## Try it (basics)

<MonacoTSEditor
src="/examples/v1/guide/either/basics.doc.ts"
majorVersion="v1"
height="1850px"
/>

## Try it (variants)

<MonacoTSEditor
src="/examples/v1/guide/either/variants.doc.ts"
majorVersion="v1"
height="1200px"
/>

## Try it (pipe + specialized when)

<MonacoTSEditor
src="/examples/v1/guide/either/pipeWhens.doc.ts"
majorVersion="v1"
height="1300px"
/>
