Array utilities for immutable, type-safe array manipulation. All functions preserve the
original array and return a new value.

**How to import:**
- From the main entry (namespace style)
- Via direct import for tree-shaking

```ts
import { DArray, A } from "@duplojs/utils";
import * as DArray from "@duplojs/utils/array";
import * as A from "@duplojs/utils/array";
```

What you will find in this namespace:
- iteration and transforms (`A.map`, `A.filter`, `A.reduce`)
- reduce helpers (`A.reduceFrom`)
- element access helpers (`A.at`, `A.first`, `A.last`)
- search and predicates (`A.find`, `A.findIndex`, `A.some`, `A.every`)
- transforms (`A.map`, `A.flatMap`, `A.select`, `A.group`)
- structure updates (`A.set`, `A.insert`, `A.push`, `A.unshift`)
- slicing and composition (`A.slice`, `A.concat`, `A.chunk`, `A.copyWithin`)

@see https://utils.duplojs.dev/en/v1/api/array

@namespace A