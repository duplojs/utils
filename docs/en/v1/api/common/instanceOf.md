---
outline: [2, 3]
prev:
  text: "isType"
  link: "/en/v1/api/common/isType"
next:
  text: "hasKinds"
  link: "/en/v1/api/common/hasKinds"
---

# instanceOf

The **`instanceOf()`** function creates a type guard based on one or several constructors. It checks `instanceof` while keeping precise typing.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/instanceOf/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntax

### Classic signature

```typescript
function instanceOf<
	GenericInput extends unknown,
	GenericConstructor extends AnyConstructor
>(
	input: GenericInput,
	constructor: GenericConstructor | GenericConstructor[]
): input is Extract<GenericInput, InstanceType<GenericConstructor>>;
```

### Curried signature

```typescript
function instanceOf<
	GenericInput extends unknown,
	GenericConstructor extends AnyConstructor
>(
	constructor: GenericConstructor | GenericConstructor[]
): (input: GenericInput) => input is Extract<GenericInput, InstanceType<GenericConstructor>>;
```

## Parameters

- `constructor` : Constructor or array of accepted constructors.
- `input` (direct overload) : Tested value.

## Return value

A type guard that is true when `input` is an instance of one of the constructors.

## See also

- [`isType`](/en/v1/api/common/isType) - Checks a generic runtime type
- [`equal`](/en/v1/api/common/equal) - Comparison to literals
