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

### Classic signature

```typescript
function resolveFrom<
	GenericPaths extends readonly string[]
>(
	paths: GenericPaths,
	origin: string
): DEither.EitherFail | DEither.EitherSuccess<string>;
```

### Curried signature

```typescript
function resolveFrom<
	GenericPaths extends readonly string[]
>(
	origin: string
): (paths: GenericPaths) => DEither.EitherFail | DEither.EitherSuccess<string>;
```

## Parameters

- `paths` : The segments to resolve.
- `origin` : The origin path.

## Return value

An Either `success` with the resolved path when it is absolute, otherwise `fail`.

## See also

- [`resolveRelative`](/en/v1/api/common/path/resolveRelative) - Resolves multiple segments into a single path
- [`getParentFolderPath`](/en/v1/api/common/path/getParentFolderPath) - Returns the parent folder of a path
