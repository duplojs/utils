---
outline: [2, 3]
description: "The slice() function creates a copy of a portion of an array between start and end (excluded) without modifying the original. It mirrors Array.prototype.slice with a curried API."
prev:
  text: "select"
  link: "/en/v1/api/array/select"
next:
  text: "flat"
  link: "/en/v1/api/array/flat"
---

# slice

The **`slice()`** function creates a copy of a portion of an array between `start` and `end` (excluded) without modifying the original. It mirrors `Array.prototype.slice` with a curried API.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/slice/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntax

### Classic signature

```typescript
function slice<
  GenericElement extends unknown,
>(
  array: readonly GenericElement[],
  start?: number,
  end?: number,
): GenericElement[]
```

### Curried signature

```typescript
function slice<
  GenericElement extends unknown,
>(
  start?: number,
  end?: number,
): (array: readonly GenericElement[]) => GenericElement[]
```

## Parameters

- `array`: Source array.
- `start`: Starting index (inclusive). Defaults to `0`.
- `end`: Ending index (exclusive). Defaults to the array length.

## Return value

A new portion of the original array between `start` and `end`.

## See also

- [`at`](/en/v1/api/array/at) - Accesses a specific element
- [`chunk`](/en/v1/api/array/chunk) - Splits an array into chunks
