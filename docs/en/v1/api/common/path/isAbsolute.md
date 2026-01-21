---
outline: [2, 3]
description: "The isAbsolute() function checks whether a path is absolute (POSIX, UNC, or Windows drive) and acts as a type guard."
prev:
  text: "Path"
  link: "/en/v1/api/common/path/"
next:
  text: "isUnixPath"
  link: "/en/v1/api/common/path/isUnixPath"
---

# isAbsolute

The **`isAbsolute()`** function checks whether a path is absolute (POSIX, UNC, or Windows drive) and acts as a type guard.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/isAbsolute/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function isAbsolute<
	GenericPath extends string
>(
	path: GenericPath
): path is Extract<
	GenericPath,
	`/${string}` | `\\${string}` | `${string}:${"/" | "\\"}${string}`
>;
```

## Parameters

- `path` : The path to test.

## Return value

A boolean and a type guard that narrows the path when it is absolute.

## See also

- [`isUnixPath`](/en/v1/api/common/path/isUnixPath) - Checks for Unix separators
- [`normalize`](/en/v1/api/common/path/normalize) - Normalizes a path
