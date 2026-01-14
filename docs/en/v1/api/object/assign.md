---
outline: [2, 3]
description: "The assign() method merges multiple objects together (similar to Object.assign but type-safe)."
prev:
  text: "omit"
  link: "/en/v1/api/object/omit"
next:
  text: "override"
  link: "/en/v1/api/object/override"
---

# assign

The **`assign()`** method merges multiple objects together (similar to Object.assign but type-safe).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/assign/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntax

### Classic signature

```typescript
function assign<
	GenericInput extends object,
	GenericUpdate extends Partial<Record<keyof GenericInput, unknown>> & AnyObject
>(
	input: GenericInput,
	update: GenericUpdate
): AssignObjects<GenericInput, GenericUpdate>
```

### Curried signature

```typescript
function assign<
	GenericInput extends object,
	GenericUpdate extends Partial<Record<keyof GenericInput, unknown>> & AnyObject
>(
	input: GenericUpdate
): (input: GenericInput) => AssignObjects<GenericInput, GenericUpdate>
```

## Parameters

- `input`: The base object.
- `update`: The object to merge with the base object.

## Return value

A new object resulting from the merge, with precise typing.

## See also

- [`override`](/en/v1/api/object/override) - Overrides properties while ignoring undefined values

## Sources

- [MDN Web Docs - Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
