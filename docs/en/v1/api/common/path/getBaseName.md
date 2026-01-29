---
outline: [2, 3]
description: "The getBaseName() function returns the last segment of a path (after the final slash), with optional extension removal."
prev:
  text: "getParentFolderPath"
  link: "/en/v1/api/common/path/getParentFolderPath"
next:
  text: "getExtensionName"
  link: "/en/v1/api/common/path/getExtensionName"
---

# getBaseName

The **`getBaseName()`** function returns the last segment of a path (after the final slash), with optional extension removal.

::: warning
Works only with POSIX paths (not Windows paths).
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/getBaseName/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function getBaseName<
	GenericPath extends string
>(
	path: GenericPath,
	params?: {
		removeExtension?: boolean;
	}
): string | null;
```

## Parameters

- `path` : The path to analyze.
- `params.removeExtension` : When `true`, removes the extension from the final segment.

## Return value

The last path segment (after the final `/`), with the extension removed if requested, or `null` when no segment is found (including when the path has no `/`).

## See also

- [`getExtensionName`](/en/v1/api/common/path/getExtensionName) - Returns the extension of a path
- [`getParentFolderPath`](/en/v1/api/common/path/getParentFolderPath) - Returns the parent folder
