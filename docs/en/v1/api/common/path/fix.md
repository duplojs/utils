---
outline: [2, 3]
description: "The fix() function cleans a POSIX path by removing a trailing slash and a leading ./ prefix."
prev:
  text: "isAbsolute"
  link: "/en/v1/api/common/path/isAbsolute"
next:
  text: "resolveRelative"
  link: "/en/v1/api/common/path/resolveRelative"
---

# fix

The **`fix()`** function cleans a POSIX path by removing a trailing slash and a leading `./` prefix.

::: warning
Works only with POSIX paths (not Windows paths).
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/fix/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function fix(
	path: string
): string;
```

## Parameters

- `path` : The path to clean.

## Return value

The path without a trailing slash and without a leading `./` prefix. If the path is `/`, the result is an empty string.

## See also

- [`resolveRelative`](/en/v1/api/common/path/resolveRelative) - Resolves multiple segments into a single path
- [`isAbsolute`](/en/v1/api/common/path/isAbsolute) - Checks whether a path is absolute
