---
outline: [2, 3]
description: "The getExtensionName() function returns the extension of a path, including the dot."
prev:
  text: "getBaseName"
  link: "/en/v1/api/common/path/getBaseName"
next:
  text: "Path"
  link: "/en/v1/api/common/path/"
---

# getExtensionName

The **`getExtensionName()`** function returns the extension of a path, including the dot.

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
): string;
```

## Parameters

- `path` : The path to analyze.

## Return value

The extension including the dot (e.g. `.txt`) or an empty string when none is found.

## See also

- [`getBaseName`](/en/v1/api/common/path/getBaseName) - Returns the last segment of a path
- [`getParentFolderPath`](/en/v1/api/common/path/getParentFolderPath) - Returns the parent folder
