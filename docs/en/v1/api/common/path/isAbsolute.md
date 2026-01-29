---
outline: [2, 3]
description: "The isAbsolute() function checks whether a POSIX path is absolute and does not traverse above root."
prev:
  text: "Path"
  link: "/en/v1/api/common/path/"
next:
  text: "fix"
  link: "/en/v1/api/common/path/fix"
---

# isAbsolute

The **`isAbsolute()`** function checks whether a path is absolute and does not traverse above root.

::: warning
Works only with POSIX paths (not Windows paths).
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/isAbsolute/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function isAbsolute(
	path: string
): boolean;
```

## Parameters

- `path` : The path to test.

## Return value

A boolean indicating whether the path is absolute.

## See also

- [`resolveFrom`](/en/v1/api/common/path/resolveFrom) - Resolves a list of segments from an origin
