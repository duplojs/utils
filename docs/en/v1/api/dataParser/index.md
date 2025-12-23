---
outline: [2, 3]
prev:
  text: "Clean"
  link: "/en/v1/api/clean/"
next:
  text: "Date"
  link: "/en/v1/api/date/"
---

# Data Parser

Functions to build, compose, and run immutable validators. `DataParser.*` or `DP.*` describes the expected shape of data, returns an `Either` (`parse` / `asyncParse`), and produces structured errors ready to be serialized.

## How to import?

The library exposes the `DDataParser`, `DDataParserCoerce`, and `DDataParserExtended` namespaces from the main entry **or** via direct import (tree-shaking friendly), which lets you only load what you need.

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

## Primitive parsers

### [string](/en/v1/api/dataParser/string)
Validates strings: `min`, `max`, `regex`, `email`, `url` checkers, with coercion support (`"42"` → normalized `"42"`).

### [number](/en/v1/api/dataParser/number)
Validates numbers with `min`, `max`, `int` constraints and coercion support (`Number(value)`).

### [boolean](/en/v1/api/dataParser/boolean)
Validates booleans or converts them from common strings (`"true"`, `"1"`, etc.).

### [bigint](/en/v1/api/dataParser/bigint)
Validates `bigint` with dedicated `min`/`max` checkers, useful for high-precision identifiers.

### [date](/en/v1/api/dataParser/date)
Validates a `TheDate`, a native `Date`, or a timestamp before converting to `TheDate`.

### [literal](/en/v1/api/dataParser/literal)
Enforces an exact output value (`"admin"`, `42`, `true`, etc.).

### [templateLiteral](/en/v1/api/dataParser/templateLiteral)
Builds a parser from a `TemplateLiteral` pattern (e.g. `order-${number}`).

### [nil](/en/v1/api/dataParser/nil)
Accepts only `null` and allows adding specific checkers.

### [empty](/en/v1/api/dataParser/empty)
Validates absence of a value (`undefined`) in a schema.

### [unknown](/en/v1/api/dataParser/unknown)
Accepts any value while keeping the ability to add checkers/refine.

## Composed structures

### [object](/en/v1/api/dataParser/object)
Declares an object structure, handles optional keys, static inference, and contextualized errors (path `user.email`).

### [array](/en/v1/api/dataParser/array)
Validates homogeneous arrays, with `min`, `max`, `nonEmpty`, etc. checkers.

### [tuple](/en/v1/api/dataParser/tuple)
Defines an ordered sequence of parsers with fixed or variable sizes.

### [record](/en/v1/api/dataParser/record)
Describes a key/value map with separate validation for keys and values.

### [union](/en/v1/api/dataParser/union)
Tries multiple parsers in order, returns the first that succeeds, and otherwise reports detailed errors.

## Variants & optionality

### [optional](/en/v1/api/dataParser/optional)
Allows `undefined` while keeping validation of the present value.

### [nullable](/en/v1/api/dataParser/nullable)
Allows `null` with native support for additional checkers.

### [lazy](/en/v1/api/dataParser/lazy)
Declares recursive schemas (e.g. trees, nested categories) thanks to a deferred function.

## Pipelines & business logic

### [pipe](/en/v1/api/dataParser/pipe)
Composes multiple parsers to chain coercion, validation, transformation, and refinements.

### [transform](/en/v1/api/dataParser/transform)
Transforms a parser result via a controlled function (e.g. `string` → `URL`).

### [refine](/en/v1/api/dataParser/refine)
Adds custom rules (async/sync) with specific messages and metadata.

### [recover](/en/v1/api/dataParser/recover)
Intercepts errors to return an alternative value (fallback) or trigger business logic.

## Coercion

### [coerce.*](/en/v1/api/dataParser/coerce)
Placeholder space for coercive variants (`coerce.string`, `coerce.number`, `coerce.boolean`, `coerce.date`, etc.) when you must normalize data before strict validation.

## Override & extensions

To change the default behavior of `DataParser`, add your own helpers, or build a library/extension on top of it, see the guide [How to override DataParser methods?](/en/v1/api/dataParser/howToOverride).
