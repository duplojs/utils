Number utilities for immutable, type-safe numeric operations. Functions are designed
for functional composition and do not mutate inputs.

**How to import:**
- From the main entry (namespace style)
- Via direct import for tree-shaking

```ts
import { DNumber, N } from "@duplojs/utils";
import * as DNumber from "@duplojs/utils/number";
import * as N from "@duplojs/utils/number";
```

What you will find in this namespace:
- arithmetic (`N.add`, `N.subtract`, `N.multiply`, `N.divide`)
- comparisons (`N.greater`, `N.less`, `N.between`)
- rounding (`N.floor`, `N.ceil`, `N.round`, `N.trunc`)
- math utilities (`N.min`, `N.max`, `N.sqrt`, `N.power`)

@see https://utils.duplojs.dev/en/v1/api/number

@namespace N
