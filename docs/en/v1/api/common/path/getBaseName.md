---
outline: [2, 3]
description: "The getBaseName() function returns the last segment of a path, with optional extension removal."
prev:
  text: "getParentFolderPath"
  link: "/en/v1/api/common/path/getParentFolderPath"
next:
  text: "getExtensionName"
  link: "/en/v1/api/common/path/getExtensionName"
---

# getBaseName

The **`getBaseName()`** function returns the last segment of a path, with optional extension removal.

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
		extension?: string;
	}
): string;
```

## Parameters

- `path` : The path to analyze.
- `params.extension` : Extension to remove when present.

## Return value

The last segment, with the extension removed when it matches.

## See also

- [`getExtensionName`](/en/v1/api/common/path/getExtensionName) - Returns the extension of a path
- [`getParentFolderPath`](/en/v1/api/common/path/getParentFolderPath) - Returns the parent folder
