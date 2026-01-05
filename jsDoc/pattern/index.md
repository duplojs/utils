Pattern matching utilities for building typed match pipelines. Functions preserve
inputs and return new values.

**How to import:**
- From the main entry (namespace style)
- Via direct import for tree-shaking

```ts
import { DPattern, P } from "@duplojs/utils";
import * as DPattern from "@duplojs/utils/pattern";
import * as P from "@duplojs/utils/pattern";
```

What you will find in this namespace:
- matching flow (`P.match`, `P.when`, `P.otherwise`, `P.exhaustive`)
- predicates and patterns (`P.isMatch`, `P.union`)

@see https://utils.duplojs.dev/en/v1/api/pattern
@see https://utils.duplojs.dev/fr/v1/api/pattern

@namespace P
