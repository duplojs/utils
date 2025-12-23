---
outline: [2, 3]
next:
  text: "add"
  link: "/en/v1/api/clean/primitives/operators/add"
---

# equal

`equal()` compares two wrapped primitives (or a primitive and a raw value) and returns a **type guard**. Useful for filtering or matching on business values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/equal/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

### Classic signature

```typescript
function equal(
	input: Primitives, 
	value: Primitives
): boolean
```

### Curried signature

```typescript
function equal(
	value: Primitives
): (input: Primitives) => boolean
```

## Parameters

- `input` : primitive to compare (classic signature only).
- `value` : comparison value (wrapped primitive or compatible raw value).

## Return value

A boolean (type guard on the TypeScript side) indicating whether the unwrapped values are strictly equal.

## See also

- [`greaterThan`](/en/v1/api/clean/primitives/operators/greaterThan)
- [`lessThan`](/en/v1/api/clean/primitives/operators/lessThan)
