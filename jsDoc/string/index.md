String utilities for immutable, type-safe string manipulation. Functions preserve the
original string and return new values.

**How to import:**
- From the main entry (namespace style)
- Via direct import for tree-shaking

```ts
import { DString, S } from "@duplojs/utils";
import * as DString from "@duplojs/utils/string";
import * as S from "@duplojs/utils/string";
```

What you will find in this namespace:
- casing and trimming (`S.toUpperCase`, `S.toLowerCase`, `S.capitalize`, `S.uncapitalize`, `S.trim`)
- search and match (`S.includes`, `S.startsWith`, `S.endsWith`, `S.search`, `S.match`, `S.matchAll`, `S.test`)
- composition and slicing (`S.concat`, `S.slice`, `S.substring`, `S.split`)
- indexing (`S.at`, `S.charAt`, `S.indexOf`, `S.lastIndexOf`)
- padding and repeat (`S.padStart`, `S.padEnd`, `S.repeat`)
- misc helpers (`S.normalize`, `S.isKeyof`, `S.isIn`, `S.length`, `S.sort`, `S.sortCompare`, `S.to`)

@see https://utils.duplojs.dev/en/v1/api/string

@namespace S
