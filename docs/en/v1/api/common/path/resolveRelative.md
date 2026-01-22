---
outline: [2, 3]
description: "The resolveRelative() function resolves multiple path segments into a single POSIX-like path."
prev:
  text: "isAbsolute"
  link: "/en/v1/api/common/path/isAbsolute"
next:
  text: "resolveFrom"
  link: "/en/v1/api/common/path/resolveFrom"
---

# resolveRelative

The **`resolveRelative()`** function resolves multiple path segments into a single POSIX-like path.

::: warning
Works only with POSIX paths (not Windows paths).
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/resolveRelative/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntax

```typescript
function resolveRelative(
    segments: readonly string[]
): string;
```

## Parameters

- `segments` : The path segments to resolve.

## Return value

A resolved path string. Absolute segments reset the base path, and `..` can stay leading when resolving above root.

## See also

- [`resolveFrom`](/en/v1/api/common/path/resolveFrom) - Resolves a list of segments from an origin
