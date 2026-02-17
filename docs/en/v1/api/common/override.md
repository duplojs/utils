---
outline: [2, 3]
description: "The createOverride() function lets you register changes (default values and/or methods) that will be applied when creating an object."
prev:
  text: "createFormData"
  link: "/en/v1/api/common/createFormData"
next:
  text: "Common"
  link: "/en/v1/api/common/"
---

# override

The **`createOverride()`** function lets you **register changes** (default values and/or methods) that will be **applied when creating an object**.

The typical pattern is:
1) create the base object
2) call `overrideHandler.apply(self)` just before returning it
3) from another module, register overrides via `setPropertyDefaultValue` / `setMethod`

This tool is heavily used in `dataParser` to add/alter capabilities without modifying the parser implementation.

::: warning
Overrides are stored in a global store (valid throughout the process): the last override applied to the same property/method wins.
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/override/tryout.doc.ts"
  majorVersion="v1"
  height="712px"
/>

## Syntax

```typescript
interface OverrideHandler<
	GenericInterface extends object
> {
	setMethod<
		GenericProperty extends keyof GenericInterface
	>(
		prop: GenericProperty,
		theFunction: (
			self: GenericInterface,
			...args: any[]
		) => any
	): void;

	setPropertyDefaultValue<
		GenericProperty extends keyof GenericInterface
	>(
		prop: GenericProperty,
		value: any
	): void;

	apply(overrideInterface: GenericInterface): GenericInterface;
}

function createOverride<
	GenericInterface extends object
>(overrideName: string): OverrideHandler<GenericInterface>;
```

## Usage notes

- `overrideName` : choose a **unique** name (often a namespaced id like `@duplojs/utils/...`).
- `apply(self)` : applies overrides and returns a new `self` object (with wrapped methods to receive the correct `self`).
- `setMethod(...)` : the function receives `self` as the first parameter, which avoids `this` issues and allows referencing overridden properties.
- `setPropertyDefaultValue(...)` : sets a value applied at creation (and can overwrite an existing value).

## See also

- [`builder`](/en/v1/api/common/builder) - Similar “declare then configure” pattern
- [`globalStore`](/en/v1/api/common/globalStore) - Global per-process storage
