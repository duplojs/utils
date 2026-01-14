---
outline: [2, 3]
description: "The hasSomeKinds() function checks that a value carries at least one of the requested kinds and acts as a type guard toward their union."
prev:
  text: "hasKinds"
  link: "/en/v1/api/common/hasKinds"
next:
  text: "truthy"
  link: "/en/v1/api/common/truthy"
---

# hasSomeKinds

The **`hasSomeKinds()`** function checks that a value carries at least one of the requested kinds and acts as a type guard toward their union.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/hasSomeKinds/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntax

### Classic signature

```typescript
function hasSomeKinds<
	GenericInput extends unknown,
	GenericKindHandler extends KindHandler,
>(
	input: GenericInput,
	kinds: [GenericKindHandler, ...GenericKindHandler[]]
): input is Extract<
	GenericInput,
	GenericKindHandler extends any
		? Kind<GenericKindHandler["definition"]>
		: never
>;
```

### Curried signature

```typescript
function hasSomeKinds<
	GenericInput extends unknown,
	GenericKindHandler extends KindHandler,
>(
	kinds: [GenericKindHandler, ...GenericKindHandler[]]
): (input: GenericInput) => input is Extract<
	GenericInput,
	GenericKindHandler extends any
		? Kind<GenericKindHandler["definition"]>
		: never
>;
```

## Parameters

- `kinds`: Non-empty list of kind handlers to verify.
- `input` (direct overload): Value to test.

## Return value

A type guard that returns true when `input` carries at least one listed kind.

## See also

- [`hasKinds`](/en/v1/api/common/hasKinds) - Require all kinds to be present
- [`kind`](/en/v1/api/common/kind) - Create and manipulate kinds
