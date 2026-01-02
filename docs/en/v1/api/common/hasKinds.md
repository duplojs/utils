---
outline: [2, 3]
prev:
  text: "instanceOf"
  link: "/en/v1/api/common/instanceOf"
next:
  text: "loop"
  link: "/en/v1/api/common/loop"
---

# hasKinds

The **`hasKinds()`** function checks that a value carries all requested kinds and acts as a type guard toward their intersection.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/hasKinds/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Syntax

### Classic signature

```typescript
function hasKinds<
	GenericInput extends unknown,
	GenericKindHandler extends KindHandler,
>(
	input: GenericInput,
	kinds: [GenericKindHandler, ...GenericKindHandler[]]
): input is Extract<
	GenericInput,
	UnionToIntersection<
		GenericKindHandler extends any
			? Kind<GenericKindHandler["definition"]>
			: never
	>
>;
```

### Curried signature

```typescript
function hasKinds<
	GenericInput extends unknown,
	GenericKindHandler extends KindHandler,
>(
	kinds: [GenericKindHandler, ...GenericKindHandler[]]
): (input: GenericInput) => input is Extract<
	GenericInput,
	UnionToIntersection<
		GenericKindHandler extends any
			? Kind<GenericKindHandler["definition"]>
			: never
	>
>;
```

## Parameters

- `kinds`: Non-empty list of kind handlers to verify.
- `input` (direct overload): Value to test.

## Return value

A type guard that returns true when `input` carries all listed kinds.

## See also

- [`kind`](/en/v1/api/common/kind) - Create and manipulate kinds
- [`instanceOf`](/en/v1/api/common/instanceOf) - Type guard based on `instanceof`
