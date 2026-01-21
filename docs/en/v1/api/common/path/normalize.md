---
outline: [2, 3]
description: "The normalize() function normalizes a path by resolving segments and separators."
prev:
  text: "isUnixPath"
  link: "/en/v1/api/common/path/isUnixPath"
next:
  text: "join"
  link: "/en/v1/api/common/path/join"
---

# normalize

The **`normalize()`** function normalizes a path by resolving segments and separators.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/normalize/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function normalize<
	GenericPath extends string
>(
	path: GenericPath
): string;
```

## Parameters

- `path` : The path to normalize.

## Return value

A normalized string that preserves absolute paths and UNC prefixes.

## See also

- [`join`](/en/v1/api/common/path/join) - Joins segments and normalizes the result
- [`resolveFrom`](/en/v1/api/common/path/resolveFrom) - Resolves a list of segments
