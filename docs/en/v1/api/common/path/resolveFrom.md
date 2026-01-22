---
outline: [2, 3]
description: "The resolveFrom() function resolves a list of segments from an origin and returns an Either."
prev:
  text: "resolveRelative"
  link: "/en/v1/api/common/path/resolveRelative"
next:
  text: "getParentFolderPath"
  link: "/en/v1/api/common/path/getParentFolderPath"
---

# resolveFrom

The **`resolveFrom()`** function resolves a list of segments from an origin and returns an Either.
It resolves segments in order using `resolveRelative` and only succeeds when the result is absolute.

::: warning
Works only with POSIX paths (not Windows paths).
:::

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/resolveFrom/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function resolveFrom<
    GenericSegment extends string,
>(
    origin: string,
    segments: AnyTuple<GenericSegment>,
): DEither.EitherFail | DEither.EitherSuccess<string>;
```

## Parameters

- `origin` : The origin path.
- `segments` : Array of segments to resolve. (must contain at least 1 segment)

## Return value

An Either `success` with the resolved path when it is absolute, otherwise `fail`.

## See also

- [`resolveRelative`](/en/v1/api/common/path/resolveRelative) - Resolves multiple segments into a single path
- [`getParentFolderPath`](/en/v1/api/common/path/getParentFolderPath) - Returns the parent folder of a path
