Functions to build, compose, and run immutable validators. `DataParser.*` or `DP.*` describes the expected shape of data, returns an `Either` (`parse` / `asyncParse`), and produces structured errors ready to be serialized.

**How to import:**
- From the main entry (namespace style)
- Via direct import for tree-shaking

**`DataParser`**
```ts
import { DDataParser, DP } from "@duplojs/utils";
import * as DDataParser from "@duplojs/utils/dataParser";
import * as DP from "@duplojs/utils/dataParser";
```

**`DataParserCoerce`**
```ts
import { DDataParserCoerce, DPC } from "@duplojs/utils";
import * as DDataParserCoerce from "@duplojs/utils/dataParserCoerce";
import * as DPC from "@duplojs/utils/dataParserCoerce";
```

**`DataParserExtended`**
```ts
import { DDataParserExtended, DPE } from "@duplojs/utils";
import * as DDataParserExtended from "@duplojs/utils/dataParserExtended";
import * as DPE from "@duplojs/utils/dataParserExtended";
```

@see https://utils.duplojs.dev/en/v1/api/dataparser

@namespace DP, DPE, DPC
