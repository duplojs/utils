Object utilities for immutable, type-safe object manipulation. Functions preserve the
original object and return new values.

**How to import:**
- From the main entry (namespace style)
- Via direct import for tree-shaking

```ts
import { DObject, O } from "@duplojs/utils";
import * as DObject from "@duplojs/utils/object";
import * as O from "@duplojs/utils/object";
```

What you will find in this namespace:
- access and queries (`O.getProperty`, `O.getDeepProperty`, `O.hasKeys`)
- transforms (`O.transformProperty`, `O.transformProperties`, `O.to`)
- composition (`O.assign`, `O.override`, `O.pick`, `O.omit`)
- entries and keys (`O.entries`, `O.fromEntries`, `O.keys`, `O.values`)

@see https://utils.duplojs.dev/en/v1/api/object

@namespace O
