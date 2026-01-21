---
outline: [2, 3]
description: "The join() function joins path segments and normalizes the result."
prev:
  text: "normalize"
  link: "/en/v1/api/common/path/normalize"
next:
  text: "resolveFrom"
  link: "/en/v1/api/common/path/resolveFrom"
---

# join

The **`join()`** function joins path segments and normalizes the result.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/join/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function join<
	GenericSegment extends string
>(
	...segments: readonly GenericSegment[]
): string;
```

## Parameters

- `segments` : The segments to join.

## Return value

A normalized path with the appropriate separators.

## See also

- [`normalize`](/en/v1/api/common/path/normalize) - Normalizes a path
- [`resolveFrom`](/en/v1/api/common/path/resolveFrom) - Resolves a list of segments
