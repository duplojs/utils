---
outline: [2, 3]
description: "The resolveFrom() function resolves a list of segments from an origin and returns an absolute path or null."
prev:
  text: "resolveRelative"
  link: "/en/v1/api/common/path/resolveRelative"
next:
  text: "getParentFolderPath"
  link: "/en/v1/api/common/path/getParentFolderPath"
---

# resolveFrom

The **`resolveFrom()`** function resolves a list of segments from an origin and returns an absolute path or `null`.
It resolves segments in order using `resolveRelative` and validates that the final path is absolute.

::: warning
Works only with POSIX paths (not Windows paths).
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/resolveFrom/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

```typescript
function resolveFrom<
    GenericSegment extends string,
>(
    origin: string,
    segments: AnyTuple<GenericSegment>,
    params?: {
        stayInOrigin?: boolean;
    },
): string | null;
```

## Parameters

- `origin` : The origin path.
- `segments` : Array of segments to resolve.
- `params.stayInOrigin` : When `true`, returns `null` if segments would escape the origin.

## Return value

The resolved absolute path, or `null` when the result is not absolute (or when `stayInOrigin` blocks traversal).

## See also

- [`resolveRelative`](/en/v1/api/common/path/resolveRelative) - Resolves multiple segments into a single path
- [`getParentFolderPath`](/en/v1/api/common/path/getParentFolderPath) - Returns the parent folder of a path
