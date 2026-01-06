---
outline: [2, 3]
prev:
  text: "Clean"
  link: "/fr/v1/api/clean/"
next:
  text: "Date"
  link: "/fr/v1/api/date/"
---

# Data Parser

Short intro for DataParser namespace and its goals (immutability, validation, error aggregation).

## Comment faire les imports ?

```typescript
// DataParser
import { DDataParser, DP } from "@duplojs/utils";
import * as DDataParser from "@duplojs/utils/dataParser";
import * as DP from "@duplojs/utils/dataParser";

// DataParserCoerce
import { DDataParserCoerce, DPC } from "@duplojs/utils";
import * as DDataParserCoerce from "@duplojs/utils/dataParserCoerce";
import * as DPC from "@duplojs/utils/dataParserCoerce";

// DataParserExtended
import { DDataParserExtended, DPE } from "@duplojs/utils";
import * as DDataParserExtended from "@duplojs/utils/dataParserExtended";
import * as DPE from "@duplojs/utils/dataParserExtended";
```

## Parsers primitifs

### [string](/fr/v1/api/dataParser/string)
Short description.

### [number](/fr/v1/api/dataParser/number)
Short description.

### [boolean](/fr/v1/api/dataParser/boolean)
Short description.

### [bigint](/fr/v1/api/dataParser/bigint)
Short description.

### [date](/fr/v1/api/dataParser/date)
Short description.

### [literal](/fr/v1/api/dataParser/literal)
Short description.

### [templateLiteral](/fr/v1/api/dataParser/templateLiteral)
Short description.

### [nil](/fr/v1/api/dataParser/nil)
Short description.

### [empty](/fr/v1/api/dataParser/empty)
Short description.

### [unknown](/fr/v1/api/dataParser/unknown)
Short description.

## Structures composees

### [object](/fr/v1/api/dataParser/object)
Short description.

### [array](/fr/v1/api/dataParser/array)
Short description.

### [tuple](/fr/v1/api/dataParser/tuple)
Short description.

### [record](/fr/v1/api/dataParser/record)
Short description.

### [union](/fr/v1/api/dataParser/union)
Short description.

## Variants et optionalite

### [optional](/fr/v1/api/dataParser/optional)
Short description.

### [nullable](/fr/v1/api/dataParser/nullable)
Short description.

### [lazy](/fr/v1/api/dataParser/lazy)
Short description.

## Pipelines et logique metier

### [pipe](/fr/v1/api/dataParser/pipe)
Short description.

### [transform](/fr/v1/api/dataParser/transform)
Short description.

### [refine](/fr/v1/api/dataParser/refine)
Short description.

### [recover](/fr/v1/api/dataParser/recover)
Short description.

## Coercition

### [coerce.*](/fr/v1/api/dataParser/coerce)
Short description.

## Override et extensions

Short sentence linking to the guide.
