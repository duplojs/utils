Date utilities for immutable, type-safe date manipulation. Functions preserve the
original value and return new values.

This namespace introduces a dedicated `TheDate` (`date{number}{'-'|'+'}`) type, different from the native `Date`.
It is universal and exchange-friendly, based on UTC timestamps to avoid timezone pitfalls.
Conversion helpers let you move between `TheDate` and other date formats when needed.

**How to import:**
- From the main entry (namespace style)
- Via direct import for tree-shaking

```ts
import { DDate, D } from "@duplojs/utils";
import * as DDate from "@duplojs/utils/date";
import * as D from "@duplojs/utils/date";
```

What you will find in this namespace:
- creation and conversion (`D.create`, `D.createOrThrow`, `D.toNative`, `D.toTimestamp`, `D.toISOString`)
- relative dates (`D.now`, `D.today`, `D.yesterday`, `D.tomorrow`)
- formatting and timezone (`D.format`, `D.timezone`, `D.applyTimezone`, `D.getTimezoneOffset`)
- collections and ordering (`D.min`, `D.max`, `D.sort`, `D.closestTo`)
- iteration and rounding (`D.each`, `D.round`)
- checks (`D.is`, `D.isSafeTimestamp`)
- constants and types (`D.constants`, `D.types`)

@see https://utils.duplojs.dev/en/v1/api/date

@namespace D
