---
outline: [2, 3]
prev:
  text: "fillAll"
  link: "/en/v1/api/array/fillAll"
next:
  text: "insert"
  link: "/en/v1/api/array/insert"
---

# copyWithin

The **`copyWithin()`** function copies a portion of the array to another location while remaining pure (the original array is cloned).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/copyWithin/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

### Classic signature

```typescript
function copyWithin<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	target: number,
	start: number,
	end?: number
): GenericElement[]
```

### Curried signature

```typescript
function copyWithin<
	GenericElement extends unknown
>(
	target: number,
	start: number,
	end?: number
): (input: readonly GenericElement[]) => GenericElement[]
```

## Parameters

- `input`: Source array.
- `target`: Index from which the copied portion will be written.
- `start`: Start of the portion to copy (inclusive).
- `end`: End of the portion (exclusive). Defaults to the end of the array.

## Return value

A new array where the portion `[start, end)` has been copied starting at `target`. Unaffected sections remain identical.

## See also

- [`fill`](/en/v1/api/array/fill) - Overwrites a range with a fixed value
- [`set`](/en/v1/api/array/set) - Changes a single position

## Sources

- [MDN Web Docs - Array.prototype.copyWithin()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
