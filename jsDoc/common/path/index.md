Path utilities to resolve and inspect POSIX paths.
They preserve input strings and return new values.

**How to import:**
- From the main common namespace
- Via direct import for tree-shaking

```ts
import { Path } from "@duplojs/utils";
import * as Path from "@duplojs/utils/common/path";
```

What you will find in this namespace:
- checks (`Path.isAbsolute`)
- resolution (`Path.resolveFrom`, `Path.resolveRelative`)
- path parsing (`Path.getParentFolderPath`, `Path.getBaseName`, `Path.getExtensionName`)

@see https://utils.duplojs.dev/en/v1/api/common/path
