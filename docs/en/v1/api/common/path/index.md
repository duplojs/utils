---
outline: [2, 3]
description: "Path utilities to normalize, join, and inspect cross-platform paths."
prev:
  text: "Common"
  link: "/en/v1/api/common/"
next:
  text: "isAbsolute"
  link: "/en/v1/api/common/path/isAbsolute"
---

# Path

Path utilities to normalize, join, and inspect cross-platform paths.

## How to import?

Path functions are exposed from the main entry or via direct import (tree-shaking friendly).

```typescript
import { Path } from "@duplojs/utils";
import * as Path from "@duplojs/utils/common/path";
```

## Checks

### [isAbsolute](/en/v1/api/common/path/isAbsolute)
Checks whether a path is absolute (POSIX, UNC, or Windows drive).

### [isUnixPath](/en/v1/api/common/path/isUnixPath)
Checks whether a path only uses Unix separators.

## Normalization and composition

### [normalize](/en/v1/api/common/path/normalize)
Normalizes a path by resolving segments and separators.

### [join](/en/v1/api/common/path/join)
Joins path segments and normalizes the result.

### [resolveFrom](/en/v1/api/common/path/resolveFrom)
Resolves a list of segments from an origin.

## Extraction

### [getParentFolderPath](/en/v1/api/common/path/getParentFolderPath)
Returns the parent folder of a path.

### [getBaseName](/en/v1/api/common/path/getBaseName)
Returns the last segment of a path, with optional extension removal.

### [getExtensionName](/en/v1/api/common/path/getExtensionName)
Returns the extension of a path, including the dot.
