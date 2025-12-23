---
outline: [2, 3]
prev:
  text: "dateMax"
  link: "/en/v1/api/clean/primitives/operators/dateMax"
next:
  text: "Clean"
  link: "/en/v1/api/clean/"
---

# sort

`sort()` sorts an array of wrapped primitives (`String`, `Number`, `Date`) in "ASC" or "DSC". Supports the curried version to integrate easily in a pipeline.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/sort/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntax

### Classic signature

```typescript
function sort(
	input: readonly (String | Number | Date | string | number | TheDate)[], 
	type: SortType
): any[]
```

### Curried signature

```typescript
function sort(
	type: SortType
): (
	input: readonly (String | Number | Date | string | number | TheDate)[]
) => any[]
```

## Parameters

- `input` : array of primitives (wrapped or raw).
- `type` : "ASC" or "DSC".

## Return value

A new sorted array, whose elements are **wrapped**.
