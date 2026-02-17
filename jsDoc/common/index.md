Cross-cutting utilities to compose functions, handle promises, manipulate wrappers/kinds, and apply runtime conversions shared by the whole library.

**How to import:**
- From the main entry (namespace style or direct named imports)
- Via direct import for tree-shaking

```ts
import { pipe, when, clone } from "@duplojs/utils";
import * as DCommon from "@duplojs/utils/common";
import { pipe, when, clone } from "@duplojs/utils/common";
```

What you will find in this namespace:
- composition helpers (`pipe`, `innerPipe`, `asyncPipe`, `asyncInnerPipe`, `forward`)
- predicates and guards (`when`, `whenNot`, `whenElse`, `and`, `or`, `isType`, `asserts`, `instanceOf`)
- control flow (`loop`, `asyncLoop`, `asyncRetry`, `sleep`, `memo`)
- promise utilities (`externalPromise`, `promiseObject`)
- form-data utilities (`createFormData`, `TheFormData.fromEntries`, `TheFormData.toFlatEntries`)
- string and value conversions (`stringToMillisecond`, `stringToBytes`, `escapeRegExp`, `toRegExp`)
- wrappers and kinds (`wrapValue`, `unwrap`, `toWrappedValue`, `hasKinds`, `hasSomeKinds`)

@see https://utils.duplojs.dev/en/v1/api/common
