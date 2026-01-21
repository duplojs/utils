---
outline: [2, 3]
description: "The getParentFolderPath() function returns the parent folder of a POSIX path."
prev:
  text: "resolveFrom"
  link: "/en/v1/api/common/path/resolveFrom"
next:
  text: "getBaseName"
  link: "/en/v1/api/common/path/getBaseName"
---

# getParentFolderPath

The **`getParentFolderPath()`** function returns the parent folder of a POSIX path.

::: warning
Works only with POSIX paths (not Windows paths).
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/getParentFolderPath/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function getParentFolderPath<
	GenericPath extends string
>(
	path: GenericPath
): string;
```

## Parameters

- `path` : The path to analyze.

## Return value

The parent folder, or `"/"` when the path is absolute with no parent, otherwise `"."`.

## See also

- [`getBaseName`](/en/v1/api/common/path/getBaseName) - Returns the last segment of a path
- [`getExtensionName`](/en/v1/api/common/path/getExtensionName) - Returns the extension of a path
