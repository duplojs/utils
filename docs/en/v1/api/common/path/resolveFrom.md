---
outline: [2, 3]
description: "The resolveFrom() function resolves a list of segments from an origin."
prev:
  text: "join"
  link: "/en/v1/api/common/path/join"
next:
  text: "getParentFolderPath"
  link: "/en/v1/api/common/path/getParentFolderPath"
---

# resolveFrom

The **`resolveFrom()`** function resolves a list of segments from an origin.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/path/resolveFrom/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

### Classic signature

```typescript
function resolveFrom<
	GenericPaths extends readonly string[]
>(
	paths: GenericPaths,
	origin: string
): string;
```

### Curried signature

```typescript
function resolveFrom<
	GenericPaths extends readonly string[]
>(
	origin: string
): (paths: GenericPaths) => string;
```

## Parameters

- `paths` : The segments to resolve.
- `origin` : The origin path.

## Return value

A normalized path resolved from the origin.

## See also

- [`join`](/en/v1/api/common/path/join) - Joins segments and normalizes the result
- [`normalize`](/en/v1/api/common/path/normalize) - Normalizes a path
