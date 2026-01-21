---
outline: [2, 3]
description: "The isUnixPath() function checks whether a path only uses Unix separators and acts as a type guard."
prev:
  text: "isAbsolute"
  link: "/en/v1/api/common/path/isAbsolute"
next:
  text: "normalize"
  link: "/en/v1/api/common/path/normalize"
---

# isUnixPath

The **`isUnixPath()`** function checks whether a path only uses Unix separators and acts as a type guard.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/isUnixPath/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function isUnixPath<
	GenericPath extends string
>(
	path: GenericPath
): path is Exclude<GenericPath, `${string}\\${string}`>;
```

## Parameters

- `path` : The path to test.

## Return value

A boolean and a type guard that narrows the path when it is Unix-style.

## See also

- [`isAbsolute`](/en/v1/api/common/path/isAbsolute) - Checks whether a path is absolute
- [`normalize`](/en/v1/api/common/path/normalize) - Normalizes a path
