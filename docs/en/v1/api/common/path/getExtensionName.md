---
outline: [2, 3]
description: "The getExtensionName() function returns the last extension of a path, without the dot."
prev:
  text: "getBaseName"
  link: "/en/v1/api/common/path/getBaseName"
next:
  text: "Path"
  link: "/en/v1/api/common/path/"
---

# getExtensionName

The **`getExtensionName()`** function returns the last extension of a path, without the dot.

::: warning
Works only with POSIX paths (not Windows paths).
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/getExtensionName/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function getExtensionName<
	GenericPath extends string
>(
	path: GenericPath
): string | null;
```

## Parameters

- `path` : The path to analyze.

## Return value

The extension without the dot (e.g. `txt`) or `null` when none is found.

## See also

- [`getBaseName`](/en/v1/api/common/path/getBaseName) - Returns the last segment of a path
- [`getParentFolderPath`](/en/v1/api/common/path/getParentFolderPath) - Returns the parent folder
