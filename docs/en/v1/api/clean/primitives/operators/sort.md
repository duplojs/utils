---
outline: [2, 3]
prev:
  text: "timeMax"
  link: "/en/v1/api/clean/primitives/operators/timeMax"
next:
  text: "Clean"
  link: "/en/v1/api/clean/"
---

# sort

`sort()` sorts an array of primitives (`String`, `Number`, `Date`, or `Time`) in "ASC" or "DSC". The array must stay homogeneous by primitive family, but can mix wrapped and raw values. Supports the curried version to integrate easily in a pipeline.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/sort/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntax

### Classic signature

```typescript
function sort<
	GenericInput extends Primitives
>(
	input: GenericInput, 
	type: SortType
): ToWrappedValue<GenericInput[number]>[]
```

`GenericInput` is a homogeneous array from one of these families: `Date | TheDate`, `Time | TheTime`, `Number | number`, `String | string`.

### Curried signature

```typescript
function sort<
	GenericInput extends Primitives
>(
	type: SortType
): (
	input: GenericInput
) => ToWrappedValue<GenericInput[number]>[]
```

## Parameters

- `input` : homogeneous array of primitives (wrapped or raw) from the same family.
- `type` : "ASC" or "DSC".

## Return value

A new sorted array, whose elements are **wrapped**.
