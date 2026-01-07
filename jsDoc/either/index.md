Either utilities for explicit success/error flows. Functions preserve values and return
new results without mutation.

**How to import:**
- From the main entry (namespace style)
- Via direct import for tree-shaking
```ts
import { DEither, E } from "@duplojs/utils";
import * as DEither from "@duplojs/utils/either";
import * as E from "@duplojs/utils/either";
```

What you will find in this namespace:
- constructors (`E.left`, `E.right`, `E.bool`, `E.nullable`, `E.nullish`, `E.optional`)
- guards and utilities (`E.hasInformation`, `E.whenHasInformation`, `E.kind`)
- async helpers (`E.future`, `E.safeCallback`)

@see https://utils.duplojs.dev/en/v1/api/either

@namespace E
