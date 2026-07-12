---
outline: [2, 3]
description: "The computeRelative() function computes the relative path from one absolute POSIX path to another."
prev:
  text: "resolveFrom"
  link: "/en/v1/api/common/path/resolveFrom"
next:
  text: "getParentFolderPath"
  link: "/en/v1/api/common/path/getParentFolderPath"
---

# computeRelative

The **`computeRelative()`** function computes the relative path from one absolute POSIX path to another.
It returns `null` when either path is not absolute.

::: warning
Works only with POSIX paths (not Windows paths).
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/computeRelative/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function computeRelative<
	GenericSourcePath extends string,
	GenericDestinationPath extends string,
>(
	source: GenericSourcePath,
	destination: GenericDestinationPath,
): string | null;
```

## Parameters

- `source` : The absolute path used as the starting point.
- `destination` : The absolute path to reach.

## Return value

The relative path from `source` to `destination`, `.` when both paths are the same, or `null` when one path is not absolute.

## See also

- [`resolveFrom`](/en/v1/api/common/path/resolveFrom) - Resolves a list of segments from an origin
- [`getParentFolderPath`](/en/v1/api/common/path/getParentFolderPath) - Returns the parent folder of a path
