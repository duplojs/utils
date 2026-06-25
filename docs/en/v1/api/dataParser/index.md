---
outline: [2, 3]
description: "Functions to build, compose, and run immutable validators. DataParser. or DP. describes the expected shape of data, returns an Either (parse / asyncParse), and produces structured errors ready to be serialized."
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
```

## Checker contract

The checker contract is centered on parser output type: a checker is compatible when its input type matches `Output<Parser>`. Checkers are modeled through this type-compatibility contract.

Some checkers also refine the parser type. `checkerRefine(...)` narrows the output when the predicate is a TypeScript type guard, `checkerEmail()` narrows strings to an email template-literal type, and array min/max checkers can add non-empty tuple and `MaxElements<N>` information when their bounds are literal numbers. These refinements are applied to both classic and extended parsers, and then propagate to Clean constraints and NewTypes.

## Primitive parsers

### [string](/en/v1/api/dataParser/string)
Validates strings: `min`, `max`, `regex`, `email`, `url`, `uuid` checkers, with coercion support (`42` → normalized `"42"`).

### [number](/en/v1/api/dataParser/number)
Validates numbers with `min`, `max`, `int` constraints and coercion support (`Number(value)`).

### [boolean](/en/v1/api/dataParser/boolean)
Validates booleans or converts them from common strings (`"true"`, `"1"`, etc.).

### [bigint](/en/v1/api/dataParser/bigint)
Validates `bigint` with dedicated `min`/`max` checkers, useful for high-precision identifiers.

### [date](/en/v1/api/dataParser/date)
Validates `TheDate`, `SerializedTheDate`, and native `Date` (with optional timestamp/string coercion) before converting to `TheDate`.

### [time](/en/v1/api/dataParser/time)
Validates `TheTime`, `SerializedTheTime`, and safe numeric values, with `min`/`max` checkers and optional coercion.

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

### [errorHandler](/en/v1/api/dataParser/errorHandler)
Reassigns issue messages after parsing, useful when user-facing messages must be declared after the schema.

## Runtime helpers

### [isAsynchronous](/en/v1/api/dataParser/isAsynchronous)
Tells whether a parser (or nested parsers) requires async execution.

## Coercion

### [coerce.*](/en/v1/api/dataParser/coerce)
Placeholder space for coercive variants (`coerce.string`, `coerce.number`, `coerce.boolean`, `coerce.date`, etc.) when you must normalize data before strict validation.
