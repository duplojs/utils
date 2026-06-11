---
outline: [2, 3]
description: "The castMaxElements() function readapts an existing MaxElements constraint to a less restrictive maximum without checking the array again at runtime."
prev:
  text: "maxElements"
  link: "/en/v1/api/array/maxElements"
next:
  text: "set"
  link: "/en/v1/api/array/set"
---

# castMaxElements

The **`castMaxElements()`** function readapts an existing `MaxElements` constraint to a less restrictive maximum without checking the array again at runtime. It is useful when the new maximum is already induced by the constraints carried by the array: for example, a `MaxElements<10>` array is compatible with `MaxElements<15>`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/castMaxElements/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntax

### Classic signature

```typescript
function castMaxElements<
	GenericArray extends readonly unknown[] & MaxElements<number>,
	GenericLength extends number
>(
	array: GenericArray,
	maxLength: GenericLength
): GenericArray & MaxElements<GenericLength>
```

### Curried signature

```typescript
function castMaxElements<
	GenericArray extends readonly unknown[] & MaxElements<number>,
	GenericLength extends number
>(
	maxLength: GenericLength
): (array: GenericArray) => GenericArray & MaxElements<GenericLength>
```

## Parameters

- `array`: Array that already carries a `MaxElements` constraint.
- `maxLength`: New literal maximum to add to the type. It must be greater than or equal to the already known maximum.

## Return value

The same array, with an additional `MaxElements<maxLength>` type marker.

The function does not validate the length at runtime. Use [`maxElements`](/en/v1/api/array/maxElements) first to obtain the initial constraint.

## See also

- [`maxElements`](/en/v1/api/array/maxElements) - Checks and creates a `MaxElements` constraint
- [`minElements`](/en/v1/api/array/minElements) - Checks a minimum number of elements
